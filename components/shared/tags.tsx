interface Props {
	tags: string[]
}

const Tags = ({ tags }: Props) => {
	return (
		<ul className="flex -ml-1 font-mono"> 
			{tags.map((item, index) => <li className="text-accent mx-1" key={index}>{item}</li>)}
		</ul>
	) 
}

export default Tags;
