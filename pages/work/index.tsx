import Layout from '../../components/layout';
import type { GetStaticProps, NextPage } from 'next';
import Heading from '../../components/shared/heading';
import WorkCard from '../../components/cards/workcard';
import Contentful from '../../api/contentful';
import { Project } from '../../models/work';

export const getStaticProps: GetStaticProps = async () => {
	const contentful = new Contentful();
	const projects = await contentful.getAllProjects();

	return {
		props: {
			projects
		},
		revalidate: 10
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
					<article className="h-full w-full overflow-hidden order-last md:order-none">
						<div className="max-w-[290px] h-[150px] rounded bg-item-light dark:bg-item-dark mx-auto">
						</div>
						<div className="max-w-[290px] blog:max-w-full mx-auto my-3">
							<h3 className='text-h3'>Ecommerce</h3>
							<p className='my-1 text-sm'>Coming soon™</p>
						</div>
					</article>
					{projects.map(project => <WorkCard key={project.id} project={project} />)}
				</div>
			</div>
		</Layout>
	)
}
export default Work;


