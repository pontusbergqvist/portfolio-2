export const getVariants = (windowWidth: boolean) => {
	return {
		initial: (direction: string) => {
			return {
				x: direction === 'ltr' ? windowWidth ? 300 : -300: -300,
				opacity: 0,
				transition: { duration: .2 }
			}
		},
		enter: {
			x: 0,
			y: 0,
			opacity: 1,
		},
		exit: (direction: string) => {
			return {
				x: direction === 'ltr' ? windowWidth ? -300 : 300 : 300,
				opacity: 0,
				transition: { type: 'tween', duration: .2 }
			}
		},
	}
}


export const queryVariants = {
	init: (direction: string) => {
		return {
			x: direction === 'ltr' ? 300 : -300,
			opacity: 0,		
			transition: { duration: .2 }
		}
	}, 
	enter: {
		x: 0,
		opacity: 1,
	},
	exit: (direction: string) => {
		return {
			x: direction === 'ltr' ? -300 : 300,
			opacity: 0,
			transition: { type: 'tween', duration: .2 }
		}
	}
}
