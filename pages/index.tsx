import type { NextPage } from 'next';
import Layout from '../components/layout';
import Header from '../components/home/header';
import About from '../components/home/about';
import Blog from '../components/home/blog';
import Contentful from '../api/contentful';
import { Post } from '../models/blog';

export const getStaticProps = async () => {
  const contentful = new Contentful();
  const posts = await contentful.getAllBlogPosts();

  return {
    props: {
      posts,
    },
    revalidate: 10,
  };
};

interface Posts {
  posts: Post[];
}

const Home: NextPage<Posts> = ({ posts }) => {
  return (
    <Layout>
      <Header />
      <About />
      <Blog posts={posts} />
    </Layout>
  );
};

export default Home;
