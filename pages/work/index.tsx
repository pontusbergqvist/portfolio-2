import Head from 'next/head';
import Link from 'next/link';
import type { NextPage } from 'next';
import Heading from '../../components/shared/heading';

const Work: NextPage = () => {
	const arr = [0, 1, 2, 3];
	return (
		<>
			<Head>
				<title>Work | Bergqvist.io</title>
			</Head>
			<div className='my-28'>
				<Heading>Portfolio</Heading>
				<div className='grid grid-cols-2 gap-8'>
				{arr.map(item => (
					<Link href={`/work/${item}`} key={item}>
						<article className='text-center cursor-pointer'>
							<img className="h-[125px] w-full object-none rounded mb-2" src="https://images.unsplash.com/photo-1649899029737-7417f2b9d947?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&q=80" alt="asdf"/>
							<h3 className='text-h3'>Project</h3>
							<p className='text-sm my-1'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
						</article>
					</Link>
				))}
				</div>
			</div>
		</>
	)
}

export default Work;
