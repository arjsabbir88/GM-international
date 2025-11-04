"use client";

import type React from "react";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import DropDown from "./dropDown";
import { Combobox, ComboboxButton, ComboboxInput, ComboboxOption, ComboboxOptions } from "@headlessui/react";
import { ChevronDown } from "lucide-react";

interface Universities {
  all: string[];
  australia: string[];
  china: string[];
  malaysia: string[];
}

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
  const [selected, setSelected] = useState<string[] | null>(allUniversities);


  console.log(universityList)

  useEffect(() => {
    fetch("/api/universities")
      .then((res) => res.json())
      .then((data) => console.log(data))
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
                <Label htmlFor="supportType" className="text-sm font-medium">
                  Country
                </Label>
                <DropDown />
                {/* <select
                  id="supportType"
                  name="supportType"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm hover:cursor-pointer"
                >
                  <option
                    value="Select Option 1"
                    className="hover:cursor-pointer"
                  >
                    All
                  </option>
                  <option value="option2" className="hover:cursor-pointer">
                    Chaina
                  </option>
                  <option value="option3" className="hover:cursor-pointer">
                    Australia
                  </option>
                  <option value="option3" className="hover:cursor-pointer">
                    Malaysia
                  </option>
                </select> */}
              </div>

              {/* select university */}
              <div className="space-y-2">
                <Label
                  htmlFor="subscriptionPeriod"
                  className="text-sm font-medium"
                >
                  Univercity*
                </Label>
                <select
                  id="supportType"
                  name="supportType"
                  value={formData.subscriptionPeriod}
                  onChange={handleInputChange}
                  className="w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm hover:cursor-pointer"
                >
                  <option
                    value="Select Option 1"
                    className="hover:cursor-pointer"
                  >
                    Select
                  </option>
                  <option value="option2" className="hover:cursor-pointer">
                    Tsinghua university
                  </option>
                  <option value="option3" className="hover:cursor-pointer">
                    Fudan Universty
                  </option>
                  <option value="option3" className="hover:cursor-pointer">
                    Peking University
                  </option>
                  <option value="option3" className="hover:cursor-pointer">
                    Universiti putra malaysia
                  </option>
                  <option value="option3" className="hover:cursor-pointer">
                    University of malaya
                  </option>
                  <option value="option3" className="hover:cursor-pointer">
                    UCSI University
                  </option>
                </select>
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
                <Label htmlFor="billingCycle2" className="text-sm font-medium">
                  Program
                </Label>
                <select
                  id="supportType"
                  name="supportType"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm hover:cursor-pointer"
                >
                  <option
                    value="Select Option 1"
                    className="hover:cursor-pointer"
                  >
                    All
                  </option>
                  <option value="option2" className="hover:cursor-pointer">
                    Health & Medicine
                  </option>
                  <option value="option3" className="hover:cursor-pointer">
                    Business
                  </option>
                  <option value="option3" className="hover:cursor-pointer">
                    Engineering
                  </option>
                  <option value="option3" className="hover:cursor-pointer">
                    Language & calture
                  </option>
                  <option value="option3" className="hover:cursor-pointer">
                    Cpmputing & IT
                  </option>
                  <option value="option3" className="hover:cursor-pointer">
                    Teaching & Education
                  </option>
                </select>
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
                <Label htmlFor="total" className="text-sm font-medium">
                  Study Level
                </Label>
                <select
                  id="supportType"
                  name="supportType"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm hover:cursor-pointer"
                >
                  <option
                    value="Select Option 1"
                    className="hover:cursor-pointer bg-white"
                  >
                    All
                  </option>
                  <option value="option2" className="hover:cursor-pointer">
                    Health & Medicine
                  </option>
                  <option value="option3" className="hover:cursor-pointer">
                    Business
                  </option>
                  <option value="option3" className="hover:cursor-pointer">
                    Engineering
                  </option>
                  <option value="option3" className="hover:cursor-pointer">
                    Language & calture
                  </option>
                  <option value="option3" className="hover:cursor-pointer">
                    Cpmputing & IT
                  </option>
                  <option value="option3" className="hover:cursor-pointer">
                    Teaching & Education
                  </option>
                </select>
              </div>
            </div>

            {/* fourth row */}
            <div className="grid gap-6 grid-cols-3">
              <div className="space-y-2">
                <Label
                  htmlFor="additionalServices"
                  className="text-sm font-medium"
                >
                  Duration
                </Label>
                <select
                  id="supportType"
                  name="supportType"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm hover:cursor-pointer"
                >
                  <option
                    value="Select Option 1"
                    className="hover:cursor-pointer bg-white"
                  >
                    All
                  </option>
                  <option value="option2" className="hover:cursor-pointer">
                    2
                  </option>
                  <option value="option3" className="hover:cursor-pointer">
                    4
                  </option>
                </select>
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
