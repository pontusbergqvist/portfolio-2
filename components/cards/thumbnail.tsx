import Image from 'next/image';
import { motion } from 'framer-motion';

const variants = {
  hover: {
    scale: 1.2,
    transition: {
      duration: 0.4,
    },
  },
};

interface Props {
  src: string;
  alt: string;
}

const Thumbnail = ({ src, alt }: Props) => {
  return (
    <div className="overflow-hidden max-w-[290px] h-[150px] rounded mx-auto shadow-md relative">
      <motion.div variants={variants} className="relative h-full w-full">
        <Image src={`https:${src}`} alt={alt} layout="fill" objectFit="cover" />
      </motion.div>
    </div>
  );
};

export default Thumbnail;
