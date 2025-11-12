"use client"

import { useState, useMemo, useEffect } from "react"
import { StatusBadge } from "./status-badge"
import { ApplicationRow } from "./applicationTableRow"
import { useSession } from "next-auth/react"

// Sample data based on your MongoDB format
// const sampleApplications = [
//   {
//     _id: "69146db1849235d1c89522b1",
//     country: "Australia",
//     university: "Harvard",
//     firstName: "Mr",
//     lastName: "Sabbir",
//     phoneNumber: "+8801817247388",
//     gender: "Male",
//     dateOfBirth: "03/11/2003",
//     admissionSemester: "Spring",
//     language: "English",
//     courseName: "Engineering",
//     coverage: "Full Scholarship",
//     email: "dev.tariqulislam88@gmail.com",
//     category: "Partial",
//     paymentMethod: "Bkash",
//     imgUrl: "https://res.cloudinary.com/dqyfwfeed/image/upload/v1762595881/n97sjxakhf7dulqqvomq.jpg",
//     status: "pending",
//     degree: "Bachelor of Science",
//     applicantId: "EX.1325456",
//     dateApplied: "12.12.2025",
//     paymentStatus: "Due",
//   },
//   {
//     _id: "69146db1849235d1c89522b2",
//     country: "USA",
//     university: "MIT",
//     firstName: "John",
//     lastName: "Doe",
//     phoneNumber: "+1234567890",
//     gender: "Male",
//     dateOfBirth: "15/05/2001",
//     admissionSemester: "Fall",
//     language: "English",
//     courseName: "Computer Science",
//     coverage: "Full Scholarship",
//     email: "john.doe@gmail.com",
//     category: "Full",
//     paymentMethod: "Credit Card",
//     imgUrl: "https://res.cloudinary.com/dqyfwfeed/image/upload/v1762595881/n97sjxakhf7dulqqvomq.jpg",
//     status: "on-progress",
//     degree: "Bachelor of Engineering",
//     applicantId: "EX.1325457",
//     dateApplied: "11.12.2025",
//     paymentStatus: "Paid",
//   },
//   {
//     _id: "69146db1849235d1c89522b3",
//     country: "Canada",
//     university: "Oxford",
//     firstName: "Sarah",
//     lastName: "Smith",
//     phoneNumber: "+1987654321",
//     gender: "Female",
//     dateOfBirth: "22/08/2002",
//     admissionSemester: "Spring",
//     language: "English",
//     courseName: "Law",
//     coverage: "Partial Scholarship",
//     email: "sarah.smith@gmail.com",
//     category: "Partial",
//     paymentMethod: "Bank Transfer",
//     imgUrl: "https://res.cloudinary.com/dqyfwfeed/image/upload/v1762595881/n97sjxakhf7dulqqvomq.jpg",
//     status: "cancelled",
//     degree: "Bachelor of Law",
//     applicantId: "EX.1325458",
//     dateApplied: "10.12.2025",
//     paymentStatus: "Due",
//   },
//   {
//     _id: "69146db1849235d1c89522b4",
//     country: "UK",
//     university: "Cambridge",
//     firstName: "Emma",
//     lastName: "Wilson",
//     phoneNumber: "+441234567890",
//     gender: "Female",
//     dateOfBirth: "30/03/2003",
//     admissionSemester: "Fall",
//     language: "English",
//     courseName: "Medicine",
//     coverage: "Full Scholarship",
//     email: "emma.wilson@gmail.com",
//     category: "Full",
//     paymentMethod: "Paypal",
//     imgUrl: "https://res.cloudinary.com/dqyfwfeed/image/upload/v1762595881/n97sjxakhf7dulqqvomq.jpg",
//     status: "on-progress",
//     degree: "Bachelor of Medicine",
//     applicantId: "EX.1325459",
//     dateApplied: "09.12.2025",
//     paymentStatus: "Paid",
//   },
//   {
//     _id: "69146db1849235d1c89522b5",
//     country: "Australia",
//     university: "Stanford",
//     firstName: "Michael",
//     lastName: "Johnson",
//     phoneNumber: "+61234567890",
//     gender: "Male",
//     dateOfBirth: "12/07/2002",
//     admissionSemester: "Spring",
//     language: "English",
//     courseName: "Business",
//     coverage: "Partial Scholarship",
//     email: "michael.johnson@gmail.com",
//     category: "Partial",
//     paymentMethod: "Bkash",
//     imgUrl: "https://res.cloudinary.com/dqyfwfeed/image/upload/v1762595881/n97sjxakhf7dulqqvomq.jpg",
//     status: "cancelled",
//     degree: "Bachelor of Business",
//     applicantId: "EX.1325460",
//     dateApplied: "08.12.2025",
//     paymentStatus: "Due",
//   },
//   {
//     _id: "69146db1849235d1c89522b6",
//     country: "Canada",
//     university: "Yale",
//     firstName: "Lisa",
//     lastName: "Brown",
//     phoneNumber: "+14165551234",
//     gender: "Female",
//     dateOfBirth: "18/09/2001",
//     admissionSemester: "Fall",
//     language: "English",
//     courseName: "Engineering",
//     coverage: "Full Scholarship",
//     email: "lisa.brown@gmail.com",
//     category: "Full",
//     paymentMethod: "Credit Card",
//     imgUrl: "https://res.cloudinary.com/dqyfwfeed/image/upload/v1762595881/n97sjxakhf7dulqqvomq.jpg",
//     status: "on-progress",
//     degree: "Bachelor of Engineering",
//     applicantId: "EX.1325461",
//     dateApplied: "07.12.2025",
//     paymentStatus: "Paid",
//   },
// ]
interface FormData {
  _id?: string;
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
  degree: string;
  applicantId: string;
  dateApplied: string;
  paymentStatus: string;
  status: string;
}

