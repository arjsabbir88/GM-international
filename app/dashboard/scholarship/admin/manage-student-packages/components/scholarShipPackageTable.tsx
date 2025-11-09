

"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import ScholarshipPackageTableHeader from "./packageTableHeader";
import ScholarshipPackageTableRow from "./packageTableRow";

/* ---------------------- TYPES ---------------------- */

// This should match your backend data model
export interface ScholarshipPackageItem {
  _id: string;
  packagePrice: string;
  universityUrl: string;
  deadlineDate: string;
  startingDate: string;
  tuitionFree: string;
  sl_No: string;
  scholarshipDetails: string;
  universitysDescription: string;
  courseName: string;
  applicationRequirement: string;
  idCard: string;
  imgURL: string;
  selectedCountry: {
    id: number;
    name: string;
  };
  selectedUniversity: string;
  selectUniversitiesProgram: string;
  selectStudyLevel: string;
  selectDuration: string;
  selectLanguage: string;
  createdAt: string;
}

/* Props for the main table */
interface ScholarshipPackageProps {
  scholarShipData: ScholarshipPackageItem[];
}

/* Props for mobile row */
interface MobileTableRowProps {
  item: ScholarshipPackageItem;
  index: number;
  isExpanded: boolean;
  onToggle: () => void;
}

/* ---------------------- COMPONENT ---------------------- */

export default function ScholarshipPackageTable({
  scholarShipData,
}: ScholarshipPackageProps) {
  const [sortConfig, setSortConfig] = useState<{ key: string; direction: "asc" | "desc" } | null>(null);
  const [expandedRows, setExpandedRows] = useState<Set<string>>(new Set());

  const toggleRow = (id: string) => {
    const newExpanded = new Set(expandedRows);
    if (newExpanded.has(id)) {
      newExpanded.delete(id);
    } else {
      newExpanded.add(id);
    }
    setExpandedRows(newExpanded);
  };

  const handleSort = (key: string) => {
    let direction: "asc" | "desc" = "asc";
    if (sortConfig?.key === key && sortConfig.direction === "asc") {
      direction = "desc";
    }
    setSortConfig({ key, direction });
  };

  return (
    <div className="space-y-6 animate-fadeIn">
      {/* Table Container */}
      <div className="overflow-hidden border border-border rounded-lg bg-card shadow-sm">
        {/* Desktop Table */}
        <div className="hidden md:block overflow-x-auto">
          <table className="w-full">
            <ScholarshipPackageTableHeader onSort={handleSort} sortConfig={sortConfig} />
            <tbody className="divide-y divide-border">
              {scholarShipData.map((item, index) => (
                <ScholarshipPackageTableRow key={item._id} item={item} index={index} />
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile & Tablet View */}
        <div className="md:hidden divide-y divide-border">
          {scholarShipData.map((item, index) => (
            <MobileTableRow
              key={item._id}
              item={item}
              index={index}
              isExpanded={expandedRows.has(item._id)}
              onToggle={() => toggleRow(item._id)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

/* ---------------------- MOBILE TABLE ROW ---------------------- */

function MobileTableRow({ item, index, isExpanded, onToggle }: MobileTableRowProps) {
  return (
    <div
      className="p-4 sm:p-5 hover:bg-muted/50 transition-colors duration-200 animate-slideUp"
      style={{ animationDelay: `${index * 50}ms` }}
    >
      <div className="flex items-center justify-between gap-3 mb-3">
        <div className="flex-1">
          <div className="font-semibold text-sm sm:text-base text-foreground">{item.selectedUniversity}</div>
          <div className="text-xs sm:text-sm text-muted-foreground">{item.courseName}</div>
        </div>
        <button onClick={onToggle} className="p-2 hover:bg-muted rounded-lg transition-colors duration-200">
          {isExpanded ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
        </button>
      </div>

      {isExpanded && (
        <div className="space-y-3 pt-3 border-t border-border animate-slideDown">
          <div className="grid grid-cols-2 gap-3 text-xs sm:text-sm">
            <div>
              <span className="text-muted-foreground">Country</span>
              <p className="font-medium text-foreground">{item.selectedCountry.name}</p>
            </div>
            <div>
              <span className="text-muted-foreground">Study Level</span>
              <p className="font-medium text-foreground">{item.selectStudyLevel}</p>
            </div>
            <div>
              <span className="text-muted-foreground">Duration</span>
              <p className="font-medium text-foreground">{item.selectDuration}</p>
            </div>
            <div>
              <span className="text-muted-foreground">Costing</span>
              <p className="font-medium text-foreground">${item.packagePrice}</p>
            </div>
            <div>
              <span className="text-muted-foreground">Apply Deadline</span>
              <p className="font-medium text-foreground">
                {new Date(item.deadlineDate).toLocaleDateString()}
              </p>
            </div>
            <div>
              <span className="text-muted-foreground">Starting Date</span>
              <p className="font-medium text-foreground">
                {new Date(item.startingDate).toLocaleDateString()}
              </p>
            </div>
          </div>
          <div className="pt-3 border-t border-border">
            <Button className="w-full bg-foreground text-background hover:bg-foreground/90 transition-colors duration-200">
              Manage
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}
