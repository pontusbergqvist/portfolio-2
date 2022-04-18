import type { NextPage } from 'next'
import Layout from '../components/layout/layout';
import Header from '../components/home/header';
import About from '../components/home/about';
import Blog from '../components/home/blog';

const Home: NextPage = () => {
  return (
			<Layout>
				<Header />
				<About />
				<Blog />
			</Layout>
  )
}

export default Home
