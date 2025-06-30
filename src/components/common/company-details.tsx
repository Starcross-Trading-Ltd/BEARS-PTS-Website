import React from 'react';

export const CompanyDetails: React.FC = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
      <h3 className="text-2xl font-bold text-gray-800 mb-4">Company Details</h3>
      <div className="text-gray-600 space-y-2">
        <p>
          Starcross Trading Limited T/A BEARS<br />
          Ambulance HQ Unit 2 Old Post Office Lane,<br />
          Kidbrooke London SE3 9BY
        </p>
        <p>
          <a href="tel:02082025160" className="text-blue-600 hover:underline">
            Enquiries: 020 8202 5160
          </a>
        </p>
      </div>
    </div>
  );
}; 