import React from 'react'
import { ApplicationTable } from './components/applicationTable';

const ManageStudentApplication =async () => {


  const manageApplicationData = await fetch("http://localhost:5000/admin/manage-application",{
    cache: "no-store"});
  const applicaionData = await manageApplicationData.json()

  return (
    <main className="min-h-screen bg-background">
      <div className="w-full">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
          <div>
            <h1 className="text-3xl font-bold text-foreground">Application Management</h1>
            <p className="text-muted-foreground mt-1">Manage and track all student applications</p>
          </div>
          <button className="inline-flex items-center justify-center px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded-lg font-medium transition-colors whitespace-nowrap">
            <span className="mr-2">+</span>
            Add Application
          </button>
        </div>

        <ApplicationTable applications={applicaionData} />
      </div>
    </main>
  )
}

export default ManageStudentApplication;
