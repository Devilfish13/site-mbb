import Image from 'next/image';
import Link from 'next/link';
import { MOTTO, TITLE } from '../const';

const Header = () => {
  return (
    <>
      <header className="flex justify-evenly bg-neutral-900 py-8 text-neutral-100">
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
      <nav className="bg-yellow-400 py-2 text-neutral-900">
        <div className="it container mx-auto flex justify-center space-x-4">
          <Link href="/" className="font-bold hover:text-red-500">
            Despre guildă
          </Link>
          <Link href="/roster" className="font-bold hover:text-red-500">
            Echipă
          </Link>
          <Link href="/calendar" className="font-bold hover:text-red-500">
            Calendar
          </Link>
          <Link href="/gallery" className="font-bold hover:text-red-500">
            Galerie
          </Link>
          <Link href="/recruitment" className="font-bold hover:text-red-500">
            Recrutări
          </Link>
        </div>
      </nav>
    </>
  );
};

export default Header;
