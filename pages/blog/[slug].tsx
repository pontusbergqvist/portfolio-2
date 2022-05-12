import Heading from '../../components/shared/heading';
import Layout from '../../components/layout';
import Tags from '../../components/shared/tags';
import { motion } from 'framer-motion';
import { createClient, EntryCollection } from 'contentful';
import { BlogEntry, Post } from '../../models/blog';
import Contentful from '../../api/contentful';


interface Params {
	params: {
		slug: string
	}
} 

interface Props {
	post: Post
}

export const getStaticPaths = async () => {
	const contentful = new Contentful;
	const paths = await contentful.getAllBlogPaths();

  return {
		paths,
		fallback: false
	}
}

export const getStaticProps = async ({ params }: Params) => {
	const contentful = new Contentful();
	const post = await contentful.getPost(params.slug); 

	return {
		props: {
			post
	  }
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
				{body.content.map((item, index) => <p key={index} className="my-3">{item.content[0].value}</p>)}
				<div className="flex my-5">
					<div className="h-[75px] w-[75px] border border-accent rounded-full"></div>
					<div className="mx-5 self-center">
						<p className="mt-2">Pontus bergqvist</p>
						<p className="text-sm">{date}</p>
					</div>
				</div>
			</motion.article>
		</Layout>
	)
}

export default Post;
