import UniversityDetailsPage from "../components/universityDetailsPage"

interface Params {
  params: Promise<{ id: string }>
}

// Sample university data - in production, this would come from your database
const universitiesData = [
  {
    _id: "69105d4db7e86ba065d65895",
    country: "Australia",
    university: "MIT",
    studyLevel: "Partial",
    universityUrl: "https://web.mit.edu/",
    introduction:
      'The Massachusetts Institute of Technology (MIT) is a private research university in Cambridge, Massachusetts, United States. Established in 1861, MIT has played a significant role in the development of many areas of modern technology and science. In response to the increasing industrialization of the United States, William Barton Rogers organized a school in Boston to create "useful knowledge." Initially funded by a federal land grant, the institute adopted a polytechnic model that stressed laboratory instruction in applied science and engineering. MIT moved from Boston to Cambridge in 1916 and grew rapidly through collaboration with private industry, military branches, and new federal basic research agencies.',
    photo: "https://res.cloudinary.com/dqyfwfeed/image/upload/v1762680113/hu7spxmdwet1nub47vql.jpg",
  },
]

export default async function DetailsPage({ params }: Params) {
  const { id } = await params
  console.log(id)

  const data = await fetch(`http://localhost:5000/manage-university/details/${id}`,{
    cache : 'no-store'
  })
  const universityDetails = await data.json();

  // Find the university by ID, fallback to first in array
  const university = universitiesData.find((u) => u._id === id) || universitiesData[0]

  return <UniversityDetailsPage university={universityDetails} />
}
