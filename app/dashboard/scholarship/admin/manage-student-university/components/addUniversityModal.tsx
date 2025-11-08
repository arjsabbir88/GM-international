"use client";

import React from "react";

interface UniversityPackageModal {
  isOpen: boolean;
  onClose: () => void;
}

const AddUniversityModal: React.FC<UniversityPackageModal> = ({
  isOpen,
  onClose,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-auto flex justify-center items-center bg-black/20 backdrop-blur-md p-4">
      <div className="max-h-[80vh] bg-white shadow-xl p-6 w-full max-w-5xl text-center relative flex flex-col items-center overflow-auto rounded-2xl">
        <div className="w-full text-end">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-red-500 text-white rounded-xl hover:bg-red-600"
          >
            Close
          </button>
        </div>

        <div className="w-full text-3xl text-red-500 font-bold">
          this is modal content part
        </div>
      </div>
    </div>
  );
};

export default AddUniversityModal;
