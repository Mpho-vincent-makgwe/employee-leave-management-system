import { GeistSans } from 'geist/font/sans';
import './globals.css';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';

export const metadata = {
  title: 'Leave Management Dashboard',
  description: 'Employee leave management system',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={GeistSans.className}>
      <body className="bg-gray-50">
        <div className="flex h-screen overflow-hidden">
          <Sidebar />
          <div className="flex-1 flex flex-col overflow-hidden ml-64"> {/* Added ml-64 to account for sidebar */}
            <Navbar />
            <main className="flex-1 overflow-y-auto p-6 bg-gray-50 mt-16"> {/* Added mt-16 to account for navbar */}
              {children}
            </main>
          </div>
        </div>
      </body>
    </html>
  );
}