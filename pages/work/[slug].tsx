import Breadcrumbs from '../../components/shared/breadcrumbs';
import Heading from '../../components/shared/heading';
import Layout from '../../components/layout';
import Tags from '../../components/shared/tags';
import { AiFillGithub } from 'react-icons/ai'
import { BiLinkExternal } from 'react-icons/bi'
import { Project } from '../../models/work';
import Contentful from '../../api/contentful';
import { GetStaticPaths, GetStaticProps } from 'next';
import { motion } from 'framer-motion';

interface Props {
	project: Project
}

export const getStaticPaths: GetStaticPaths = async () => {
	const contentful = new Contentful();
	const paths = await contentful.getAllProjectPaths();

  return {
		paths,
		fallback: false
	}
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
	const contentful = new Contentful();
	const project = await contentful.getProject(params?.slug)
	return {
		props: {
			project
	 	}
	}
}

const Project = ({ project }: Props) => {
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
				{body.content.map((item, index) => <p key={index} className="my-3">{item.content[0].value}</p>)}
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
			</article>
		</Layout>
	)
}

export default Project;
