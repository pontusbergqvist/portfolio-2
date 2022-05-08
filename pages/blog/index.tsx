import type { NextPage } from 'next'
import Layout from '../../components/layout';
import Heading from '../../components/shared/heading';
import Card from '../../components/shared/card';
import data from '../../data/data.json';

const Blog: NextPage = () => {
  return (
		<Layout>
			<div className='my-8 md:my-28'>
				<Heading>Blog</Heading>
				<div className='grid grid-cols-2 gap-8'>
				{data.map(item => (
					<Card key={item.id} data={item} />
				))} 
				</div>
			</div>
		</Layout>
  )
}

export default Blog;
