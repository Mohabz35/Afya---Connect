import Link from 'next/link';

export default function DoctorsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="px-4 lg:px-6 h-14 flex items-center border-b">
        <Link className="flex items-center justify-center" href="/">
          <span className="font-bold text-2xl text-blue-600">Afya Connect</span>
        </Link>
      </header>
      <main className="flex-1 p-6 md:p-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold text-blue-900 mb-6">Doctor Portal</h1>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="p-6 border rounded-xl shadow-sm bg-white">
              <h2 className="text-xl font-semibold mb-2">Supervise Interns</h2>
              <p className="text-gray-600 mb-4">Review consultation notes and provide guidance to interns.</p>
              <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">Review Now</button>
            </div>
            <div className="p-6 border rounded-xl shadow-sm bg-white">
              <h2 className="text-xl font-semibold mb-2">Hospital Insights</h2>
              <p className="text-gray-600 mb-4">Monitor patient flow and operational analytics.</p>
              <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">View Analytics</button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
