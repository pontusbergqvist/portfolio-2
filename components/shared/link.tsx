import { default as NextLink } from 'next/link';

interface Props {
  to: string;
  children: string;
}

const Link = ({ to, children }: Props) => {
  return (
    <div className="mx-auto">
      <NextLink scroll={false} href={to} passHref>
        <a className="text-center underline font-mono cursor-pointer p-1">
          {children}
        </a>
      </NextLink>
    </div>
  );
};

export default Link;
