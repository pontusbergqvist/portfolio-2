import { useEffect, useState } from 'react';
import useSsr from '../../hooks/useSsr';

interface Props {
	children: string
}

const Typewriter = ({ children }: Props) => {
	const ssr = useSsr();
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

	return !ssr && (
		<>
				<span className='absolute top-[-15%] left-[-60%] text-accent'>{renderString}</span>
				<span className='absolute top-[5%] left-[-10%] text-accent'>\</span>
		</>
	)
}

export default Typewriter;
