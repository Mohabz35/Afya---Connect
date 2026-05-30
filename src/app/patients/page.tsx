import Link from 'next/link';

export default function PatientsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="px-4 lg:px-6 h-14 flex items-center border-b">
        <Link className="flex items-center justify-center" href="/">
          <span className="font-bold text-2xl text-blue-600">Afya Connect</span>
        </Link>
      </header>
      <main className="flex-1 p-6 md:p-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold text-blue-900 mb-6">Patient Portal</h1>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="p-6 border rounded-xl shadow-sm bg-white">
              <h2 className="text-xl font-semibold mb-2">Check Symptoms</h2>
              <p className="text-gray-600 mb-4">Describe how you're feeling and get initial guidance.</p>
              <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">Start Assessment</button>
            </div>
            <div className="p-6 border rounded-xl shadow-sm bg-white">
              <h2 className="text-xl font-semibold mb-2">Connect with an Intern</h2>
              <p className="text-gray-600 mb-4">Speak with a qualified medical intern supervised by doctors.</p>
              <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">Find Intern</button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
