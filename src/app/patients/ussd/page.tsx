'use client';

import { useState } from 'react';

export default function USSDSimulator() {
  const [screen, setScreen] = useState('welcome');
  const [inputValue, setInputValue] = useState('');

  const screens: Record<string, { text: string; options: Record<string, string> }> = {
    welcome: {
      text: 'Welcome to Afya Connect\n1. Check Symptoms\n2. View My Consultations\n3. Emergency Services',
      options: { '1': 'symptoms', '2': 'consultations', '3': 'emergency' }
    },
    symptoms: {
      text: 'Select your main symptom:\n1. Fever\n2. Cough\n3. Stomach Pain\n4. Other',
      options: { '1': 'connect', '2': 'connect', '3': 'connect', '4': 'connect' }
    },
    connect: {
      text: 'We are connecting you to an available Intern. You will receive an SMS shortly.\n0. Back to Home',
      options: { '0': 'welcome' }
    },
    consultations: {
      text: 'You have no active consultations.\n0. Back to Home',
      options: { '0': 'welcome' }
    },
    emergency: {
      text: 'Please call 999 or visit the nearest facility immediately!\n0. Back to Home',
      options: { '0': 'welcome' }
    }
  };

  const handleSend = () => {
    const currentScreen = screens[screen];
    if (currentScreen.options[inputValue]) {
      setScreen(currentScreen.options[inputValue]);
    }
    setInputValue('');
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] p-6 bg-gray-50">
      <div className="w-full max-w-sm">
        <h1 className="text-2xl font-bold text-blue-900 mb-8 text-center">USSD Simulator (*384#)</h1>

        <div className="bg-black text-white p-6 rounded-[2rem] shadow-2xl border-4 border-gray-800 aspect-[9/16] flex flex-col">
          <div className="flex-1 font-mono text-sm whitespace-pre-line pt-8">
            {screens[screen].text}
          </div>

          <div className="mb-4">
            <input
              type="text"
              className="w-full bg-gray-800 border-none text-white p-2 rounded outline-none text-center"
              placeholder="Enter choice"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
            />
          </div>

          <div className="flex gap-2 pb-8">
            <button
              onClick={() => {setScreen('welcome'); setInputValue('');}}
              className="flex-1 bg-gray-700 p-2 rounded font-bold hover:bg-gray-600 active:scale-95"
            >
              Cancel
            </button>
            <button
              onClick={handleSend}
              className="flex-1 bg-blue-600 p-2 rounded font-bold hover:bg-blue-500 active:scale-95"
            >
              Send
            </button>
          </div>
        </div>

        <p className="mt-8 text-center text-gray-500 text-sm">
          Simulating how rural patients without internet access interact with Afya Connect via feature phones.
        </p>
      </div>
    </div>
  );
}
