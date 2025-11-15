import UniversityDetailsPage from "../components/universityDetailsPage"

interface Params {
  params: Promise<{ id: string }>
}



export default async function DetailsPage({ params }: Params) {
  const { id } = await params
  console.log(id)

  const data = await fetch(`http://localhost:5000/manage-university/details/${id}`,{
    cache : 'no-store'
  })
  const universityDetails = await data.json();


  return <UniversityDetailsPage university={universityDetails} />
}
