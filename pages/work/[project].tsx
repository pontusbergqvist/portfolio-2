import Breadcrumbs from '../../components/shared/breadcrumbs';
import Heading from '../../components/shared/heading';
import Tags from '../../components/shared/tags';
import data from '../../data/data.json';

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
		<article className='my-28'>
			<img src={data.url} alt="" className='w-full h-[350px] object-cover rounded' />
			<Breadcrumbs current={data.name} />
			<br />
			<Heading>{data.name}</Heading>
			<Tags tags={data.tags} />
			<p className='my-6'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
		</article>
	)
}

export default Project;
