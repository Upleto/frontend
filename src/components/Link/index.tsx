import React from 'react';
import Link from 'next/link';
import prefixLink from '../../utils/common/prefixLink';

const PrefixedLink: React.FC<Link['props']> = ({ href, as = href, ...props }) => (
  // eslint-disable-next-line react/jsx-props-no-spreading
  <Link href={href} as={prefixLink(as.toString())} {...props} />
);

export default PrefixedLink;
