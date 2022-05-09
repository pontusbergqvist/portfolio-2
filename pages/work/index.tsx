import Layout from '../../components/layout';
import type { NextPage } from 'next';
import Heading from '../../components/shared/heading';
import data from '../../data/data.json';
import Card from '../../components/shared/card';

const Work: NextPage = () => {
	return (
		<Layout>
			<div className='my-8 md:my-28 max-w-[290px] blog:max-w-full mx-auto'>
				<Heading>Work</Heading>
				<div className='grid grid-cols-1 blog:grid-cols-2 gap-8'>
				{data.map((item, index) => <Card work key={index} data={item} />)} 
				</div>
			</div>
		</Layout>
	)
}
export default Work;


