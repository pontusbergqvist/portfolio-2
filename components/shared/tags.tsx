interface Props {
	tags: string[]
}

const Tags = ({ tags }: Props) => {
	return (
		<ul className="flex -ml-1 font-mono"> 
			{tags.map((item, index) => <li className="my-1 mx-1 px-2 border border-accent rounded" key={index}>{item}</li>)}
		</ul>
	) 
}

export default Tags;
