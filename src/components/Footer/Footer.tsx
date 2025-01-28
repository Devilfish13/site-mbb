import { MOTTO } from "../const";

const Footer = () => {
  return (
    <footer className="bg-yellow-400 text-neutral-900 py-2 fixed bottom-0 w-full h-8">
      <div className="container mx-auto text-center">
        <p>© 2025 MB&M - {MOTTO}</p>
      </div>
    </footer>
  );
};

export default Footer;
