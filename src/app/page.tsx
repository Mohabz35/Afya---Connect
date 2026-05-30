import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-blue-50">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-blue-900">
                  Healthcare Brought to Your Hands
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-600 md:text-xl">
                  Afya Connect bridges the gap between patients, medical interns, and doctors in Kenya.
                </p>
              </div>
              <div className="space-x-4">
                <Link
                  className="inline-flex h-10 items-center justify-center rounded-md bg-blue-600 px-8 text-sm font-medium text-white shadow transition-colors hover:bg-blue-700 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-blue-700 disabled:pointer-events-none disabled:opacity-50"
                  href="/patients"
                >
                  For Patients
                </Link>
                <Link
                  className="inline-flex h-10 items-center justify-center rounded-md border border-gray-200 bg-white px-8 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50"
                  href="/interns"
                >
                  For Interns
                </Link>
                <Link
                  className="inline-flex h-10 items-center justify-center rounded-md border border-gray-200 bg-white px-8 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50"
                  href="/doctors"
                >
                  For Doctors
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Problem Section */}
        <section id="problem" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-red-100 px-3 py-1 text-sm text-red-600 font-semibold">
                  The Problem
                </div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Challenges in Kenya's Healthcare</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Severe doctor shortages, limited practical opportunities for interns, and significant barriers to care in rural communities.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12">
              <div className="flex flex-col justify-center space-y-4 p-6 border rounded-xl bg-white shadow-sm">
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">Doctor Shortage</h3>
                  <p className="text-gray-500">Millions left without timely access to care due to severe staff shortages.</p>
                </div>
              </div>
              <div className="flex flex-col justify-center space-y-4 p-6 border rounded-xl bg-white shadow-sm">
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">Internship Gap</h3>
                  <p className="text-gray-500">Medical graduates struggle to find practical placements for supervised practice.</p>
                </div>
              </div>
              <div className="flex flex-col justify-center space-y-4 p-6 border rounded-xl bg-white shadow-sm">
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">Access Barriers</h3>
                  <p className="text-gray-500">Infrastructure, internet, cost, and literacy gaps in rural and low-income areas.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Solution Section */}
        <section id="solution" className="w-full py-12 md:py-24 lg:py-32 bg-blue-50">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-blue-100 px-3 py-1 text-sm text-blue-600 font-semibold">
                  The Solution
                </div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Connecting the Healthcare Ecosystem</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  A comprehensive digital platform (app + USSD + website) that links patients, interns, and doctors.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12">
              <div className="flex flex-col justify-center space-y-4 p-6 bg-white rounded-xl shadow-sm">
                <div className="space-y-2 text-center">
                  <div className="font-bold text-blue-600 text-lg">For Patients</div>
                  <p className="text-gray-500">Describe symptoms, connect with interns, and access affordable healthcare.</p>
                </div>
              </div>
              <div className="flex flex-col justify-center space-y-4 p-6 bg-white rounded-xl shadow-sm">
                <div className="space-y-2 text-center">
                  <div className="font-bold text-blue-600 text-lg">For Interns</div>
                  <p className="text-gray-500">Gain real-world supervised practice and build credentials.</p>
                </div>
              </div>
              <div className="flex flex-col justify-center space-y-4 p-6 bg-white rounded-xl shadow-sm">
                <div className="space-y-2 text-center">
                  <div className="font-bold text-blue-600 text-lg">For Doctors</div>
                  <p className="text-gray-500">Oversee consultations, mentor interns, and strengthen delivery.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Impact Section */}
        <section id="impact" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="space-y-4">
                <div className="inline-block rounded-lg bg-green-100 px-3 py-1 text-sm text-green-600 font-semibold">
                  Our Impact
                </div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Improving Healthcare Outcomes</h2>
                <ul className="grid gap-4 mt-6">
                  <li className="flex items-start gap-3">
                    <div className="mt-1 bg-green-500 rounded-full p-1 text-white">
                      <svg
                        className=" w-3 h-3"
                        fill="none"
                        height="24"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        width="24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-bold">Improved Access</h4>
                      <p className="text-gray-500">Bridging the gap for underserved populations.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-1 bg-green-500 rounded-full p-1 text-white">
                      <svg
                        className=" w-3 h-3"
                        fill="none"
                        height="24"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        width="24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-bold">Job Creation</h4>
                      <p className="text-gray-500">Training and placement for medical interns.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-1 bg-green-500 rounded-full p-1 text-white">
                      <svg
                        className=" w-3 h-3"
                        fill="none"
                        height="24"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        width="24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-bold">Reduced Costs</h4>
                      <p className="text-gray-500">Telemedicine solutions to lower healthcare expenses.</p>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="flex justify-center lg:justify-end">
                 <div className="w-full max-w-[400px] h-[300px] bg-blue-100 rounded-2xl flex items-center justify-center text-blue-400 font-medium border-2 border-dashed border-blue-200">
                    Image: Afya Connect App Interface
                 </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500">© 2024 Afya Connect. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Terms of Service
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Privacy Policy
          </Link>
        </nav>
      </footer>
    </div>
  );
}
