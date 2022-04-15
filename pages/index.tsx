import type { NextPage } from 'next'
import Head from 'next/head';
import Header from '../components/home/header';
import About from '../components/home/about';
import Blog from '../components/home/blog';

const Home: NextPage = () => {
  return (
		<>
			<Head>
				<title>Home | Bergqvist.io</title>
			</Head>
			<Header />
			<About />
			<Blog />
		</>
  )
}

export default Home
