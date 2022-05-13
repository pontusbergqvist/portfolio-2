import Layout from '../../components/layout';
import Heading from '../../components/shared/heading';
import Tags from '../../components/shared/tags';
import Contentful from '../../api/contentful';
import { Post } from '../../models/blog';
import { motion } from 'framer-motion';
import { GetStaticPaths, GetStaticProps } from 'next';
import { ParsedUrlQuery } from 'querystring';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';


interface Params extends ParsedUrlQuery {
	slug: string
} 

interface Props {
	post: Post
}

export const getStaticPaths: GetStaticPaths = async () => {
	const contentful = new Contentful;
	const paths = await contentful.getAllBlogPaths();

  return {
		paths,
		fallback: false
	}
}

export const getStaticProps: GetStaticProps<Props, Params> = async ({ params }) => {
	const contentful = new Contentful();
	const post = await contentful.getPost(params!.slug); 

	return {
		props: {
			post
	  },
		revalidate: 10
	}
}

const Post = ({ post }: Props) => {
	const { title, description, date, body, image, tags, timeToRead } = post
	return (
		<Layout>
			<motion.article className='my-8 md:my-28'>
				<p className='text-sm'>{date.slice(0, 10)} — {timeToRead} min read</p>
				<Heading>{title}</Heading>
				<img src={image.fields.file.url} alt={title} className='mt-4 w-full h-[250px] object-cover rounded mb-3' />
				<Tags tags={tags} />
				<p className="italic my-6">{description}</p>
				{documentToReactComponents(body)}
				<div className="flex my-5">
					<div className="h-[75px] w-[75px] border border-accent rounded-full"></div>
					<div className="mx-5 self-center">
						<p className="mt-2">Pontus bergqvist</p>
						<p className="text-sm">{date.slice(0, 10)}</p>
					</div>
				</div>
			</motion.article>
		</Layout>
	)
}

export default Post;
