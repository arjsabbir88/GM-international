"use client";

import { Plus } from "lucide-react";
import React, { useState } from "react";
import AddApplicationModal from "./addApplicationModal";

const AddApplication = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <button
      onClick={()=>setIsOpen(true)}
       className="inline-flex items-center justify-center px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded-lg font-medium transition-colors whitespace-nowrap hover:cursor-pointer">
        <span className="mr-2">+</span>
        Add Application
      </button>

      {/* Modal */}
      <AddApplicationModal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
      />
    </div>
  );
};

export default AddApplication;
