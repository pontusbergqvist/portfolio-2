import Kitten from '../kitten';
import Heading from '../shared/heading';
import { FiMail, FiGithub, FiLinkedin } from 'react-icons/fi';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer className="mt-14 pb-14">
      <Heading>Contact</Heading>
      <section className="flex flex-col footer:flex-row justify-between">
        <div>
          <div className="flex my-1">
            <motion.a
              target="_blank"
              transition={{ duration: 0.2 }}
              whileHover={{ scale: 1.2, color: '#FF4A6B' }}
              href="mailto:pontus@bergqvist.io"
              className="pr-3 py-1 text-h2 text-dark dark:text-light"
            >
              <FiMail />
            </motion.a>
            <motion.a
              target="_blank"
              transition={{ duration: 0.2 }}
              whileHover={{ scale: 1.2, color: '#FF4A6B' }}
              href="https://github.com/pontusbergqvist"
              className="px-3 py-1 text-h2 text-dark dark:text-light"
            >
              <FiGithub />
            </motion.a>
            <motion.a
              target="_blank"
              transition={{ duration: 0.2 }}
              whileHover={{ scale: 1.2, color: '#FF4A6B' }}
              href="https://www.linkedin.com/in/pontus-bergqvist-02119a177"
              className="pl-3 py-1 text-dark dark:text-light rounded text-h2"
            >
              <FiLinkedin />
            </motion.a>
          </div>
        </div>
        <Kitten />
      </section>
    </footer>
  );
};

export default Footer;
