import { motion } from 'framer-motion'

interface Props {
  to: string
  icon: any
}

const ExternalLink = ({ to, icon }: Props) => {
  return (
    <motion.div
      className="px-1 cursor-pointer hover:text-accent"
      whileHover={{ scale: 1.2 }}
    >
      <a href={to} target="_blank" rel="noreferrer">
        {icon}
      </a>
    </motion.div>
  )
}

export default ExternalLink
