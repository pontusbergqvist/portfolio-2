import MenuOverlay from './menuoverlay';
import HamburgerMenuItems from './hamburgermenuitems';
import useWindowWidth from '../../hooks/useWindowWidth';
import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

const variants = {
  init: {
    x: -50,
  },
  enter: {
    x: 0,
    transition: { duration: 0.3, type: 'spring' },
  },
  exit: {
    x: 50,
    transition: { duration: 0.2 },
  },
};

const HamburgerMenu = () => {
  const [open, setOpen] = useState(false);
  const router = useRouter();
  const breakpoint = useWindowWidth();

  useEffect(() => setOpen(false), [breakpoint, router.route]);

  return (
    <>
      <div
        className="cursor-pointer overflow-hidden z-20 fixed md:hidden right-0 mr-3 bg-accent p-2 w-[50px] h-[40px] rounded overflow-x-hidden"
        onClick={() => setOpen(!open)}
      >
        <AnimatePresence initial={false} exitBeforeEnter>
          <motion.div
            key={open ? 'open' : 'closed'}
            variants={variants}
            initial="init"
            animate="enter"
            exit="exit"
            className="h-full"
          >
            {!open ? (
              <>
                <div className="flex flex-col justify-between h-full">
                  <div className="h-[3px] w-full bg-light rounded"></div>
                  <div className="h-[3px] w-full bg-light rounded"></div>
                  <div className="h-[3px] w-full bg-light rounded"></div>
                </div>
              </>
            ) : (
              <div className="flex flex-col relative h-full">
                <div className="absolute top-1/2 translate-y-[-50%] left-0 h-[3px] w-full bg-light rounded rotate-[45deg]"></div>
                <div className="absolute top-1/2 translate-y-[-50%] left-0 h-[3px] w-full bg-light rounded rotate-[-45deg]"></div>
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
      {open && <MenuOverlay onClick={setOpen} />}
      {open && <HamburgerMenuItems />}
    </>
  );
};

export default HamburgerMenu;
