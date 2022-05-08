import Layout from '../../components/layout';
import type { NextPage } from 'next';
import Heading from '../../components/shared/heading';
import data from '../../data/data.json';
import Card from '../../components/shared/card';

const Work: NextPage = () => {
	return (
		<Layout>
			<div className='my-8 md:my-28'>
				<Heading>Work</Heading>
				<div className='grid grid-cols-2 gap-8'>
				{data.map((item, index) => <Card work key={index} data={item} />)} 
				</div>
			</div>
		</Layout>
	)
}
export default Work;


					/*<Link href={`/work/${item.id}`} key={item.id}>
						<article className='text-center cursor-pointer'>
							<img className="h-[150px] w-full object-none rounded mb-2" src={item.url} alt="asdf"/>
							<h3 className='text-h3'>Project</h3>
							<p className='text-sm my-1'>{item.description}</p>
						</article>
					</Link>*/
