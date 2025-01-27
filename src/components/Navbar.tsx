import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="bg-gray-800 text-white fixed top-0 left-0 w-full p-4 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link href="/" className="text-xl font-semibold">My App</Link>
        <ul className="flex space-x-8">
          <li>
            <Link href="/home" className="hover:text-gray-300">Home</Link>
          </li>
          <li>
            <Link href="/contact" className="hover:text-gray-300">Contact</Link>
          </li>
          <li>
            <Link href="/gallery" className="hover:text-gray-300">Gallery</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;