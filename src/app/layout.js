// app/layout.js

import { GeistSans } from 'geist/font/sans';
import './globals.css';

import { SearchProvider } from '@/context/SearchContext';

import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';

export const metadata = {
  title: 'Leave Management Dashboard',
  description: 'Employee leave management system',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={GeistSans.className}>
      <body suppressHydrationWarning className="bg-gray-50">
        <SearchProvider>
          <div className="flex h-screen overflow-hidden">
            <Sidebar />
            <div className="flex-1 flex flex-col overflow-hidden lg:ml-64 pb-16 lg:pb-0">
              <Navbar />
              <main className="flex-1 overflow-y-auto p-4 lg:p-6 bg-gray-50 mt-16">
                {children}
              </main>
            </div>
          </div>
        </SearchProvider>
      </body>
    </html>
  );
}