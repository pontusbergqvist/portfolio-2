import Link from 'next/link';
import { motion } from 'framer-motion';

interface Props {
	data: {
		url: string,
		date: string,
		name: string,
		description: string
	},
	home?: boolean,
	work?: boolean,
	blog?: boolean
}

const variants = {
	hover: {
		scale: 1.1
	}
}



const Card = ({ data, home, work }: Props) => {
	const { url, date, name, description } = data;
	return (
		<Link href={"/blog"} passHref>
			<motion.article whileHover="hover" className="hover:cursor-pointer h-full w-full overflow-hidden">
				<div className="overflow-hidden h-[200px] blog:h-[150px] rounded">
					<motion.img variants={variants} className="align-middle h-full w-full object-cover mb-2" src={url} alt={name} />
				</div>
				{ !work && <p className='text-sm my-1'>{date}</p> }
				<h3 className='text-h3'>{home ? "Bloggpost: Titel" : name}</h3>
				<p className='my-1 text-sm'>{description}</p>
			</motion.article>
		</Link>
	)
}

export default Card;
