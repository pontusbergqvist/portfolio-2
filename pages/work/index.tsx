import Layout from '../../components/layout';
import type { GetStaticProps, NextPage } from 'next';
import Heading from '../../components/shared/heading';
import WorkCard from '../../components/shared/workcard';
import Contentful from '../../api/contentful';
import { Project } from '../../models/work';

export const getStaticProps: GetStaticProps = async () => {
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
					{projects.map(project => <WorkCard key={project.id} project={project} />)}
				</div>
			</div>
		</Layout>
	)
}
export default Work;


