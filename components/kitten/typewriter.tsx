import { useEffect, useState } from 'react';

interface Props {
	children: string
}

const Typewriter = ({ children }: Props) => {
	let [inputString] = useState(children);
	let [renderString, setRenderString] = useState("");
	let [i, increment] = useState(0);

	const writer = () => {
		if (i < inputString.length) {
			setRenderString(renderString += inputString[i]);
			increment(i++);
			setTimeout(writer, 100)
		} 
	}

  // eslint-disable-next-line react-hooks/exhaustive-deps
	useEffect(() => writer, []);

	return (
		<>
				<span className='absolute top-[-15%] left-[-60%] text-accent'>{children}</span>
				<span className='absolute top-[5%] left-[-10%] text-accent'>\</span>
		</>
	)
}

export default Typewriter;
