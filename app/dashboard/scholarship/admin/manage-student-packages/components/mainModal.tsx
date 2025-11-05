"use client";

import type React from "react";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import DropDown from "./dropDown";
import {
  Combobox,
  ComboboxButton,
  ComboboxInput,
  ComboboxOption,
  ComboboxOptions,
} from "@headlessui/react";
import { ChevronDown } from "lucide-react";
import SelectDropdown from "./selectDropDown";

interface Universities {
  all: string[];
  australia: string[];
  china: string[];
  malaysia: string[];
}

interface countryOption {
  id: number;
  name: string;
}

const countryOptions: countryOption[] = [
  { id: 0, name: "All" },
  { id: 1, name: "Australia" },
  { id: 2, name: "China" },
  { id: 3, name: "Malaysia" },
];

const UniversitiesProgram: string[] = [
  "Select Program",
  "Health & Medicine",
  "Business",
  "Engineering",
  "Language & calture",
  "Cpmputing & IT",
  "Teaching & Education",
  "Economics",
  "Art & Design",
];

const studyLevel: string[] = [
  "Select study level",
  "Doctorate",
  "Postgraduate",
  "Undergraduate",
  "Vocational (vet)",
  "Pre-Degree & Vocational",
  "Fundation",
  "School",
];

const duration: string[] = ["Select Duration", "2", "3", "4", "6", "8"];

