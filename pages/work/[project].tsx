import Link from '../../components/shared/link';
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
		url: string	
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
	return <div><p>{data.name} {data.id + 1}</p><Link to='/work'>back</Link></div>	
}

export default Project;
