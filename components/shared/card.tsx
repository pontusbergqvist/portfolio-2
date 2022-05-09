import Link from 'next/link';
import { motion } from 'framer-motion';

interface Props {
	data: {
		url: string,
		date: string,
		name: string,
		description: string,
		id: number
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



const Card = ({ data, home, work, blog }: Props) => {
	const { url, date, name, description, id } = data;
	return (
		<Link href={`/${ work ? "work" : blog && "blog" }/${id}`} passHref scroll={false}>
			<motion.article whileHover="hover" className="hover:cursor-pointer h-full w-full overflow-hidden">
				<div className="overflow-hidden h-[150px] max-w-[270px] blog:max-w-full rounded mx-auto">
					<motion.img variants={variants} className="align-middle h-full w-full object-cover mb-2" src={url} alt={name} />
				</div>
				<div className="max-w-[290px] blog:max-w-full mx-auto my-2">
					{ !work && <p className='text-sm my-1'>{date}</p> }
					<h3 className='text-h3'>{home ? "Bloggpost: Titel" : name}</h3>
					<p className='my-1 text-sm'>{description}</p>
				</div>
			</motion.article>
		</Link>
	)
}

export default Card;
