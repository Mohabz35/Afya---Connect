'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function DoctorsPage() {
  const [activeTab, setActiveTab] = useState('supervision');

  const pendingClaims = [
    { id: 'CLM-001', patient: 'Jane Mwangi', amount: 'KES 2,400', type: 'NHIF Outpatient', status: 'Pending Review' },
    { id: 'CLM-002', patient: 'Samuel Otieno', amount: 'KES 1,200', type: 'SHA Self-Pay', status: 'Awaiting Doc' },
    { id: 'CLM-003', patient: 'Lucy Njeri', amount: 'KES 5,600', type: 'NHIF Surgical', status: 'Pending Review' },
  ];

  const internTasks = [
    { intern: 'Dr. Sarah Kamau', task: 'Review Prescription for John Doe', time: '10m ago' },
    { intern: 'Dr. Amina Abdi', task: 'Approve Lab Request for Mary Wanjiku', time: '25m ago' },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <main className="flex-1 p-6 md:p-12">
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-3xl font-bold text-blue-900">Doctor Portal</h1>
            <div className="flex bg-white rounded-lg p-1 shadow-sm border">
              <button
                onClick={() => setActiveTab('supervision')}
                className={`px-4 py-2 text-sm font-medium rounded-md transition-colors ${activeTab === 'supervision' ? 'bg-blue-600 text-white' : 'text-gray-600 hover:bg-gray-100'}`}
              >
                Intern Supervision
              </button>
              <button
                onClick={() => setActiveTab('claims')}
                className={`px-4 py-2 text-sm font-medium rounded-md transition-colors ${activeTab === 'claims' ? 'bg-blue-600 text-white' : 'text-gray-600 hover:bg-gray-100'}`}
              >
                SHA/NHIF Claims
              </button>
            </div>
          </div>

          {activeTab === 'supervision' ? (
            <div className="grid lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2 space-y-6">
                <div className="bg-white p-6 rounded-xl shadow-md">
                  <h2 className="text-xl font-bold text-gray-800 mb-6 flex items-center">
                    <span className="mr-2">👨‍🏫</span> Intern Tasks Requiring Approval
                  </h2>
                  <div className="space-y-4">
                    {internTasks.map((task, idx) => (
                      <div key={idx} className="flex items-center justify-between p-4 border rounded-xl hover:border-blue-200 transition-colors">
                        <div className="flex items-center space-x-4">
                          <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold">
                            {task.intern.split(' ')[1][0]}
                          </div>
                          <div>
                            <div className="font-semibold text-gray-900">{task.intern}</div>
                            <div className="text-sm text-gray-500">{task.task}</div>
                          </div>
                        </div>
                        <div className="flex items-center space-x-3">
                          <span className="text-xs text-gray-400">{task.time}</span>
                          <button className="bg-blue-600 text-white px-3 py-1 rounded text-sm font-bold hover:bg-blue-700">Review</button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-md">
                  <h2 className="text-xl font-bold text-gray-800 mb-4">Teaching Hospital Analytics</h2>
                  <div className="h-64 bg-blue-50 rounded-lg flex items-center justify-center text-blue-400 font-medium border-2 border-dashed border-blue-100">
                    [ Chart: Intern Performance & Supervision Ratios ]
                  </div>
                </div>
              </div>

              <div className="lg:col-span-1 space-y-6">
                <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-green-500">
                  <h3 className="font-bold text-gray-800 mb-2">Weekly Impact</h3>
                  <div className="text-3xl font-bold text-green-600 mb-1">142</div>
                  <div className="text-xs text-gray-500 uppercase tracking-wider">Patients Assisted by Interns</div>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-blue-500">
                  <h3 className="font-bold text-gray-800 mb-2">Mentorship Hours</h3>
                  <div className="text-3xl font-bold text-blue-600 mb-1">12.5</div>
                  <div className="text-xs text-gray-500 uppercase tracking-wider">Logged This Week</div>
                </div>
              </div>
            </div>
          ) : (
            <div className="bg-white rounded-xl shadow-md overflow-hidden">
              <div className="px-6 py-4 border-b border-gray-100 bg-white">
                <h2 className="text-xl font-bold text-gray-800">SHA/NHIF Claims Management</h2>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-left">
                  <thead className="bg-gray-50 text-gray-500 text-sm uppercase font-semibold">
                    <tr>
                      <th className="px-6 py-4">Claim ID</th>
                      <th className="px-6 py-4">Patient</th>
                      <th className="px-6 py-4">Type</th>
                      <th className="px-6 py-4">Amount</th>
                      <th className="px-6 py-4">Status</th>
                      <th className="px-6 py-4">Action</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    {pendingClaims.map((claim) => (
                      <tr key={claim.id} className="hover:bg-gray-50 transition-colors">
                        <td className="px-6 py-4 font-mono text-sm">{claim.id}</td>
                        <td className="px-6 py-4 font-medium text-gray-900">{claim.patient}</td>
                        <td className="px-6 py-4 text-gray-600">{claim.type}</td>
                        <td className="px-6 py-4 font-bold text-gray-900">{claim.amount}</td>
                        <td className="px-6 py-4">
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
                            {claim.status}
                          </span>
                        </td>
                        <td className="px-6 py-4">
                          <button className="text-blue-600 font-bold hover:text-blue-800 text-sm">Approve</button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
