import React from "react"; // Import React
import Navbar from "../components/Navbar";
import './globals.css'

interface LayoutProps {
  children: React.ReactNode; // Define children prop type
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (

    <html lang="en">
    <body className="bg-gray-100 text-gray-900">
      {/* Flex container */}
      <div className="flex h-screen">
        {/* Sidebar */}
        <Navbar />
        
        {/* Main content area */}
        <main className="pt-16 px-4">{children}</main>
      </div>
    </body>
  </html>
   
  );
};

export default Layout;