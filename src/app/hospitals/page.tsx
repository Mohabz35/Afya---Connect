import Link from 'next/link';

export default function HospitalsPage() {
  const facilityStats = [
    { label: 'Active Interns', value: '8', icon: '👨‍⚕️' },
    { label: 'Pending Placements', value: '2', icon: '📝' },
    { label: 'Patient Inflow', value: '+15%', icon: '📈' },
    { label: 'Resource Efficiency', value: '92%', icon: '⚡' },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <main className="flex-1 p-6 md:p-12">
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-3xl font-bold text-blue-900">Hospital Management Dashboard</h1>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-md font-medium hover:bg-blue-700">
              Request New Interns
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {facilityStats.map((stat) => (
              <div key={stat.label} className="p-6 bg-white rounded-xl shadow-sm border border-gray-100 flex items-center space-x-4">
                <div className="text-3xl">{stat.icon}</div>
                <div>
                  <div className="text-sm font-medium text-gray-500">{stat.label}</div>
                  <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h2 className="text-xl font-bold text-gray-800 mb-4">Intern Rotations</h2>
              <div className="space-y-4">
                {[
                  { name: 'Dr. Sarah Kamau', department: 'Pediatrics', shift: 'Morning' },
                  { name: 'Dr. Kevin Kipchumba', department: 'ER', shift: 'Night' },
                  { name: 'Dr. Amina Abdi', department: 'General Medicine', shift: 'Morning' },
                ].map((intern) => (
                  <div key={intern.name} className="flex justify-between items-center p-3 hover:bg-gray-50 rounded-lg border border-transparent hover:border-gray-100">
                    <div>
                      <div className="font-semibold text-gray-900">{intern.name}</div>
                      <div className="text-xs text-gray-500">{intern.department}</div>
                    </div>
                    <span className="text-sm text-blue-600 font-medium">{intern.shift} Shift</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md">
              <h2 className="text-xl font-bold text-gray-800 mb-4">Operational Analytics</h2>
              <div className="h-48 bg-gray-50 rounded-lg border-2 border-dashed border-gray-200 flex items-center justify-center text-gray-400">
                [ Chart: Patient Load vs Intern Availability ]
              </div>
              <p className="mt-4 text-sm text-gray-500">
                Interns have reduced patient wait times by an average of 22 minutes this week.
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
