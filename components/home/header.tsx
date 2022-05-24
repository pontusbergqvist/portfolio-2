import { GoLocation } from 'react-icons/go';
import Image from 'next/image';

const Header = () => {
  return (
    <header className="my-28">
      <div className="flex flex-col items-center sm:items-start sm:flex-row">
        <div className="h-[100px] w-[100px] border-2 border-accent rounded-full relative overflow-hidden">
          <Image
            src="/myself.jpg"
            alt="Picture of me"
            layout="fill"
            objectFit="cover"
            quality={100}
          />
        </div>
        <div className="mx-5">
          <h1 className="text-h1 font-mono">Pontus Bergqvist</h1>
          <p className="text-white text-h3 py-1 px-2 [text-shadow:0_2px_3px_rgba(30,39,59,0.7)] bg-accent inline">
            Full-stack web developer
          </p>
          <p className="flex items-center font-mono my-1">
            <GoLocation /> <span className="ml-2">Gothenburg, Sweden</span>
          </p>
        </div>
      </div>
    </header>
  );
};

export default Header;
