import Head from 'next/head';
import variants from '../../utils/variants';
import { motion, AnimatePresence } from 'framer-motion';
import useWindowWidth from '../../hooks/useWindowWidth';

interface Props {
  children: any;
  id: string;
  title: string;
  direction: string | undefined;
}

const AnimateQueryPage = ({ children, id, title, direction }: Props) => {
  const width = useWindowWidth();
  const variant = variants(width);

  return (
    <AnimatePresence exitBeforeEnter onExitComplete={() => scrollTo(0, 0)}>
      <motion.article
        key={id}
        variants={variant}
        custom={direction}
        initial="initial"
        animate="enter"
        exit="exit"
        className="my-8 md:my-28"
      >
        <Head>
          <title>{`${title} | Bergqvist.io`}</title>
        </Head>
        {children}
      </motion.article>
    </AnimatePresence>
  );
};

export default AnimateQueryPage;
