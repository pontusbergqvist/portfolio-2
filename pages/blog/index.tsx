import type { NextPage } from 'next'
import Layout from '../../components/layout';
import Heading from '../../components/shared/heading';
import Link from 'next/link';
import data from '../../data/data.json';

const Blog: NextPage = () => {
  return (
		<Layout>
			<div className='my-8 md:my-28'>
				<Heading>Blog</Heading>
				<div className='grid grid-cols-2 gap-8'>
				{data.map(item => (
					<Link href={`/blog/${item.id}`} key={item.id}>
						<article className='text-center cursor-pointer'>
							<img className="h-[150px] w-full object-none rounded mb-2" src={item.url} alt="asdf"/>
							<h3 className='text-h3'>Blog post</h3>
							<p className='text-sm my-1'>{item.description}</p>
						</article>
					</Link>
				))} 
				</div>
			</div>
		</Layout>
  )
}

export default Blog;
