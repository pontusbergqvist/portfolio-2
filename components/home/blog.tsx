import Heading from '../shared/heading';
import Link from '../shared/link';
import Card from '../shared/card';
import { Post } from '../../models/blog';

interface Props {
	posts: Post[]
}


const Blog = ({ posts }: Props) => {
	return (
		<section className="my-14 flex flex-col ">
			<div>
				<Heading>Blog</Heading>
			</div>
			<div className="grid w-full mx-auto grid-cols-1 blog:grid-cols-2 gap-8 my-4">
				{posts.map((item, index) => index < 2 && <Card blog key={index} post={item}/>)}
			</div>
			<Link to="/blog">View posts</Link>
		</section>
	)
}

export default Blog;
