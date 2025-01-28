import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import React from "react"; // Import React
import "../globals.css";

interface LayoutProps {
  children: React.ReactNode; // Define children prop type
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <html lang="en">
      <body className="bg-neutral-900 text-gray-900">
        {/* Flex container */}
        <div className="flex flex-col h-screen w-screen">
          <Header />
          {/* Main content area */}
          <main className="text-neutral-100 h-screen flex max-w-350 m-auto py-8 px-4 justify-center ">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
};

export default Layout;
