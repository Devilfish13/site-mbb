import React from "react"; // Import React
import '../globals.css'
import Sidebar from "@/components/Sidebar";

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
        <Sidebar />
        
        {/* Main content area */}
        <main className="flex-1 overflow-y-auto bg-natural-300 p-6 lg:ml-64">{children}</main>
      </div>
    </body>
  </html>
   
  );
};

export default Layout;