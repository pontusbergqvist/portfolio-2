import Breadcrumbs from '../../components/shared/breadcrumbs';
import Heading from '../../components/shared/heading';
import Layout from '../../components/layout';
import Tags from '../../components/shared/tags';
import Button from '../../components/shared/button'
import Contentful from '../../api/contentful';
import AnimateQueryPage from '../../components/shared/animatequerypage';
import ExternalLink from '../../components/work/externallink';
import { Project } from '../../models/work';
import { AiFillGithub } from 'react-icons/ai'
import { BiLinkExternal } from 'react-icons/bi'
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
	const { title, tags, image, body, externalLink, github } = project;

	return (
		<AnimateQueryPage pages={[previousProject?.slug, project.slug, nextProject?.slug]}>
			<Layout>
				<Heading>{title}</Heading>
				<img src={image.fields.file.url} alt={title} className='my-4 w-full h-[250px] object-cover rounded' />
				<Breadcrumbs current={title} />
				<br />
				<Tags tags={tags} />
				<div className="my-5">
					{documentToReactComponents(body)}
				</div>
				<div className='flex text-h2 -ml-1 my-5'>
					{github && <ExternalLink to={github} icon={<AiFillGithub />} />}
					{externalLink && <ExternalLink to={externalLink} icon={<BiLinkExternal />} />}
				</div>
				<div className="w-full flex justify-between my-16">
					<Button type="previous" route="/work" data={previousProject} />
					<Button type="next" route="/work" data={nextProject} />
				</div>
			</Layout>
		</AnimateQueryPage>
	)
}

export default Project;
