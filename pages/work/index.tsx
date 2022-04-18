import Link from 'next/link';
import Layout from '../../components/layout/layout';
import type { NextPage } from 'next';
import Heading from '../../components/shared/heading';
import data from '../../data/data.json';

const Work: NextPage = () => {
	return (
		<Layout>
			<div className='my-28'>
				<Heading>Work</Heading>
				<div className='grid grid-cols-2 gap-8'>
				{data.map(item => (
					<Link href={`/work/${item.id}`} key={item.id}>
						<article className='text-center cursor-pointer'>
							<img className="h-[150px] w-full object-none rounded mb-2" src={item.url} alt="asdf"/>
							<h3 className='text-h3'>Project</h3>
							<p className='text-sm my-1'>{item.description}</p>
						</article>
					</Link>
				))} 
				</div>
			</div>
		</Layout>
	)
}
export default Work;

