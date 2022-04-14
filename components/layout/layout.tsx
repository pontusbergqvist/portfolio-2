import Nav from './nav';
import Footer from './footer';

interface Props {
	children: JSX.Element
}

const Layout = ({ children }: Props) => {
	return (
		<div className='bg-light text-dark dark:bg-dark dark:text-light text-body'>
			<div className='w-[550px] mx-auto'>
				<Nav />
				{children}
				<Footer />
			</div>
		</div>
	)
}

export default Layout;
