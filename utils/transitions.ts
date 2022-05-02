const variants = {
	initial: (direction: string) => {
		return {
			x: !direction ? 0 : direction === 'ltr' ? 300 : -300,
			opacity: 0,
			transition: { type: 'tween', duration: .2, when: "afterChildren" }
		}
	},
	enter: {
		x: 0,
		y: 0,
		opacity: 1
	},
	exit: (direction: string) => {
		return {
			x: !direction ? 0 : direction === 'ltr' ? -300 : 300,
			opacity: 0,
			transition: { type: 'tween', duration: .2 }
		}
	},
}

export default variants;
