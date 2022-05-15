import Layout from '../../components/layout';
import Heading from '../../components/shared/heading';
import Tags from '../../components/shared/tags';
import Button from '../../components/shared/button';
import Contentful from '../../api/contentful';
import { AdjacentPostData, Post } from '../../models/blog';
import { motion, AnimatePresence } from 'framer-motion';
import { GetStaticPaths, GetStaticProps } from 'next';
import { ParsedUrlQuery } from 'querystring';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { useRouter } from 'next/router';
import useQuery from '../../hooks/useQuery';
import { useEffect } from 'react';
import useQueryPageTransition from '../../hooks/useQueryPageTransition';


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

const variants = {
	init: (direction: string) => {
		return {
			x: direction === 'ltr' ? 300 : -300,
			opacity: 0,		
			transition: { duration: .2 }
		}
	}, 
	enter: {
		x: 0,
		opacity: 1,
	},
	exit: (direction: string) => {
		return {
			x: direction === 'ltr' ? -300 : 300,
			opacity: 0,
			transition: { type: 'tween', duration: .2 }
		}
	}
}

const Post = ({ post, nextPost, previousPost }: Props) => {
	const { title, description, date, body, image, tags, timeToRead } = post;
	const queryRoute = useQuery();
	const direction = useQueryPageTransition(post.slug, nextPost?.slug, previousPost?.slug);

	return (
		<Layout>
			<AnimatePresence exitBeforeEnter onExitComplete={() => scrollTo(0, 0)}>
				<motion.article 
					key={queryRoute} 
					variants={variants} 
					custom={direction}
					initial="init" 
					animate="enter" 
					exit="exit" 
					className='my-8 md:my-28'
				>
					<p className='text-sm'>{date.slice(0, 10)} — {timeToRead} min read</p>
					<Heading>{title}</Heading>
					<img src={image.fields.file.url} alt={title} className='mt-4 w-full h-[250px] object-cover rounded mb-3' />
					<Tags tags={tags} />
					<p className="italic my-6">{description}</p>
					{documentToReactComponents(body)}
					<div className="flex my-5">
						<div className="h-[75px] w-[75px] border border-accent rounded-full"></div>
						<div className="mx-5 self-center">
							<p className="mt-2">Pontus bergqvist</p>
							<p className="text-sm">{date.slice(0, 10)}</p>
						</div>
					</div>
					<div className="w-full flex justify-between my-16">
						<Button type="previous" route="/blog" data={previousPost} />
						<Button type="next" route="/blog" data={nextPost} />
					</div>
				</motion.article>
			</AnimatePresence>
		</Layout>
	)
}

export default Post;
