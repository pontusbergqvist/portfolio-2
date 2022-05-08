import data from '../../data/data.json';
import { PageItemAnimationWrapper } from '../shared/animations';
import Heading from '../shared/heading';
import Link from '../shared/link';
import Card from '../shared/card';

const Blog = () => {
	return (
		<PageItemAnimationWrapper>
			<section className="my-14 flex flex-col">
				<div>
					<Heading>Blog</Heading>
				</div>
				<div className="grid mx-auto grid-cols-1 blog:grid-cols-2 gap-8 my-4">
					{data.map((item, index) => index < 2 && <Card key={index} home data={item}/>)}
				</div>
				<Link to="/blog">View posts</Link>
			</section>
		</PageItemAnimationWrapper>
	)
}

export default Blog;
