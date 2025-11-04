"use client";
import React from "react";
import MainModal from "./mainModal";

interface StudentPackageModal {
  isOpen: boolean;
  onClose: () => void;
}

const StudentPackageModal: React.FC<StudentPackageModal> = ({
  isOpen,
  onClose,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 max-w-5xl mx-auto z-50 overflow-auto">
      <div className="bg-white rounded-2xl shadow-xl p-6 w-full text-center relative">
        <div className="text-end">
          <button
            onClick={onClose}
            className="mt-2 px-4 py-2 bg-red-500 text-white rounded-xl hover:bg-red-600"
          >
            Close
          </button>
        </div>
        <div>
          <MainModal />
        </div>
      </div>
    </div>
  );
};

export default StudentPackageModal;
