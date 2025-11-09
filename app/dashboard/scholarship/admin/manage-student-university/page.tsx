
import useLoaderData from "@/app/api/Data_Fetch/useLoaderData";
import AddUniversity from "./components/addUniversity";
import UniversityTable from "./components/universitiesTable";


const ManageStudentUniveristy = async() => {

  const data = await fetch('http://localhost:5000/mange-university/admin',{
    cache : 'no-store',
  });

  const allUniversitiesData = await data.json();

  console.log(allUniversitiesData);

  

  return (
    <div className="min-h-screen  text-center flex flex-col">
      <div className="flex flex-col md:flex-row justify-between my-8 ">
        <h1 className="text-3xl font-bold text-red-500">
          University management
        </h1>
        <AddUniversity/>
      </div>
      <div>
        <UniversityTable allUniversitiesData = {allUniversitiesData}/>
      </div>
    </div>
  );
};

export default ManageStudentUniveristy;
