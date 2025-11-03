"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

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
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
  }

  return (
    <div className="mx-auto max-w-4xl overflow-auto border-2 border-red-500">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-red-600">Create package</h1>
        <p className="text-sm text-gray-600 mt-1">Fill in all information</p>
      </div>

      <Card className="p-8 bg-black">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid gap-6 grid-cols-3">
            <div className="space-y-2">
              <Label htmlFor="name" className="text-sm font-medium">
                Name
              </Label>
              <Input
                id="name"
                name="name"
                placeholder=""
                value={formData.name}
                onChange={handleInputChange}
                className="bg-gray-100"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="subscriptionPeriod" className="text-sm font-medium">
                Subscription period
              </Label>
              <Input
                id="subscriptionPeriod"
                name="subscriptionPeriod"
                placeholder=""
                value={formData.subscriptionPeriod}
                onChange={handleInputChange}
                className="bg-gray-100"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="price" className="text-sm font-medium">
                Price
              </Label>
              <Input
                id="price"
                name="price"
                placeholder=""
                value={formData.price}
                onChange={handleInputChange}
                className="bg-gray-100"
              />
            </div>
          </div>

          <div className="grid gap-6 grid-cols-3">
            <div className="space-y-2">
              <Label htmlFor="billingCycle1" className="text-sm font-medium">
                Billing Cycle
              </Label>
              <Input
                id="billingCycle1"
                name="billingCycle1"
                placeholder=""
                value={formData.billingCycle1}
                onChange={handleInputChange}
                className="bg-gray-100"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="billingCycle2" className="text-sm font-medium">
                Billing cycle
              </Label>
              <Input
                id="billingCycle2"
                name="billingCycle2"
                placeholder=""
                value={formData.billingCycle2}
                onChange={handleInputChange}
                className="bg-gray-100"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="supportType" className="text-sm font-medium">
                Support Type
              </Label>
              <select
                id="supportType"
                name="supportType"
                value={formData.supportType}
                onChange={handleInputChange}
                className="w-full rounded-md border border-gray-300 bg-gray-100 px-3 py-2 text-sm"
              >
                <option value="Select Option 1">Select Option 1</option>
                <option value="option2">Option 2</option>
                <option value="option3">Option 3</option>
              </select>
            </div>
          </div>

          <div className="grid gap-6 grid-cols-3">
            <div className="space-y-2">
              <Label htmlFor="subscriptionFrom" className="text-sm font-medium">
                Subscription From
              </Label>
              <Input
                id="subscriptionFrom"
                name="subscriptionFrom"
                placeholder=""
                value={formData.subscriptionFrom}
                onChange={handleInputChange}
                className="bg-gray-100"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="additionalNotes" className="text-sm font-medium">
                Additional notes
              </Label>
              <Input
                id="additionalNotes"
                name="additionalNotes"
                placeholder=""
                value={formData.additionalNotes}
                onChange={handleInputChange}
                className="bg-gray-100"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="total" className="text-sm font-medium">
                Total
              </Label>
              <Input
                id="total"
                name="total"
                placeholder=""
                value={formData.total}
                onChange={handleInputChange}
                className="bg-gray-100"
              />
            </div>
          </div>

          <div className="grid gap-6 grid-cols-3">
            <div className="space-y-2">
              <Label htmlFor="additionalServices" className="text-sm font-medium">
                Additional Services
              </Label>
              <Input
                id="additionalServices"
                name="additionalServices"
                placeholder=""
                value={formData.additionalServices}
                onChange={handleInputChange}
                className="bg-gray-100"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="packageDescription" className="text-sm font-medium">
                Package Description
              </Label>
              <Input
                id="packageDescription"
                name="packageDescription"
                placeholder=""
                value={formData.packageDescription}
                onChange={handleInputChange}
                className="bg-gray-100"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="value" className="text-sm font-medium">
                Value
              </Label>
              <Input
                id="value"
                name="value"
                placeholder=""
                value={formData.value}
                onChange={handleInputChange}
                className="bg-gray-100"
              />
            </div>
          </div>

          <div className="flex gap-3 pt-6">
            <Button type="button" className="bg-black hover:bg-black/80 text-white">
              Add More +
            </Button>
            <Button type="submit" className="bg-red-600 hover:bg-red-700 text-white">
              Save
            </Button>
          </div>
        </form>
      </Card>
    </div>
  )
}

export default MainModal;