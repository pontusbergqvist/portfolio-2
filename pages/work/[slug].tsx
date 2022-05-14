import Breadcrumbs from '../../components/shared/breadcrumbs';
import Heading from '../../components/shared/heading';
import Layout from '../../components/layout';
import Tags from '../../components/shared/tags';
import Button from '../../components/shared/button'
import Contentful from '../../api/contentful';
import { Project } from '../../models/work';
import { AiFillGithub } from 'react-icons/ai'
import { BiLinkExternal } from 'react-icons/bi'
import { motion } from 'framer-motion';
import { GetStaticPaths, GetStaticProps } from 'next';
import { ParsedUrlQuery } from 'querystring';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { AdjacentPostData } from '../../models/blog';

interface Params extends ParsedUrlQuery {
	slug: string;
}

interface Props {
	project: Project;
	nextProject: AdjacentPostData | null;
	previousProject: AdjacentPostData | null;
}

export const getStaticPaths: GetStaticPaths = async () => {
	const contentful = new Contentful();
	const paths = await contentful.getAllProjectPaths();

  return {
		paths,
		fallback: false
	}
}

export const getStaticProps: GetStaticProps<Props, Params> = async ({ params }) => {
	const contentful = new Contentful();
	const project = await contentful.getProject(params!.slug)
	const nextProject = await contentful.getNextProject(project);
	const previousProject = await contentful.getPreviousProject(project);

	return {
		props: {
			project,
			nextProject,
			previousProject
	 	}, 
		revalidate: 10
	}
}

const Project = ({ project, nextProject, previousProject }: Props) => {
	const { title, tags, description, image, body, externalLink, github } = project;

	return (
		<Layout>
			<article className='my-8 md:my-28'>
				<Heading>{title}</Heading>
				<img src={image.fields.file.url} alt={title} className='mt-4 w-full h-[250px] object-cover rounded' />
				<Breadcrumbs current={title} />
				<br />
				<Tags tags={tags} />
				<p className="my-5">{description}</p>
				{documentToReactComponents(body)}
				<div className='flex text-h2 -ml-1'>
				{github && (
					<motion.div className='px-1 cursor-pointer hover:text-accent' whileHover={{ scale: 1.2 }}>
						<a href={github} target="_blank" rel="noreferrer">
							<AiFillGithub /> 
						</a>
					</motion.div>
				)}
				{externalLink && (
					<motion.div className='px-1 cursor-pointer hover:text-accent' whileHover={{ scale: 1.2 }}>
						<a href={externalLink} target="_blank" rel="noreferrer">
							<BiLinkExternal />
						</a>
					</motion.div>
				)}
				</div>
				<div className="w-full flex justify-between my-16">
					<Button type="previous" route="/work" data={previousProject} />
					<Button type="next" route="/work" data={nextProject} />
				</div>
			</article>
		</Layout>
	)
}

export default Project;
