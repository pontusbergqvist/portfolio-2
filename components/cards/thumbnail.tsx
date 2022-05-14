import { motion } from 'framer-motion';

const variants = {
	hover: {
		scale: 1.1,
		transition: {
			duration: .4			
	 	}
	}
}

interface Props {
	src: string;
	alt: string;
}

const Thumbnail = ({ src, alt }: Props) => {
	return (
		<div className="overflow-hidden max-w-[290px] h-[150px] rounded">
			<motion.img 
				variants={variants} 
				className="w-full h-full object-cover" 
				src={src} alt={alt} />
		</div>
	)
}

export default Thumbnail;
