import Footer from '../layout/footer';
interface Props {
	children: JSX.Element | JSX.Element[]
}

const Layout = ({ children }: Props) => {

	return (
		<main className='max-w-[550px] mx-auto px-3'>
			{children}
			<Footer />
		</main>
	)
}

export default Layout;
