import { NextRouter } from 'next/router'

export const getValues = (router: NextRouter): Array<number | string> => {
  if (router.route.slice(0, 5) === '/') {
    return [0, '0%']
  } else if (router.route.slice(0, 5) === '/work') {
    return [180, '-50%']
  } else if (router.route.slice(0, 5) === '/blog') {
    return [360, '-100%']
  }
  return []
}
