"use client"

import { Plus } from "lucide-react";
import React, { useState } from "react";
import StudentPackageModal from "./components/StudentPackageModal";

const ManageStudentPackage:React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
     <div>
      <div>
        <button
          onClick={() => setIsOpen(true)}
          className="px-6 py-2 rounded-2xl border-2 border-red-500 flex gap-2 items-center hover:bg-red-500 hover:text-white transition"
        >
          Create Package <Plus className="text-current" />
        </button>
      </div>

      <div className="min-h-screen w-full text-4xl text-red-500 font-bold mx-auto justify-center items-center text-center">
        Student package
        <h1 className="mx-auto text-3xl text-red-500">coming soon....</h1>
      </div>

      <StudentPackageModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </div>
  );
};

export default ManageStudentPackage;
