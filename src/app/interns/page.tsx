import Link from 'next/link';

export default function InternsPage() {
  const patientRequests = [
    { id: 1, name: 'John Doe', age: 30, location: 'Nairobi', symptoms: 'Headache and slight fever for 2 days.', status: 'Pending' },
    { id: 2, name: 'Mary Wanjiku', age: 45, location: 'Kiambu', symptoms: 'Persistent cough and chest pain.', status: 'Under Review' },
    { id: 3, name: 'Peter Omolo', age: 12, location: 'Kisumu', symptoms: 'Stomach ache and vomiting since morning.', status: 'Pending' },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1 p-6 md:p-12 bg-gray-50">
        <div className="max-w-5xl mx-auto">
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

          <div className="bg-white rounded-xl shadow-md overflow-hidden">
            <div className="px-6 py-4 border-b border-gray-100 flex justify-between items-center">
              <h2 className="text-xl font-bold text-gray-800">Incoming Patient Requests</h2>
              <span className="bg-blue-100 text-blue-700 text-xs font-bold px-2.5 py-0.5 rounded-full">LIVE</span>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead className="bg-gray-50 text-gray-500 text-sm uppercase font-semibold">
                  <tr>
                    <th className="px-6 py-4">Patient</th>
                    <th className="px-6 py-4">Location</th>
                    <th className="px-6 py-4">Symptoms</th>
                    <th className="px-6 py-4">Status</th>
                    <th className="px-6 py-4">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {patientRequests.map((request) => (
                    <tr key={request.id} className="hover:bg-gray-50 transition-colors">
                      <td className="px-6 py-4">
                        <div className="font-semibold text-gray-900">{request.name}</div>
                        <div className="text-xs text-gray-500">Age: {request.age}</div>
                      </td>
                      <td className="px-6 py-4 text-gray-600">{request.location}</td>
                      <td className="px-6 py-4 text-sm text-gray-600 max-w-xs truncate">{request.symptoms}</td>
                      <td className="px-6 py-4">
                        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                          request.status === 'Pending' ? 'bg-yellow-100 text-yellow-800' : 'bg-blue-100 text-blue-800'
                        }`}>
                          {request.status}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <button className="text-blue-600 font-bold hover:text-blue-800 text-sm">Attend</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
