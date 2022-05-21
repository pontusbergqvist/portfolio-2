import Link from 'next/link';
import Thumbnail from './thumbnail';
import { motion } from 'framer-motion';
import { Post } from '../../models/blog';

interface Props {
  post: Post;
}

const BlogCard = ({ post }: Props) => {
  const { title, image, description, slug, date } = post;

  return (
    <Link href={`/blog/${slug}`} passHref scroll={false}>
      <motion.article
        whileHover="hover"
        className="cursor-pointer h-full w-full overflow-hidden"
      >
        <Thumbnail src={image.fields.file.url} alt={title} />
        <div className="max-w-[290px] blog:max-w-full mx-auto my-2">
          <p className="text-sm">{date.slice(0, 10)}</p>
          <h3>{title}</h3>
          <p className="my-1 text-sm">{description}</p>
        </div>
      </motion.article>
    </Link>
  );
};

export default BlogCard;
