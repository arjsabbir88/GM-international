import React from "react";
import AddUniversity from "./components/addUniversity";



const ManageStudentUniveristy = () => {
  return (
    <div className="min-h-screen w-7xl  text-center flex flex-col">
      <div>
        <AddUniversity/>
      </div>
      <div className="text-4xl text-red-500 font-bold mx-auto flex justify-center items-center flex-col">
        this is mange university
        <h1 className="mx-auto text-3xl text-red-500">comming soon....</h1>
      </div>
    </div>
  );
};

export default ManageStudentUniveristy;
