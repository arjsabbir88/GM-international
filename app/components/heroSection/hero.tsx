// app/page.tsx
import Image from "next/image";
import { ArrowLeft, ArrowRight, MessageCircle, Mail, Search } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

export default function Hero() {
  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url("https://i.postimg.cc/NFxJtpTB/Group-308.png")`,
      }}
    >
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-white/80 via-white/60 to-white/40" />

      <div className="relative container mx-auto flex items-end justify-center min-h-screen text-center md:text-left md:items-start">
        <div className="text-center flex flex-col">
          {/* Plane + curved line */}
          <div className="flex justify-center md:justify-start">
            <Image
              src="https://i.postimg.cc/3RTFw2Ys/Union-1.png"
              alt="Plane icon"
              width={180}
              height={120}
              className="object-contain relative top-10"
            />
          </div>

          <div>
            {/* Heading */}
            <h1 className="mb-2 text-3xl font-bold text-gray-800 md:text-5xl">
              We Provide You Best
            </h1>
            <h2 className="mb-6 text-4xl font-extrabold text-red-600 md:text-6xl">
              INTERNATIONAL <span className="text-black">Deals</span>
            </h2>

            {/* Description */}
            <p className="mb-8 max-w-2xl text-sm leading-relaxed text-gray-600 md:text-base">
              Jorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              vulputate libero et velit interdum, ac aliquet odio torquent per
              conubia nostra, per inceptos himenaeos condimentum lobortisellit.
            </p>

            {/* CTA button */}
            <a
              href="#about"
              className="inline-flex items-center gap-2 rounded-full bg-red-600 px-6 py-3 text-sm font-medium text-white transition hover:bg-red-700"
            >
              About Us
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>

        {/* Navigation arrows (optional) */}
        {/* <div className="absolute left-4 top-1/2 hidden -translate-y-1/2 md:flex">
          <ArrowLeft className="h-8 w-8 text-red-600" />
        </div>
        <div className="absolute right-4 top-1/2 hidden -translate-y-1/2 md:flex">
          <ArrowRight className="h-8 w-8 text-red-600" />
        </div> */}

        {/* Floating contact icons (right side) */}
        <div className="absolute -right-45 top-1/2 -translate-y-1/2 space-y-3 md:flex md:flex-col">
          <a
            href="https://wa.me/1234567890"
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-20 w-20 items-center justify-center rounded-l-2xl bg-red-600 text-white shadow-lg transition hover:bg-red-700"
          >
            <FaWhatsapp className="h-12 w-12" />
          </a>
          <a
            href="mailto:info@example.com"
            className="flex h-20 w-20 items-center justify-center rounded-l-2xl bg-red-600 text-white shadow-lg transition hover:bg-red-700"
          >
            <Mail className="h-12 w-12" />
          </a>
        </div>

        {/* Search bar (bottom) */}
        <div className="absolute bottom-30 w-full -translate-x-1/2 md:left-auto md:translate-x-0">
          <div className="w-full mx-auto shadow-xl">
            <div className="relative">
              <input
                type="text"
                placeholder="Search here"
                className="w-full pl-10 pr-4 py-4 rounded-lg border border-gray-300 focus:border-red-500 focus:ring-1 focus:ring-red-500 outline-none shadow-sm"
              />
              <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                <Search size={20} color="red"/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
