"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export interface University {
  country: string;
  university: string;
  studyLevel: string;
  universityUrl: string;
}

interface UniversityTableProps {
  allUniversitiesData: University[];
}

export default function UniversityTable({
  allUniversitiesData,
}: UniversityTableProps) {
  const [isHover, setIsHover] = useState(false);

  return (
    <div className="overflow-x-auto">
      <motion.table
        className="min-w-full w-full text-left border-collapse rounded-2xl overflow-hidden shadow-sm"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {/* Table Header */}
        <thead className="bg-white shadow-md">
          <tr className="text-gray-800 font-semibold text-sm sm:text-base">
            <th className="px-6 py-4">University Name</th>
            <th className="px-6 py-4">Country</th>
            <th className="px-6 py-4">Study Level</th>
            <th className="px-6 py-4">Web URL</th>
            <th className="px-6 py-4 text-center">Manage</th>
          </tr>
        </thead>

        {/* Table Body */}
        <motion.tbody
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.08,
              },
            },
          }}
        >
          {allUniversitiesData.map((uni, index) => (
            <motion.tr
              key={index}
              className="border-b transition-colors duration-300 text-sm hover:border hover:border-red-300 hover:bg-red-200"
              onMouseEnter={() => setIsHover(true)}
              onMouseLeave={() => setIsHover(false)}
              variants={{
                hidden: { opacity: 0, y: 15 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              <td className="px-6 py-4 text-gray-700">{uni.university}</td>
              <td className="px-6 py-4 text-gray-700">{uni.country}</td>
              <td className="px-6 py-4 text-gray-700">{uni.studyLevel}</td>
              <td className="px-6 py-4 text-blue-400 underline cursor-pointer">
                {uni.universityUrl}
              </td>
              <td className="px-6 py-4 text-center">
                <Button
                  variant="secondary"
                  className="rounded-lg px-4 py-1 text-sm transition-all text-white duration-300 hover:scale-105 bg-red-600 hover:cursor-pointer hover:text-black"
                >
                  Manage
                </Button>
              </td>
            </motion.tr>
          ))}
        </motion.tbody>
      </motion.table>
    </div>
  );
}
