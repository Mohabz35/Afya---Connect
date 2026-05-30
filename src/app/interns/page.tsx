'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function InternsPage() {
  const [selectedPatient, setSelectedPatient] = useState<any>(null);

  const patientRequests = [
    { id: 1, name: 'John Doe', age: 30, location: 'Nairobi', symptoms: 'Headache and slight fever for 2 days.', status: 'Pending' },
    { id: 2, name: 'Mary Wanjiku', age: 45, location: 'Kiambu', symptoms: 'Persistent cough and chest pain.', status: 'Under Review' },
    { id: 3, name: 'Peter Omolo', age: 12, location: 'Kisumu', symptoms: 'Stomach ache and vomiting since morning.', status: 'Pending' },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <main className="flex-1 p-6 md:p-12">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl font-bold text-blue-900 mb-6">Medical Intern Dashboard</h1>

          <div className="grid gap-6 lg:grid-cols-3 mb-8">
            <div className="p-6 bg-white rounded-xl shadow-sm border border-blue-100">
              <div className="text-sm font-medium text-gray-500 uppercase tracking-wider">Total Consultations</div>
              <div className="text-3xl font-bold text-blue-600">12</div>
            </div>
            <div className="p-6 bg-white rounded-xl shadow-sm border border-yellow-100">
              <div className="text-sm font-medium text-gray-500 uppercase tracking-wider">Pending Review</div>
              <div className="text-3xl font-bold text-yellow-600">3</div>
            </div>
            <div className="p-6 bg-white rounded-xl shadow-sm border border-green-100">
              <div className="text-sm font-medium text-gray-500 uppercase tracking-wider">Approved Hours</div>
              <div className="text-3xl font-bold text-green-600">48.5</div>
            </div>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <div className={`lg:col-span-2 bg-white rounded-xl shadow-md overflow-hidden ${selectedPatient ? 'hidden lg:block' : ''}`}>
              <div className="px-6 py-4 border-b border-gray-100 flex justify-between items-center bg-white">
                <h2 className="text-xl font-bold text-gray-800">Incoming Patient Requests</h2>
                <span className="bg-blue-100 text-blue-700 text-xs font-bold px-2.5 py-0.5 rounded-full">LIVE</span>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-left">
                  <thead className="bg-gray-50 text-gray-500 text-sm uppercase font-semibold">
                    <tr>
                      <th className="px-6 py-4">Patient</th>
                      <th className="px-6 py-4">Symptoms</th>
                      <th className="px-6 py-4">Action</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    {patientRequests.map((request) => (
                      <tr key={request.id} className={`hover:bg-gray-50 transition-colors ${selectedPatient?.id === request.id ? 'bg-blue-50' : ''}`}>
                        <td className="px-6 py-4">
                          <div className="font-semibold text-gray-900">{request.name}</div>
                          <div className="text-xs text-gray-500">{request.location} • {request.age}yrs</div>
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-600 max-w-xs truncate">{request.symptoms}</td>
                        <td className="px-6 py-4">
                          <button
                            onClick={() => setSelectedPatient(request)}
                            className="text-blue-600 font-bold hover:text-blue-800 text-sm"
                          >
                            Attend
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {selectedPatient ? (
              <div className="lg:col-span-1 space-y-6">
                <div className="bg-white p-6 rounded-xl shadow-md border-t-4 border-blue-600">
                  <div className="flex justify-between items-start mb-4">
                    <h2 className="text-xl font-bold text-gray-800">Consultation</h2>
                    <button onClick={() => setSelectedPatient(null)} className="text-gray-400 hover:text-gray-600">✕</button>
                  </div>
                  <div className="mb-6 p-3 bg-blue-50 rounded-lg text-sm text-blue-800">
                    <strong>Patient:</strong> {selectedPatient.name} ({selectedPatient.age})<br/>
                    <strong>Symptoms:</strong> {selectedPatient.symptoms}
                  </div>

                  <div className="space-y-4">
                    <div>
                      <label htmlFor="prescription" className="block text-xs font-bold text-gray-500 uppercase mb-1">Prescription (Supervised)</label>
                      <textarea id="prescription" className="w-full p-2 border rounded text-sm h-20" placeholder="Enter medication and dosage..."></textarea>
                    </div>
                    <div>
                      <label htmlFor="labs" className="block text-xs font-bold text-gray-500 uppercase mb-1">Lab Requests</label>
                      <input id="labs" type="text" className="w-full p-2 border rounded text-sm" placeholder="E.g. Blood Count, Malaria Test"/>
                    </div>
                    <button className="w-full bg-blue-600 text-white font-bold py-2 rounded hover:bg-blue-700 transition-colors">
                      Send to Supervisor
                    </button>
                  </div>
                </div>

                <div className="bg-yellow-50 p-4 rounded-xl border border-yellow-100 text-xs text-yellow-800">
                  <strong>Note:</strong> All actions must be reviewed and approved by a senior medical doctor before being dispatched to the patient.
                </div>
              </div>
            ) : (
              <div className="lg:col-span-1 hidden lg:flex flex-col items-center justify-center p-12 border-2 border-dashed border-gray-200 rounded-xl bg-white text-gray-400">
                <div className="text-4xl mb-2">📋</div>
                <p className="text-center font-medium">Select a patient to begin consultation</p>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}
