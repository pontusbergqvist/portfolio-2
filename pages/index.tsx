import type { NextPage } from 'next'
import Layout from '../components/layout';
import Header from '../components/home/header';
import About from '../components/home/about';
import Blog from '../components/home/blog';
import { createClient, EntryCollection } from 'contentful';
import { BlogEntry, Post } from '../models/blog';

export const getStaticProps = async () => {
	const client = createClient({
		space: process.env.SPACE_ID as string,
		accessToken: process.env.ACCESS_TOKEN as string
	})

	const res: EntryCollection<BlogEntry> = await client.getEntries({ content_type: 'blog' });
	const posts = res.items.map(post => {
			return {
				id: post.sys.id,
				date: post.sys.createdAt,
				title: post.fields.title,
				slug: post.fields.slug,
				description: post.fields.description,
				tags: post.fields.tags,
				image: post.fields.image,
				body: post.fields.body
			}
	})

	return {
		props: {
			posts
		}
	}
}

interface Posts {
	posts: Post[]
}

const Home: NextPage<Posts> = ({ posts }) => {
	console.log(posts);
  return (
			<Layout>
				<Header />
				<About />
				<Blog posts={posts} />
			</Layout>
  )
}

export default Home
