import Layout from '../../components/layout';
import Heading from '../../components/shared/heading';
import Tags from '../../components/shared/tags';
import Button from '../../components/shared/button';
import Contentful from '../../api/contentful';
import AnimateQueryPage from '../../components/shared/animatequerypage';
import options from '../../utils/documentToReactComponents';
import { AdjacentPostData, Post } from '../../models/blog';
import { GetStaticPaths, GetStaticProps } from 'next';
import { ParsedUrlQuery } from 'querystring';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';


interface Params extends ParsedUrlQuery {
	slug: string;
} 

interface Props {
	post: Post;
	nextPost: AdjacentPostData | null;
	previousPost: AdjacentPostData | null;
}

export const getStaticPaths: GetStaticPaths = async () => {
	const contentful = new Contentful;
	const paths = await contentful.getAllBlogPaths();

  return {
		paths,
		fallback: false
	}
}

export const getStaticProps: GetStaticProps<Props, Params> = async ({ params }) => {
	const contentful = new Contentful();
	const post = await contentful.getPost(params!.slug); 
	const nextPost = await contentful.getNextPost(post);
	const previousPost = await contentful.getPreviousPost(post);

	return {
		props: {
			post,
			nextPost,
			previousPost
	  },
		revalidate: 10
	}
}

const Post = ({ post, nextPost, previousPost }: Props) => {
	const { title, date, body, image, tags, timeToRead } = post;

	return (
		<Layout>
			<AnimateQueryPage pages={[previousPost?.slug, post.slug, nextPost?.slug]}>
				<p className='text-sm'>{date.slice(0, 10)} — {timeToRead} min read</p>
				<Heading>{title}</Heading>
				<img src={image.fields.file.url} alt={title} className='mt-4 w-full h-[250px] object-cover rounded mb-3' />
				<Tags tags={tags} />
				<div>
					{documentToReactComponents(body, options)}
				</div>
				<div className="flex my-5">
					<div className="h-[75px] w-[75px] border border-accent rounded-full"></div>
					<div className="mx-5 self-center">
						<p className="mt-2">Pontus bergqvist</p>
						<p className="text-sm">{date.slice(0, 10)}</p>
					</div>
				</div>
				<div className="w-full flex flex-col items-center md:flex-row md:justify-between my-16">
					<Button type="previous" route="/blog" data={previousPost} />
					<Button type="next" route="/blog" data={nextPost} />
				</div>
			</AnimateQueryPage>
		</Layout>
	)
}

export default Post;
