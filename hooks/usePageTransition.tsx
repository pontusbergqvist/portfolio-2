import { useEffect, useRef } from 'react'

/**
 * Uses a pre-defined array of routes to find which direction to animate between pages
 * @param {string} route - Current page route.
 * @return {string} Returns ltr (left to right) or rtl (right to left) as a string to be used conditionally
 * I found strings to be more explicit than using a boolean value for this case
 */
const usePageTransition = (route: string): string => {
  // currentRoute is sliced to target dynamic routes too
  const currentRoute = route.slice(0, 5)
  const pages = ['/', '/work', '/blog']

  const ref = useRef<string | undefined>()

  useEffect(() => {
    ref.current = currentRoute
  }, [currentRoute])
  return ref.current && pages.indexOf(currentRoute) > pages.indexOf(ref.current)
    ? 'ltr'
    : 'rtl'
}

export default usePageTransition
