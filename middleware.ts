// export const runtime = "nodejs";

// import { NextRequest, NextResponse, } from "next/server"
// import { auth } from "./auth"

// export async function middleware(request: NextRequest) {
//   const session = await auth()

//   const protectedPaths = ["/dashboard", "/profile", "/settings"]
//   const isProtectedPath = protectedPaths.some((path) => request.nextUrl.pathname.startsWith(path))

//   if (isProtectedPath && !session) {
//     return NextResponse.redirect(new URL("/auth/signin", request.url))
//   }

//   if ((request.nextUrl.pathname === "/auth/signin" || request.nextUrl.pathname === "/auth/signup") && session) {
//     return NextResponse.redirect(new URL("/dashboard", request.url))
//   }

//   return NextResponse.next()
// }

// export const config = {
//   matcher: ["/dashboard/:path*", "/profile/:path*", "/settings/:path*", "/auth/:path*"],
// }

// middleware.ts

// 1. Import necessary types and the configured auth handler
import { withAuth } from "next-auth/middleware";
import { NextResponse } from "next/server";
import type { NextRequestWithAuth } from "next-auth/middleware";

// 2. Define the core authorization logic (what happens if the user IS authenticated)
export default withAuth(
  // The handler function receives a request that includes auth data
  function middleware(request: NextRequestWithAuth) {
    const { token } = request.nextauth;
    const { pathname } = request.nextUrl;

    // --- Logic 1: Redirect already signed-in users from auth pages ---
    if ((pathname === "/auth/signin" || pathname === "/auth/signup") && token) {
      return NextResponse.redirect(new URL("/dashboard", request.url));
    }

    // --- Logic 2: Allow access to protected paths if token exists ---
    // The main redirect for unauthenticated users is handled by the config/callbacks below.
    // If the token exists, we do nothing and let the request proceed.
    return NextResponse.next();
  },
  {
    // 3. Define the callbacks for unauthenticated users and public/protected routes
    callbacks: {
      authorized: ({ token, req }) => {
        // Define paths that require authentication
        const protectedPaths = ["/dashboard", "/profile", "/settings"];
        const isProtectedPath = protectedPaths.some((path) =>
          req.nextUrl.pathname.startsWith(path)
        );

        // If it's a protected path AND there is NO token, this returns false,
        // triggering the 'pages.signIn' redirect defined in auth.config.ts (or the default).
        if (isProtectedPath && !token) {
          return false;
        }

        // Otherwise, allow access
        return true;
      },
    },

    // 4. Define the matcher for performance optimization
    // (This is the same as your original matcher)
    pages: {
      signIn: "/auth/signin", // Ensures unauthenticated users go here
    },
  }
);

// 5. Configuration for Next.js to determine when the middleware should run
export const config = {
  matcher: [
    // Include all protected paths and the auth paths
    "/dashboard/:path*",
    "/profile/:path*",
    "/settings/:path*",
    "/auth/:path*",
    // Add other relevant paths if needed
  ],
};
