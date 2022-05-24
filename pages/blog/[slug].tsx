import Layout from '../../components/layout';
import Heading from '../../components/shared/heading';
import Tags from '../../components/shared/tags';
import Button from '../../components/shared/button';
import Contentful from '../../api/contentful';
import Image from 'next/image';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { AdjacentPostData, Post } from '../../models/blog';
import { GetStaticPaths, GetStaticProps } from 'next';
import { ParsedUrlQuery } from 'querystring';
import { useState } from 'react';
import AnimateQueryPage from '../../components/shared/animatequerypage';

interface Params extends ParsedUrlQuery {
  slug: string;
}

interface Props {
  post: Post;
  nextPost: AdjacentPostData | null;
  previousPost: AdjacentPostData | null;
}

export const getStaticPaths: GetStaticPaths = async () => {
  const contentful = new Contentful();
  const paths = await contentful.getAllBlogPaths();

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<Props, Params> = async ({
  params,
}) => {
  const contentful = new Contentful();
  const post = await contentful.getPost(params!.slug);
  const nextPost = await contentful.getNextPost(post);
  const previousPost = await contentful.getPreviousPost(post);

  return {
    props: {
      post,
      nextPost,
      previousPost,
    },
    revalidate: 10,
  };
};

const Post = ({ post, nextPost, previousPost }: Props) => {
  const [dir, setDir] = useState<string>();
  const { title, date, body, image, tags, timeToRead } = post;

  return (
    <AnimateQueryPage id={post.slug} title={title} direction={dir}>
      <Layout>
        <p className="text-sm">
          {date.slice(0, 10)} — {timeToRead} min read
        </p>
        <Heading>{title}</Heading>
        <div className="mt-4 w-full shadow-lg h-[250px] object-cover rounded mb-3 relative overflow-hidden">
          <Image
            src={`https:${image.fields.file.url}`}
            alt={title}
            layout="fill"
            objectFit="cover"
          />
        </div>
        <Tags tags={tags} />
        <div className="markdown">
          <ReactMarkdown remarkPlugins={[remarkGfm]}>{body}</ReactMarkdown>
        </div>
        <div className="flex my-5">
          <div className="relative overflow-hidden h-[75px] w-[75px] border-2 border-accent rounded-full">
            <Image
              src="/myself.jpg"
              alt="Picture of myself"
              layout="fill"
              objectFit="contain"
            />
          </div>
          <div className="mx-5 self-center">
            <p className="mt-2">Pontus Bergqvist</p>
            <p className="text-sm">{date.slice(0, 10)}</p>
          </div>
        </div>
        <div className="w-full flex flex-col items-center md:flex-row md:justify-between my-16">
          <Button
            setDir={setDir}
            type="previous"
            route="/blog"
            data={previousPost}
          >
            No previous post
          </Button>
          <Button setDir={setDir} type="next" route="/blog" data={nextPost}>
            No more posts
          </Button>
        </div>
      </Layout>
    </AnimateQueryPage>
  );
};

export default Post;
