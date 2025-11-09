import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

interface University {
  _id: string
  country: string
  university: string
  studyLevel: string
  universityUrl: string
  introduction: string
  photo: string
}

// const MOCK_UNIVERSITIES: University[] = [
//   {
//     _id: "1",
//     country: "USA",
//     university: "Harvard University",
//     studyLevel: "Undergraduate & Graduate",
//     universityUrl: "https://harvard.edu",
//     introduction:
//       "Harvard University is one of the most prestigious universities in the world, known for its academic excellence and influential research across multiple disciplines.",
//     photo: "/harvard-university-building.jpg",
//   },
//   {
//     _id: "2",
//     country: "UK",
//     university: "Oxford University",
//     studyLevel: "Undergraduate & Graduate",
//     universityUrl: "https://oxford.edu",
//     introduction:
//       "Oxford University is the oldest university in the English-speaking world, celebrated for its tutorial system and outstanding academic programs.",
//     photo: "/oxford-university-historic-building.jpg",
//   },
//   {
//     _id: "3",
//     country: "Canada",
//     university: "University of Toronto",
//     studyLevel: "Undergraduate & Graduate",
//     universityUrl: "https://toronto.edu",
//     introduction:
//       "University of Toronto is Canada's leading research university with a strong focus on innovation, research, and global impact.",
//     photo: "/university-of-toronto-campus.jpg",
//   },
// ]

export default async function UniversitySection() {

    const data = await fetch('http://localhost:5000/mange-university/admin',{
        cache: "no-cache"
    });

  const universities = await data.json();
  const displayedUniversities = universities.slice(0, 3)

  return (
    <section className="w-full py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">
            Popular <span className="text-red-600">University</span>
          </h2>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {displayedUniversities.map((university: University) => (
            <UniversityCard key={university._id} university={university} />
          ))}
        </div>

        {/* View More Button */}
        {universities.length > 3 && (
          <div className="flex justify-center">
            <Button asChild className="bg-red-600 hover:bg-red-700 text-white px-8 py-2 rounded-full font-semibold">
              <Link href="/universities">View More</Link>
            </Button>
          </div>
        )}
      </div>
    </section>
  )
}

function UniversityCard({ university }: { university: University }) {
  return (
    <div className="border border-red-200 rounded-2xl overflow-hidden hover:shadow-lg transition-shadow duration-300 bg-white flex flex-col h-full">
      {/* Image Container */}
      <div className="relative w-full h-48 sm:h-56 bg-gray-200 overflow-hidden">
        <Image
          src={university.photo || "/placeholder.svg"}
          alt={university.university}
          fill
          className="object-cover"
          priority={false}
        />
      </div>

      {/* Content Container */}
      <div className="p-5 sm:p-6 flex flex-col grow">
        {/* University Name */}
        <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-1">{university.university}</h3>

        {/* Country */}
        <p className="text-xs sm:text-sm text-gray-500 font-semibold mb-3">{university.country}</p>

        {/* Introduction/Description */}
        <p className="text-sm text-gray-600 leading-relaxed mb-5 grow line-clamp-3">{university.introduction}</p>

        {/* View Details Button */}
        <Button
          asChild
          variant="outline"
          className="border-red-600 text-red-600 hover:bg-red-50 w-full font-semibold bg-transparent"
        >
          <Link href={`/universities/${university._id}`}>View Details</Link>
        </Button>
      </div>
    </div>
  )
}

/*
async function getUniversities(): Promise<University[]> {
  const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL || "http://localhost:5000"
  
  try {
    const response = await fetch(`${backendUrl}/mange-university/admin`, {
      cache: "no-cache",
      headers: { "Content-Type": "application/json" },
    })
    
    if (!response.ok) return MOCK_UNIVERSITIES
    const data = await response.json()
    return Array.isArray(data) ? data : MOCK_UNIVERSITIES
  } catch (error) {
    console.error("API fetch failed:", error)
    return MOCK_UNIVERSITIES
  }
}
*/
