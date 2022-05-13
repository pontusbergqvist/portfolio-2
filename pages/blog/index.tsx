import type { GetStaticProps, NextPage } from 'next'
import Layout from '../../components/layout';
import Heading from '../../components/shared/heading';
import BlogCard from '../../components/shared/blogcard';
import Contentful from '../../api/contentful';
import { Post } from '../../models/blog';

export const getStaticProps: GetStaticProps = async () => {
	const contentful = new Contentful();
	const posts = await contentful.getAllBlogPosts();

	return {
		props: {
			posts		
		},
		revalidate: 10
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
				<p className="mb-5 mt-2 text-sm">Latest posts</p>
				<div className='grid grid-cols-1 blog:grid-cols-2 gap-8'>
				{posts.map((post, index) => <BlogCard key={index} post={post} />)} 
				</div>
			</div>
		</Layout>
  )
}

export default Blog;
