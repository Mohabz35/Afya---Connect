'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function PatientsPage() {
  const [showForm, setShowForm] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    location: '',
    symptoms: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1 p-6 md:p-12 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          {!showForm && !submitted && (
            <>
              <h1 className="text-3xl font-bold text-blue-900 mb-6">Patient Portal</h1>
              <div className="grid gap-6 md:grid-cols-2">
                <div className="p-6 border rounded-xl shadow-sm bg-white">
                  <h2 className="text-xl font-semibold mb-2">Check Symptoms</h2>
                  <p className="text-gray-600 mb-4">Describe how you're feeling and get initial guidance.</p>
                  <button
                    onClick={() => setShowForm(true)}
                    className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors"
                  >
                    Start Assessment
                  </button>
                </div>
                <div className="p-6 border rounded-xl shadow-sm bg-white">
                  <h2 className="text-xl font-semibold mb-2">Connect with an Intern</h2>
                  <p className="text-gray-600 mb-4">Speak with a qualified medical intern supervised by doctors.</p>
                  <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors">
                    Find Intern
                  </button>
                </div>
                <div className="p-6 border rounded-xl shadow-sm bg-white border-dashed border-gray-300">
                  <h2 className="text-xl font-semibold mb-2">No Internet?</h2>
                  <p className="text-gray-600 mb-4">Use our USSD service to access healthcare on any mobile phone.</p>
                  <Link href="/patients/ussd" className="text-blue-600 font-bold hover:underline">
                    Try USSD Simulator →
                  </Link>
                </div>
              </div>
            </>
          )}

          {showForm && !submitted && (
            <div className="bg-white p-8 rounded-xl shadow-md max-w-2xl mx-auto">
              <button
                onClick={() => setShowForm(false)}
                className="text-sm text-gray-500 hover:text-blue-600 mb-6 flex items-center"
              >
                ← Back to Portal
              </button>
              <h2 className="text-2xl font-bold text-blue-900 mb-6">Symptom Assessment</h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                  <input
                    id="name"
                    type="text"
                    required
                    className="w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-500 outline-none"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="age" className="block text-sm font-medium text-gray-700 mb-1">Age</label>
                    <input
                      id="age"
                      type="number"
                      required
                      className="w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-500 outline-none"
                      value={formData.age}
                      onChange={(e) => setFormData({ ...formData, age: e.target.value })}
                    />
                  </div>
                  <div>
                    <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-1">County/Location</label>
                    <input
                      id="location"
                      type="text"
                      required
                      className="w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-500 outline-none"
                      value={formData.location}
                      onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="symptoms" className="block text-sm font-medium text-gray-700 mb-1">Describe your symptoms</label>
                  <textarea
                    id="symptoms"
                    required
                    rows={4}
                    className="w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-500 outline-none"
                    placeholder="E.g., fever, persistent cough, headache for 3 days..."
                    value={formData.symptoms}
                    onChange={(e) => setFormData({ ...formData, symptoms: e.target.value })}
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white font-bold py-3 rounded-md hover:bg-blue-700 transition-colors shadow-lg"
                >
                  Submit for Intern Review
                </button>
              </form>
            </div>
          )}

          {submitted && (
            <div className="bg-white p-12 rounded-xl shadow-md text-center max-w-2xl mx-auto border-t-4 border-green-500">
              <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg
                  className="w-8 h-8"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Request Received!</h2>
              <p className="text-gray-600 mb-8">
                Thank you, {formData.name}. Your details have been shared with our available medical interns.
                A supervisor-backed intern will reach out to you shortly.
              </p>
              <button
                onClick={() => {
                  setSubmitted(false);
                  setShowForm(false);
                  setFormData({ name: '', age: '', location: '', symptoms: '' });
                }}
                className="text-blue-600 font-semibold hover:underline"
              >
                Back to Patient Portal
              </button>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
