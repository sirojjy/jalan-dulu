// components/Sidebar.js
import Link from 'next/link';

const SidebarDashboard = () => {
    return (
        <div className="w-64 h-screen text-white bg-gray-800">
          <div className="p-4">
            <h1 className="text-lg font-bold">Dashboard</h1>
          </div>
          <nav className="mt-5">
            <ul>
              <li className="px-4 py-2 hover:bg-gray-700">
                <Link href="/" legacyBehavior>
                  <a className="block">Home</a>
                </Link>
              </li>
              <li className="px-4 py-2 hover:bg-gray-700">
                <Link href="/about" legacyBehavior>
                  <a className="block">About</a>
                </Link>
              </li>
              <li className="px-4 py-2 hover:bg-gray-700">
                <Link href="/services" legacyBehavior>
                  <a className="block">Services</a>
                </Link>
              </li>
              <li className="px-4 py-2 hover:bg-gray-700">
                <Link href="/contact" legacyBehavior>
                  <a className="block">Contact</a>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      );
};

export default SidebarDashboard;
