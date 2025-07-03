import React from 'react'
import { Link } from 'react-router-dom'

export default function FirstLineManager() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-8">
      <h1 className="text-3xl font-bold text-primary mb-4">First Line Manager</h1>
      <p className="text-lg text-gray-700 mb-8">This is a placeholder page for the First Line Manager vacancy. More details coming soon.</p>
      <Link to="/careers" className="text-green-700 hover:underline">&larr; Back to vacancies</Link>
    </div>
  )
} 