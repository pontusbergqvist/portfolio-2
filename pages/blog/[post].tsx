import Heading from '../../components/shared/heading';
import Layout from '../../components/layout/layout';
import Tags from '../../components/shared/tags';
import data from '../../data/data.json';
import { motion } from 'framer-motion';


interface params {
	params: {
		post: number
	}
} 

interface props {
	data: {
		id: number,
		name: string,
		description: string,
		url: string,
		tags: string[],
		date: string
	}
}


export const getStaticPaths = () => {
	const paths = data.map(item => ({
		params: {
			post: item.id.toString(),
		}
	})) 

  return {
		paths,
		fallback: false
	}
}

export const getStaticProps = ({ params }: params) => {
	const obj = data.find(item => item.id == params.post)
	return {
		props: {
			data: obj
	  }
	}
}

const Post = ({ data }: props) => {
	return (
		<Layout>
			<motion.article className='my-28'>
			<p className='text-sm'>{data.date} - 2 min read</p>
			<Heading>{data.name}</Heading>
				<img src={data.url} alt="" className='w-full h-[250px] object-cover rounded mb-3' />
				<Tags tags={data.tags} />
				<p className='my-3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
				<p className='my-3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
				<p className='my-3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
				<div className="flex my-5">
					<div className="h-[75px] w-[75px] border border-accent rounded-full"></div>
					<div className="mx-5 self-center">
						<p className="mt-2">Pontus bergqvist</p>
						<p className="text-sm">{data.date}</p>
					</div>
				</div>
			</motion.article>
		</Layout>
	)
}

export default Post;
