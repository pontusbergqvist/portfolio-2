import Breadcrumbs from '../../components/shared/breadcrumbs';
import Heading from '../../components/shared/heading';
import Layout from '../../components/layout/layout';
import Tags from '../../components/shared/tags';
import data from '../../data/data.json';
import { AiFillGithub } from 'react-icons/ai'
import { BiLinkExternal } from 'react-icons/bi'


interface params {
	params: {
		project: number
	}
} 

interface props {
	data: {
		id: number,
		name: string,
		description: string,
		url: string,
		tags: string[],
	}
}


export const getStaticPaths = () => {
	const paths = data.map(item => ({
		params: {
			project: item.id.toString(),
		}
	})) 

  return {
		paths,
		fallback: false
	}
}

export const getStaticProps = ({ params }: params) => {
	const obj = data.find(item => item.id == params.project)
	return {
		props: {
			data: obj
	  }
	}
}

const Project = ({ data }: props) => {
	return (
		<Layout>
			<article className='my-28'>
				<Heading>{data.name}</Heading>
				<img src={data.url} alt="" className='w-full h-[250px] object-cover rounded' />
				<Breadcrumbs current={data.name} />
				<br />
				<Tags tags={data.tags} />
				<p className='my-3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
				<div className='flex text-h2 -ml-1'>
					<AiFillGithub className='mx-1 cursor-pointer hover:text-accent'/> 
					<BiLinkExternal className='mx-1 cursor-pointer hover:text-accent'/>
				</div>
			</article>
		</Layout>
	)
}

export default Project;
