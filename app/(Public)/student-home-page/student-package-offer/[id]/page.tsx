import { OfferSidebar } from "../components/offerSidebar";


interface OfferDetailsPageProps {
  params: { id: string };
}

export default async function OfferDetailsPage({params}:OfferDetailsPageProps) {

    const offerId = params.id;
    // const id = parsed.id;

    console.log("params : ",offerId);
    // console.log("id",id)

//   const res = await fetch(
//     `http://localhost:5000/admin/scholarship-package-management/${id}`,
//     {
//       cache: "no-store",
//     }
//   );

//   const packageDetails = await res.json();

//   console.log("form details page",packageDetails);

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Header */}
            <div className="space-y-2">
              <div className="text-sm text-muted-foreground font-semibold">
                LOGO
              </div>
              <h1 className="text-4xl font-bold">University Name</h1>
              <p className="text-xl text-muted-foreground">Subject Name</p>
            </div>

            {/* University Description */}
            <section className="space-y-3">
              <h2 className="text-2xl font-bold">University Description:</h2>
              <p className="text-foreground/80 leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem
                ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum
                dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor
                sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit
                amet, consectetur adipiscing elit.
              </p>
              <a
                href="#"
                className="text-destructive font-semibold hover:underline"
              >
                Visit Website
              </a>
            </section>

            {/* Scholarship Details */}
            <section className="space-y-3">
              <h2 className="text-2xl font-bold">Scholarship Details:</h2>
              <p className="text-foreground/80 leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem
                ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum
                dolor sit amet, consectetur adipiscing elit.
              </p>
            </section>

            {/* Apply Requirements */}
            <section className="space-y-3">
              <h2 className="text-2xl font-bold">Apply Requirements:</h2>
              <ul className="space-y-2">
                <li className="flex gap-3 text-foreground/80">
                  <span className="text-destructive">•</span>
                  <span>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </span>
                </li>
                <li className="flex gap-3 text-foreground/80">
                  <span className="text-destructive">•</span>
                  <span>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </span>
                </li>
                <li className="flex gap-3 text-foreground/80">
                  <span className="text-destructive">•</span>
                  <span>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </span>
                </li>
                <li className="flex gap-3 text-foreground/80">
                  <span className="text-destructive">•</span>
                  <span>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </span>
                </li>
                <li className="flex gap-3 text-foreground/80">
                  <span className="text-destructive">•</span>
                  <span>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </span>
                </li>
              </ul>
            </section>

            {/* Application Process */}
            <section className="space-y-3">
              <h2 className="text-2xl font-bold">Application Process:</h2>
              <ul className="space-y-2">
                <li className="flex gap-3 text-foreground/80">
                  <span className="text-destructive">•</span>
                  <span>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </span>
                </li>
                <li className="flex gap-3 text-foreground/80">
                  <span className="text-destructive">•</span>
                  <span>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </span>
                </li>
                <li className="flex gap-3 text-foreground/80">
                  <span className="text-destructive">•</span>
                  <span>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </span>
                </li>
                <li className="flex gap-3 text-foreground/80">
                  <span className="text-destructive">•</span>
                  <span>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </span>
                </li>
              </ul>
            </section>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <OfferSidebar />
          </div>
        </div>
      </div>
    </div>
  );
}
