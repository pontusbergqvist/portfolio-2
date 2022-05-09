import { useState, useEffect } from 'react';
import useSsr from './useSsr';

/**
 * This hook was made for when the hamburger menu overlay is active and the viewport width resizes to above the md-breakpoint, the overlay should disappear and the hamburger menu button should have its active state set to false. Or else the user will be stuck in the overlay with no hamburger button to toggle it off since the button uses media queries.
 * @return {boolean} - value if viewport width is greater than the md-breakpoint
 */
const useWindowWidth = (): boolean => {
	const ssr = useSsr();
  const [width, setWidth] = useState(0);

  const handler = () => setWidth(window.innerWidth);

  useEffect(() => {
    if (!ssr) {
			handler(); // Set initial browser width on component mount
      window.addEventListener('resize', handler);
    }
    return () => window.removeEventListener('resize', handler);
  })
  return width >= 768 ? true : false;
}

export default useWindowWidth;
