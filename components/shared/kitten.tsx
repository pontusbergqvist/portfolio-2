import Typewriter from './typewriter';
import { useState, useEffect, useRef } from 'react';

const Kitten = () => {
	const [isHovering, setIsHovering] = useState(false);
	const ref: any = useRef(null);

	const onMouseOver = () => setIsHovering(true);
	const onMouseOut = () => setIsHovering(false);

	useEffect(() => {
		ref.current && ref.current.addEventListener("mouseover", onMouseOver);
		ref.current && ref.current.addEventListener("mouseout", onMouseOut);

		return () => {
			ref.current.removeEventListener("mouseover", onMouseOver);
			ref.current.removeEventListener("mouseout", onMouseOut);
		}
	}, [ref.current])

	useEffect(() => {
		console.log(isHovering)
	}, [isHovering])


	return (
		<div ref={ref} className="relative font-mono p-5 cursor-pointer">
		&nbsp;/| ､ 		 <br />
				(°､ ｡ 7 	 <br />
				 |､ ~ヽ 	 <br />
				 じしf_,)〳<br />
				{isHovering && (
					<Typewriter>
						Get in touch!
					</Typewriter>
				)}
		</div>	
	)
}

export default Kitten;
