import MenuItem from './menuitem'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { getValues } from '../../utils/nav'

const MenuItems = () => {
  const router = useRouter()
  const [initPosition, initTranslate] = getValues(router)
  const [position, setPosition] = useState(initPosition)
  const [translate, setTranslate] = useState(initTranslate)

  useEffect(() => {
    if (router.route === '/') {
      setPosition(0)
      setTranslate('0%')
    } else if (router.route.slice(0, 5) === '/work') {
      setPosition(180)
      setTranslate('-50%')
    } else if (router.route.slice(0, 5) === '/blog') {
      setPosition(360)
      setTranslate('-100%')
    }
  }, [router.route])

  return (
    <ul className="w-[360px] h-[35px] hidden md:flex items-center justify-between relative">
      <MenuItem route="/" />
      <MenuItem route="/work" />
      <MenuItem route="/blog" />
      <motion.div
        className={`bg-item-dark dark:bg-item-light h-full w-[72px] rounded absolute`}
        animate={{ x: position, translateX: translate }}
        initial={false}
      ></motion.div>
    </ul>
  )
}

export default MenuItems
