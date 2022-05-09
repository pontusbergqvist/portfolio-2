import data from '../../data/data.json';
import Heading from '../shared/heading';
import Link from '../shared/link';
import Card from '../shared/card';

const Blog = () => {
	return (
		<section className="my-14 flex flex-col ">
			<div>
				<Heading>Blog</Heading>
			</div>
			<div className="grid w-full mx-auto grid-cols-1 blog:grid-cols-2 gap-8 my-4">
				{data.map((item, index) => index < 2 && <Card blog key={index} data={item}/>)}
			</div>
			<Link to="/blog">View posts</Link>
		</section>
	)
}

export default Blog;
