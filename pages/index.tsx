import type { NextPage } from 'next'
import Header from '../components/home/header';
import About from '../components/home/about';

const Home: NextPage = () => {
  return (
		<>
			<Header />
			<About />
		</>
  )
}

export default Home
