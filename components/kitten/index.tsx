import Typewriter from './typewriter';
import useHover from '../../hooks/useHover';
import useSsr from '../../hooks/useSsr';

const Kitten = () => {
	const [ref, isHovering] = useHover();
	const ssr = useSsr();

	return !ssr ? (
		<a href='mailto:pontus@bergqvist.io' ref={ref} className="pointer-events-none blog:pointer-events-auto relative font-mono p-5 cursor-pointer self-end footer:self-auto">
		&nbsp;/| ､ 		 <br />
				(°､ ｡ 7 	 <br />
				 |､ ~ヽ 	 <br />
				 じしf_,)〳<br />
				{isHovering && <Typewriter>Get in touch!</Typewriter>}
		</a>	
	) : ""
}

export default Kitten;