export function UserApplicationsTable() {
    const {data: session, status} = useSession()
  const [filteredApplications,setFilteredApplications] = useState<FormData[]>([])
  const [loading, setLoading] = useState(false)
 
   const email = session?.user?.email;

  useEffect(()=>{
    // Fetch applications from API and set to state
    const applicationData = async ()=>{
        if(!email) return;
        try{
            setLoading(true);
            const response = await fetch(`http://localhost:5000/user/application-status?email=${email}`,{
                cache: "no-cache",
            });
            const data = await response.json();
            console.log("Fetched applications:", data);
            setFilteredApplications(data);
        }catch(error){
            console.error("Error fetching applications:", error);
        }finally{
            setLoading(false);
        }
    }

    applicationData();
  },[email, setFilteredApplications])

  


  if(loading){
    return <div>Loading...</div>
  }
  return (
    <div className="w-full">
      {/* Desktop Table View */}
      <div className="hidden md:block overflow-x-auto rounded-xl shadow-lg border border-slate-200 dark:border-slate-700">
        <table className="w-full">
          <thead>
            <tr className="bg-linear-to-r from-slate-900 to-slate-800 dark:from-slate-800 dark:to-slate-900">
              <th className="px-6 py-4 text-left text-sm font-semibold text-white">University Name</th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-white">Program</th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-white">Degree</th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-white">Applicant Id.</th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-white">Date Applied</th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-white">Payment Status</th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-white">Application Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-red-200 dark:divide-slate-700 py-4">
            {filteredApplications.map((application, index) => (
              <tr
                key={application._id}
                className="hover:bg-red-200 dark:hover:bg-red-800 transition-colors duration-200 animate-fade-in py-4"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <td className="px-6 py-4 text-sm text-slate-900 dark:text-slate-100 font-medium">
                  {application.university}
                </td>
                <td className="px-6 py-4 text-sm text-slate-600 dark:text-slate-400">{application.courseName}</td>
                <td className="px-6 py-4 text-sm text-slate-600 dark:text-slate-400">{application.degree}</td>
                <td className="px-6 py-4 text-sm text-slate-600 dark:text-slate-400">{application.applicantId}</td>
                <td className="px-6 py-4 text-sm text-slate-600 dark:text-slate-400">{application.dateApplied}</td>
                <td className="px-6 py-4">
                  <StatusBadge type="payment" status={application.paymentStatus} />
                </td>
                <td className="px-6 py-4">
                  <StatusBadge type="application" status={application.status} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile Card View */}
      <div className="md:hidden space-y-4">
        {filteredApplications.map((application, index) => (
          <ApplicationRow key={application._id} application={application} index={index} />
        ))}
      </div>
    </div>
  )
}
