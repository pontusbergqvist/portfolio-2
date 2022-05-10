import type { NextPage } from 'next'
import Layout from '../../components/layout';
import Heading from '../../components/shared/heading';
import Card from '../../components/shared/card';
import { createClient } from 'contentful'; 
import { Post } from '../../models/blog';

export const getStaticProps = async () => {
	const client = createClient({
		space: process.env.SPACE_ID as string,
		accessToken: process.env.ACCESS_TOKEN as string
	})

	const res = await client.getEntries({ content_type: 'blog' });
	const posts = res.items.map(item => item.fields);

	return {
		props: {
			posts		
		}
	}
}

interface Posts {
	posts: Post[]
}

const Blog: NextPage<Posts> = ({ posts }) => {
  return (
		<Layout>
			<div className='my-8 md:my-28 max-w-[290px] blog:max-w-full mx-auto'>
				<Heading>Blog</Heading>
				<div className='grid grid-cols-1 blog:grid-cols-2 gap-8'>
				{posts.map((post, index) => (
					<Card blog key={index} post={post} />
				))} 
				</div>
			</div>
		</Layout>
  )
}

export default Blog;
