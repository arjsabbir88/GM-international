"use client";

import { useState } from "react";

interface Application {
  _id: { $oid: string };
  country: string;
  university: string;
  firstName: string;
  lastName: string;
  phoneNumber: string;
  gender: string;
  dateOfBirth: string;
  admissionSemester: string;
  language: string;
  courseName: string;
  coverage: string;
  email: string;
  category: string;
  paymentMethod: string;
  imgUrl: string;
  status: string;
}

interface ApplicationTableProps {
  applications: Application[];
}

export function ApplicationTable({ applications }: ApplicationTableProps) {
  const [viewMode, setViewMode] = useState<"list" | "card">("list");

  console.log(applications);

  const getStatusColor = (status: string) => {
    switch (status) {
      case "approved":
        return "bg-green-100 text-green-800";
      case "rejected":
        return "bg-red-100 text-red-800";
      case "pending":
        return "bg-yellow-100 text-yellow-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const getStatusLabel = (status?: string) =>
  status ? status.charAt(0).toUpperCase() + status.slice(1) : "Unknown";

  // Mobile/Tablet Card View
  const CardView = () => (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {applications.map((app) => (
        <div
          key={app._id.$oid}
          className="bg-card border border-border rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow"
        >
          <div className="flex items-start gap-3 mb-4">
            <img
              src={
                app.imgUrl ||
                "/placeholder.svg?height=40&width=40&query=student"
              }
              alt={`${app.firstName} ${app.lastName}`}
              width={40}
              height={40}
              className="rounded-full object-cover"
            />
            <div className="flex-1 min-w-0">
              <h3 className="font-semibold text-foreground truncate">
                {app.firstName} {app.lastName}
              </h3>
              <p className="text-sm text-muted-foreground truncate">
                {app.email}
              </p>
            </div>
          </div>

          <div className="space-y-2 mb-4 text-sm">
            <div className="flex justify-between items-center">
              <span className="text-muted-foreground">University</span>
              <span className="font-medium text-foreground">
                {app.university}
              </span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-muted-foreground">Program</span>
              <span className="font-medium text-foreground">
                {app.courseName}
              </span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-muted-foreground">Country</span>
              <span className="font-medium text-foreground">{app.country}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-muted-foreground">Semester</span>
              <span className="font-medium text-foreground">
                {app.admissionSemester}
              </span>
            </div>
          </div>

          <div className="flex items-center justify-between pt-3 border-t border-border">
            <span
              className={`text-xs font-semibold px-2 py-1 rounded ${getStatusColor(
                app.status
              )}`}
            >
              {getStatusLabel(app.status)}
            </span>
            <button className="text-sm font-medium text-primary hover:text-primary/80 transition-colors">
              View Details
            </button>
          </div>
        </div>
      ))}
    </div>
  );

  // Desktop Table View
  const TableView = () => (
    <div className="bg-card border border-border rounded-lg overflow-auto shadow-sm">
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-border bg-muted/50">
              <th className="px-4 py-3 text-left text-sm font-semibold text-foreground">
                University
              </th>
              <th className="px-4 py-3 text-left text-sm font-semibold text-foreground">
                Applicant Name
              </th>
              <th className="px-4 py-3 text-left text-sm font-semibold text-foreground">
                Program
              </th>
              <th className="px-4 py-3 text-left text-sm font-semibold text-foreground">
                Degree
              </th>
              <th className="px-4 py-3 text-left text-sm font-semibold text-foreground">
                Semester
              </th>
              <th className="px-4 py-3 text-left text-sm font-semibold text-foreground">
                Status
              </th>
              <th className="px-4 py-3 text-center text-sm font-semibold text-foreground">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {applications.map((app, index) => (
              <tr
                key={app._id.$oid}
                className={`border-b border-border hover:bg-muted/30 transition-colors ${
                  index % 2 === 0 ? "bg-background/50" : "bg-background"
                }`}
              >
                <td className="px-4 py-3">
                  <div className="flex items-center gap-2">
                    <img
                      src={
                        app.imgUrl ||
                        "/placeholder.svg?height=32&width=32&query=student"
                      }
                      alt={app.university}
                      width={32}
                      height={32}
                      className="rounded object-cover"
                    />
                    <span className="text-sm font-medium text-foreground">
                      {app.university}
                    </span>
                  </div>
                </td>
                <td className="px-4 py-3 text-sm text-foreground">
                  {app.firstName} {app.lastName}
                </td>
                <td className="px-4 py-3 text-sm text-foreground">
                  {app.courseName}
                </td>
                <td className="px-4 py-3 text-sm text-foreground">
                  {app.category}
                </td>
                <td className="px-4 py-3 text-sm text-foreground">
                  {app.admissionSemester}
                </td>
                <td className="px-4 py-3">
                  <span
                    className={`inline-block text-xs font-semibold px-2 py-1 rounded ${getStatusColor(
                      app.status
                    )}`}
                  >
                    {getStatusLabel(app.status)}
                  </span>
                </td>
                <td className="px-4 py-3 text-center">
                  <button className="text-sm font-medium text-primary hover:text-primary/80 transition-colors">
                    Manage
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );

  return (
    <div className="space-y-4">
      {/* View Mode Toggle - Hidden on desktop */}
      <div className="flex md:hidden justify-end">
        <div className="inline-flex gap-2 bg-muted p-1 rounded-lg">
          <button
            onClick={() => setViewMode("list")}
            className={`px-3 py-1 rounded text-sm font-medium transition-colors ${
              viewMode === "list"
                ? "bg-primary text-primary-foreground"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            List
          </button>
          <button
            onClick={() => setViewMode("card")}
            className={`px-3 py-1 rounded text-sm font-medium transition-colors ${
              viewMode === "card"
                ? "bg-primary text-primary-foreground"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            Card
          </button>
        </div>
      </div>

      {/* Responsive Content */}
      <div className="hidden lg:block">
        <TableView />
      </div>

      <div className="lg:hidden">
        {viewMode === "list" ? <TableView /> : <CardView />}
      </div>

      {/* Mobile-only Card View */}
      <div className="md:hidden">
        <CardView />
      </div>
    </div>
  );
}
