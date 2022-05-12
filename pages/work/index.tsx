import Layout from '../../components/layout';
import type { NextPage } from 'next';
import Heading from '../../components/shared/heading';
import Card from '../../components/shared/card';
import { Project } from '../../models/work';
import Contentful from '../../api/contentful';

export const getStaticProps = async () => {
	const contentful = new Contentful();
	const projects = await contentful.getAllProjects();

	return {
		props: {
			projects
		}
	}
}

interface Projects {
	projects: Project[]
}

const Work: NextPage<Projects> = ({ projects }) => {
	return (
		<Layout>
			<div className='my-8 md:my-28 max-w-[290px] blog:max-w-full mx-auto'>
				<Heading>Work</Heading>
				<p className='text-sm mt-2 mb-5'>Featured projects</p>
				<div className='grid grid-cols-1 blog:grid-cols-2 gap-8'>
					{projects.map(project => <Card work key={project.id} data={project} />)}
				</div>
			</div>
		</Layout>
	)
}
export default Work;


