import type { NextPage } from 'next'
import Layout from '../../components/layout';
import Heading from '../../components/shared/heading';
import Card from '../../components/shared/card';
import { Post } from '../../models/blog';
import Contentful from '../../api/contentful';

export const getStaticProps = async () => {
	const contentful = new Contentful();
	const posts = await contentful.getAllBlogPosts();

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
					<Card blog key={index} data={post} />
				))} 
				</div>
			</div>
		</Layout>
  )
}

export default Blog;