function MainModal() {
  const [formData, setFormData] = useState({
    // Row 1
    name: "",
    subscriptionPeriod: "",
    price: "",
    // Row 2
    billingCycle1: "",
    billingCycle2: "",
    supportType: "Select Option 1",
    // Row 3
    subscriptionFrom: "",
    additionalNotes: "",
    total: "",
    // Row 4
    additionalServices: "",
    packageDescription: "",
    value: "",
  });
  const [universityList, setUniversityList] = useState<Universities>({
    all: [],
    australia: [],
    china: [],
    malaysia: [],
  });

  const { all: allUniversities, australia, china, malaysia } = universityList;

  const [selectedCountry, setSelectedCountry] = useState<countryOption | null>(
    countryOptions[0]
  );

  const [selectedUniversity, setSelectedUniversity] = useState<string | null>(
    "Select University"
  );

  const [filteredUniversities, setFilteredUniversities] = useState<string[]>(
    allUniversities[0] ? allUniversities : []
  );
  const [selectUniversitiesProgram, setSelectUniversitiesProgram] = useState<
    string | null
  >(UniversitiesProgram[0]);

  const [selectStudyLevel, setSelectStudyLevel] = useState<string | null>(
    studyLevel[0]
  );

  const [selectDuration, setSelectDuration] = useState<string | null>(
    duration[0]
  );

  useEffect(() => {
    const countryMap: Record<string, string[]> = {
      All: allUniversities,
      Australia: australia,
      China: china,
      Malaysia: malaysia,
    };

    setFilteredUniversities(countryMap[selectedCountry?.name ?? "All"] || []);
  }, [selectedCountry, allUniversities, australia, china, malaysia]);

  // console.log(universityList);

  useEffect(() => {
    fetch("/api/universities")
      .then((res) => res.json())
      .then((data) => setUniversityList(data))
      .catch((err) => console.error(err));
  }, []);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  if (!filteredUniversities) {
    return null;
  }

  if (!universityList) {
    return "loading ......";
  }

  console.log(countryOptions, selectedCountry);

  return (
    <div className="mx-auto max-w-4xl overflow-auto bg-white/40">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-red-600">Create package</h1>
        <p className="text-sm text-gray-600 mt-1">Fill in all information</p>
      </div>

      <Card className="p-8">
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* top row */}
          <div className="bg-[#F3F3F3] p-6 rounded-2xl">
            <h3 className="text-start mb-4">* Fill up to add packages</h3>

            <div className="grid gap-6 grid-cols-3">
              {/* fist row */}

              {/* select country */}
              <div className="space-y-2">
                {/* <DropDown /> */}
                <div>
                  <SelectDropdown
                    label="Country"
                    options={countryOptions}
                    selected={selectedCountry}
                    onChange={setSelectedCountry}
                    displayKey="name"
                  />
                </div>
              </div>

              {/* select university */}
              <div className="space-y-2">
                <SelectDropdown
                  label="*University"
                  options={filteredUniversities}
                  selected={selectedUniversity}
                  onChange={setSelectedUniversity}
                />
              </div>

              {/* uploade package img */}
              <div className="space-y-2">
                <Label htmlFor="price" className="text-sm font-medium">
                  Package Thumbnail & LOGO
                </Label>
                <Input
                  id="price"
                  name="price"
                  placeholder=""
                  value={formData.price}
                  onChange={handleInputChange}
                  className="bg-white"
                  type="file"
                />
              </div>
            </div>
          </div>

          <div className="bg-[#F3F3F3] p-6 rounded-2xl">
            {/* second row */}
            <div className="grid gap-6 grid-cols-3">
              <div className="space-y-2">
                <Label htmlFor="billingCycle1" className="text-sm font-medium">
                  Amount in BDT
                </Label>
                <Input
                  id="billingCycle1"
                  name="billingCycle1"
                  placeholder="Amount"
                  value={formData.billingCycle1}
                  onChange={handleInputChange}
                  className="bg-white"
                />
              </div>

              <div className="space-y-2">
                <SelectDropdown
                  label="*Program"
                  options={UniversitiesProgram}
                  selected={selectUniversitiesProgram}
                  onChange={setSelectUniversitiesProgram}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="supportType" className="text-sm font-medium">
                  University web URL
                </Label>
                <Input
                  id="billingCycle1"
                  name="billingCycle1"
                  placeholder="URL"
                  value={formData.billingCycle1}
                  onChange={handleInputChange}
                  className="bg-white"
                />
              </div>
            </div>

            {/* third row */}
            <div className="grid gap-6 grid-cols-3">
              <div className="space-y-2">
                <Label
                  htmlFor="subscriptionFrom"
                  className="text-sm font-medium"
                >
                  Deadline date
                </Label>
                <Input
                  id="subscriptionFrom"
                  name="subscriptionFrom"
                  placeholder=""
                  value={formData.subscriptionFrom}
                  onChange={handleInputChange}
                  className="bg-white"
                  type="date"
                />
              </div>
              <div className="space-y-2">
                <Label
                  htmlFor="additionalNotes"
                  className="text-sm font-medium"
                >
                  Starting Date
                </Label>
                <Input
                  id="additionalNotes"
                  name="additionalNotes"
                  placeholder=""
                  value={formData.additionalNotes}
                  onChange={handleInputChange}
                  className="bg-white"
                  type="date"
                />
              </div>
              <div className="space-y-2">
                <SelectDropdown
                  label="*Study level"
                  options={studyLevel}
                  selected={selectStudyLevel}
                  onChange={setSelectStudyLevel}
                />
              </div>
            </div>

            {/* fourth row */}
            <div className="grid gap-6 grid-cols-3">
              <div className="space-y-2">
                <SelectDropdown
                  label="*Duration"
                  options={duration}
                  selected={selectDuration}
                  onChange={setSelectDuration}
                />
              </div>
              <div className="space-y-2">
                <Label
                  htmlFor="packageDescription"
                  className="text-sm font-medium"
                >
                  Tuition Fees in BDT
                </Label>
                <Input
                  id="packageDescription"
                  name="packageDescription"
                  placeholder=""
                  value={formData.packageDescription}
                  onChange={handleInputChange}
                  className="bg-white"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="value" className="text-sm font-medium">
                  Sl. No.
                </Label>
                <Input
                  id="value"
                  name="value"
                  placeholder=""
                  value={formData.value}
                  onChange={handleInputChange}
                  className="bg-white"
                />
              </div>
            </div>

            {/* fiveth row */}
            <div className="flex justify-between gap-6 ">
              <div className="space-y-2 flex-1">
                <Label
                  htmlFor="additionalServices"
                  className="text-sm font-medium"
                >
                  Scholarship Details
                </Label>
                <textarea
                  id="packageDescription"
                  name="packageDescription"
                  placeholder="Enter Scholarship Details here....."
                  value={formData.packageDescription}
                  // onChange={handleInputChange}
                  className="bg-white w-full"
                />
              </div>
              <div className="space-y-2 max-w-[245px] w-full">
                <Label
                  htmlFor="packageDescription"
                  className="text-sm font-medium"
                >
                  Tuition Fees in BDT
                </Label>
                <Input
                  id="packageDescription"
                  name="packageDescription"
                  placeholder=""
                  value={formData.packageDescription}
                  onChange={handleInputChange}
                  className="bg-white"
                />
              </div>
            </div>

            {/* six row */}
            <div className="flex justify-between gap-6 ">
              <div className="space-y-2 flex-1">
                <Label
                  htmlFor="additionalServices"
                  className="text-sm font-medium"
                >
                  University description
                </Label>
                <textarea
                  id="packageDescription"
                  name="packageDescription"
                  placeholder="University Details here....."
                  value={formData.packageDescription}
                  // onChange={handleInputChange}
                  className="bg-white w-full"
                />
              </div>
              <div className="space-y-2 max-w-[245px] w-full">
                <Label
                  htmlFor="packageDescription"
                  className="text-sm font-medium"
                >
                  Course name
                </Label>
                <Input
                  id="packageDescription"
                  name="packageDescription"
                  placeholder=""
                  value={formData.packageDescription}
                  onChange={handleInputChange}
                  className="bg-white"
                />
              </div>
            </div>
            <div className="flex justify-between gap-6 ">
              <div className="space-y-2 flex-1">
                <Label
                  htmlFor="additionalServices"
                  className="text-sm font-medium"
                >
                  Apply Requirements
                </Label>
                <textarea
                  id="packageDescription"
                  name="packageDescription"
                  placeholder="University Details here....."
                  value={formData.packageDescription}
                  // onChange={handleInputChange}
                  className="bg-white w-full"
                />
              </div>
              <div className="space-y-2 max-w-[245px] w-full">
                <Label
                  htmlFor="packageDescription"
                  className="text-sm font-medium"
                >
                  ID Card
                </Label>
                <Input
                  id="packageDescription"
                  name="packageDescription"
                  placeholder=""
                  value={formData.packageDescription}
                  onChange={handleInputChange}
                  className="bg-white"
                />
              </div>
            </div>
          </div>

          <div className="flex justify-around pt-6">
            <div className="flex gap-3">
              <Button
                type="button"
                className="bg-black hover:bg-black/80 text-white"
              >
                Add More +
              </Button>
              <Button
                type="submit"
                className="bg-red-600 hover:bg-red-700 text-white"
              >
                Save
              </Button>
            </div>
            <div>
              <Button
                type="submit"
                className="bg-red-600 hover:bg-red-700 text-white"
              >
                Clear Form
              </Button>
            </div>
          </div>
        </form>
      </Card>
    </div>
  );
}

export default MainModal;
