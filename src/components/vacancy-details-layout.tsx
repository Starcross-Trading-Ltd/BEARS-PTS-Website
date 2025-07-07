import React from 'react'

interface SidebarInfo {
  location: string
  contractType: string
  salary: string
  reportsTo?: string
  responsibleTo?: string
}

interface VacancyDetailsLayoutProps {
  jobTitle: string
  jobPurpose: React.ReactNode
  responsibilities: React.ReactNode
  sidebar: SidebarInfo
  aboutUs: React.ReactNode
  staffBenefits: React.ReactNode
  children?: React.ReactNode
  applicationForm?: React.ReactNode
}

export default function VacancyDetailsLayout({
  jobTitle,
  jobPurpose,
  responsibilities,
  sidebar,
  aboutUs,
  staffBenefits,
  children,
  applicationForm,
}: VacancyDetailsLayoutProps) {
  return (
    <div className="bg-white min-h-screen py-10 px-2 md:px-0">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Main content */}
        <div className="md:col-span-2">
          <h1 className="text-3xl md:text-4xl font-bold text-primary mb-6">{jobTitle}</h1>
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-2">Job Purpose</h2>
            <div className="text-gray-700 text-lg">{jobPurpose}</div>
          </section>
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-2">Responsibilities</h2>
            <div className="text-gray-700 text-lg">{responsibilities}</div>
          </section>
          {children}
          <section className="mt-12 mb-8">
            <h2 className="text-2xl font-semibold mb-2">About us</h2>
            <div className="text-gray-700 text-lg">{aboutUs}</div>
          </section>
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-2">Staff Benefits</h2>
            <div className="text-gray-700 text-lg">{staffBenefits}</div>
          </section>
          {applicationForm && (
            <section id="apply" className="mb-8">
              {applicationForm}
            </section>
          )}
        </div>
        {/* Sidebar */}
        <aside className="bg-gray-50 rounded-xl shadow p-6 h-fit flex flex-col gap-4">
          <div>
            <div className="text-xs text-gray-500 font-semibold mb-1">LOCATION</div>
            <div className="text-base text-gray-900 mb-2">{sidebar.location}</div>
            <div className="text-xs text-gray-500 font-semibold mb-1">CONTRACT TYPE</div>
            <div className="text-base text-gray-900 mb-2">{sidebar.contractType}</div>
            <div className="text-xs text-gray-500 font-semibold mb-1">SALARY</div>
            <div className="text-base text-gray-900 mb-2">{sidebar.salary}</div>
            {sidebar.reportsTo && (
              <>
                <div className="text-xs text-gray-500 font-semibold mb-1">REPORTS TO</div>
                <div className="text-base text-gray-900 mb-2">{sidebar.reportsTo}</div>
              </>
            )}
            {sidebar.responsibleTo && (
              <>
                <div className="text-xs text-gray-500 font-semibold mb-1">RESPONSIBLE TO</div>
                <div className="text-base text-gray-900 mb-2">{sidebar.responsibleTo}</div>
              </>
            )}
          </div>
          <a href="#apply" className="mt-4 inline-block px-6 py-3 bg-green-600 text-white font-semibold rounded-lg shadow hover:bg-green-700 transition text-center">Apply Now</a>
        </aside>
      </div>
    </div>
  )
} 