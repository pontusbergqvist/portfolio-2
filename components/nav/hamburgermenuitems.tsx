import Link from 'next/link';
import { useRouter } from 'next/router';
import { useTheme } from 'next-themes';
import { BsFillSunFill, BsFillMoonFill } from 'react-icons/bs';
import { motion } from 'framer-motion';

const container = {
  init: {
    transition: { delayChildren: 0, staggerChildren: 0.1 },
  },
  enter: {
    transition: { staggerChildren: 0.1 },
  },
};

const item = {
  init: {
    opacity: 0,
    x: -50,
  },
  enter: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.1 },
  },
};

const HamburgerMenuItems = () => {
  const { theme, setTheme } = useTheme();
  const router = useRouter();

  return (
    <motion.ul
      variants={container}
      initial="init"
      animate="enter"
      className="fixed z-10 right-0 top-[80px] flex flex-col text-right pt-3 px-5"
    >
      <motion.li
        variants={item}
        className={`${router.pathname === '/' ? 'text-accent' : ''} py-3`}
      >
        <Link href="/">
          <a className="py-3">home</a>
        </Link>
      </motion.li>
      <motion.li
        variants={item}
        className={`${router.pathname === '/work' ? 'text-accent' : ''} py-3`}
      >
        <Link href="/work">
          <a className="py-3">work</a>
        </Link>
      </motion.li>
      <motion.li
        variants={item}
        className={`${router.pathname === '/blog' ? 'text-accent' : ''} py-3`}
      >
        <Link href="/blog">
          <a className="py-3">blog</a>
        </Link>
      </motion.li>
      <motion.li
        variants={item}
        onClick={() =>
          theme === 'dark' ? setTheme('light') : setTheme('dark')
        }
        className="ml-1 text-yellow-400 my-3 bg-item-dark p-2 rounded-full text-h3 cursor-pointer"
      >
        {theme === 'light' ? <BsFillSunFill /> : <BsFillMoonFill />}
      </motion.li>
    </motion.ul>
  );
};

export default HamburgerMenuItems;
