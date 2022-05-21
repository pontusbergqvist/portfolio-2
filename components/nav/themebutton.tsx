import useSsr from '../../hooks/useSsr';
import { BsFillSunFill, BsFillMoonFill } from 'react-icons/bs';
import { useTheme } from 'next-themes';

const ThemeButton = () => {
  const { theme, setTheme } = useTheme();
  const ssr = useSsr();

  return !ssr ? (
    <div
      aria-hidden
      className="z-10 relative hidden md:flex items-center w-[50px] h-[24px] bg-dark border-2 border-dark rounded-full cursor-pointer dark:border-light light:bg-dark"
      onClick={() => (theme === 'dark' ? setTheme('light') : setTheme('dark'))}
    >
      <div className="absolute top-1/2 translate-y-[-50%] left-[26px] text-yellow-400 dark:translate-x-[-21px] scale-[0.8]">
        {theme === 'dark' ? <BsFillSunFill /> : <BsFillMoonFill />}
      </div>
      <div className="absolute h-[24px] w-[24px] border-2 left-[-2px] bg-light border-dark rounded-full top-1/2 translate-y-[-50%] transition-transform duration-300 ease-out dark:translate-x-[26px] dark:bg-dark dark:border-light"></div>
    </div>
  ) : (
    <div></div>
  );
};

export default ThemeButton;
