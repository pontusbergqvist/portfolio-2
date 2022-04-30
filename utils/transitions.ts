const variants = {
	initial: (direction: string) => {
		return {
			x: direction === 'ltr' ? 300 : -300,
			opacity: 0,
			transition: { type: 'tween', duration: .2 }
		}
	},
	enter: {
		x: 0,
		opacity: 1
	},
	exit: (direction: string) => {
		return {
			x: direction === 'rtl' ? 300 : -300,
			opacity: 0,
			transition: { type: 'tween', duration: .2 }
		}
	}
}

export default variants;
