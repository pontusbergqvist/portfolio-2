interface Props {
	children: string
}

const Heading = ({ children }: Props) => {
	return (
		<h2 className="text-h2 inline-block mb-4 after:content-[''] after:block after:h-[2px] after:w-full after:bg-accent after:-my-1">{children}</h2>
	)
}

export default Heading;
