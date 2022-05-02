import React, { useState, useCallback } from 'react';

export const Overlay: any = React.createContext({
		active: false,
		setActive: () => {}
});

const OverlayContext = ({ children }: { children: JSX.Element }) => {
	const [active, activeSetter] = useState(false);
	const setActive = useCallback(() => activeSetter(!active), [active]);

	return (
		<Overlay.Provider value={{ active, setActive }}>
			{children}
		</Overlay.Provider>
	)
}

export default OverlayContext;



