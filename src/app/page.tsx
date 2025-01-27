import React from "react";
import '../globals.css'
import Image from "next/image";

const MyApp: React.FC = () => {
  return (
    <>
      <h1 className="text-4xl">Welcome to My App!</h1>
      <p>This is the homepage of the application.</p>
      <Image
      src="/assets/powermici.png"
      width={500}
      height={500}
      alt="Picture of the author"
      />
    </>
)};

export default MyApp;