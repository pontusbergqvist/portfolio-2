import { PageItemAnimationWrapper } from '../shared/animations';
import Heading from '../shared/heading';
import Link from '../shared/link';

const Blog = () => {
	return (
		<PageItemAnimationWrapper>
			<section className="my-14 flex flex-col">
				<div>
					<Heading>Blog</Heading>
				</div>
				<div className="grid mx-auto grid-cols-1 blog:grid-cols-2 gap-8 my-4">
					<article>
						<img className="h-[200px] blog:h-[150px] w-full object-cover rounded mb-2" src="https://images.unsplash.com/photo-1649899029737-7417f2b9d947?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&q=80" alt="asdf"/>
						<p className='font-mono'>Apr 11, 2022</p>
						<h3 className='text-h3'>Bloggpost: Titel</h3>
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do..</p>
					</article>
					<article>
						<img className="h-[200px] blog:h-[150px] w-full object-cover rounded mb-2" src="https://images.unsplash.com/photo-1649899029737-7417f2b9d947?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&q=80" alt="asdf"/>
						<p className='font-mono'>Apr 14, 2022</p>
						<h3 className='text-h3'>Bloggpost: Titel</h3>
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do..</p>
					</article>
				</div>
				<Link to="/blog">View posts</Link>
			</section>
		</PageItemAnimationWrapper>
	)
}

export default Blog;
