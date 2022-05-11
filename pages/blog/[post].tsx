import Heading from '../../components/shared/heading';
import Layout from '../../components/layout';
import Tags from '../../components/shared/tags';
import { motion } from 'framer-motion';
import { createClient, EntryCollection } from 'contentful';
import { BlogEntry, Post } from '../../models/blog';


interface Params {
	params: {
		post: string
	}
} 

interface Props {
	post: Post
}

export const getStaticPaths = async () => {
	const client = createClient({
		space: process.env.SPACE_ID as string,
		accessToken: process.env.ACCESS_TOKEN as string
	})

	const res: EntryCollection<BlogEntry> = await client.getEntries({ content_type: 'blog' });

	const paths = res.items.map(post => ({
		params: {
			post: post.fields.slug 
		}
	})) 

  return {
		paths,
		fallback: false
	}
}

export const getStaticProps = async ({ params }: Params) => {
	const client = createClient({
		space: process.env.SPACE_ID as string,
		accessToken: process.env.ACCESS_TOKEN as string
	})

	const res: EntryCollection<BlogEntry> = await client.getEntries({ content_type: 'blog' });
	const post = res.items.find(post => post.fields.slug == params.post)
	if (post === undefined) throw new TypeError(`No entry is using the slug ${params.post}.`);
	return {
		props: {
			post: {
				id: post.sys.id,
				date: post.sys.createdAt.slice(0, 10),
				title: post.fields.title,
				tags: post.fields.tags,
				description: post.fields.description,
				image: post.fields.image,
				body: post.fields.body,
				timeToRead: post.fields.timeToRead
			} 
	  }
	}
}

const Post = ({ post }: Props) => {
	const { title, description, date, body, image, tags, timeToRead } = post
	console.log(post)
	return (
		<Layout>
			<motion.article className='my-8 md:my-28'>
				<p className='text-sm'>{date} — {timeToRead} min read</p>
				<Heading>{title}</Heading>
				<img src={image.fields.file.url} alt={title} className='w-full h-[250px] object-cover rounded mb-3' />
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
