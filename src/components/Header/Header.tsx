import Image from "next/image";
import Link from "next/link";
import { MOTTO, TITLE } from "../const";

const Header = () => {
  return (
    <>
      <header className="bg-neutral-900 text-neutral-100 py-8 flex justify-evenly">
        <Image src="/assets/alliance.svg" width="200" height="200" alt="logo" />
        <div className="flex flex-col items-center justify-center">
          <Image src="/assets/logo.svg" width="200" height="200" alt="logo" />
          <div className="container mx-auto text-center">
            <h1 className="text-4xl font-bold">{TITLE}</h1>
            <p className="text-lg">{MOTTO}</p>
          </div>
        </div>
        <Image src="/assets/horde.svg" width="200" height="200" alt="logo" />
      </header>
      <nav className="bg-yellow-400 text-neutral-900 py-2">
        <div className="container mx-auto flex justify-center space-x-4 it">
          <Link href="/" className="hover:text-red-500 font-bold">
            Despre Guildă
          </Link>
          <Link href="/calendar" className="hover:text-red-500 font-bold">
            Calendar
          </Link>
          <Link href="/gallery" className="hover:text-red-500 font-bold">
            Galerie
          </Link>
          <Link href="/recruitment" className="hover:text-red-500 font-bold">
            Recrutări
          </Link>
        </div>
      </nav>
    </>
  );
};

export default Header;
