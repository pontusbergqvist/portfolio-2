import { BsFillSunFill, BsFillMoonFill } from 'react-icons/bs';
import { useTheme } from 'next-themes';
import useSsr from '../../hooks/useSsr';

const ThemeButton = () => {
	const { theme, setTheme } = useTheme();
	const ssr = useSsr();

	return !ssr ? (
				<div
          aria-hidden
          className="z-10 relative hidden md:flex items-center w-[60px] h-[28px] bg-dark border-2 border-dark rounded-full cursor-pointer dark:border-light light:bg-dark"
          onClick={() => theme === 'dark' ? setTheme('light') : setTheme('dark')}>
          <div className='absolute top-1/2 translate-y-[-50%] left-[31px] text-yellow-400 dark:translate-x-[-22px]'>
            {theme === 'dark' ? <BsFillSunFill /> : <BsFillMoonFill />}
          </div>
          <div
            className='absolute h-[28px] w-[28px] border-2 left-[-2px] bg-light border-dark rounded-full top-1/2 translate-y-[-50%] transition-transform duration-300 ease-out dark:translate-x-[32px] dark:bg-dark dark:border-light'
          ></div>
        </div>
	)  : <div></div>;	
}

export default ThemeButton;
