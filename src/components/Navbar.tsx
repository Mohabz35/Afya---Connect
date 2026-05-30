'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const pathname = usePathname();

  const links = [
    { name: 'Home', href: '/' },
    { name: 'Patients', href: '/patients' },
    { name: 'Interns', href: '/interns' },
    { name: 'Doctors', href: '/doctors' },
    { name: 'Hospitals', href: '/hospitals' },
  ];

  return (
    <header className="px-4 lg:px-6 h-16 flex items-center border-b bg-white sticky top-0 z-50">
      <Link className="flex items-center justify-center" href="/">
        <span className="font-bold text-2xl text-blue-600">Afya Connect</span>
      </Link>
      <nav className="ml-auto flex gap-4 sm:gap-6">
        {links.map((link) => (
          <Link
            key={link.href}
            className={`text-sm font-medium hover:text-blue-600 transition-colors ${
              pathname === link.href ? 'text-blue-600 underline underline-offset-4' : 'text-gray-600'
            }`}
            href={link.href}
          >
            {link.name}
          </Link>
        ))}
      </nav>
    </header>
  );
}
