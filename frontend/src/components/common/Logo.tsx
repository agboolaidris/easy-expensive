import React from 'react';
import Image, { ImageProps } from 'next/image';

type LogoProps = Partial<ImageProps>;

export const Logo = (props: LogoProps) => {
  return (
    <Image
      alt="easy-expensive"
      height={50}
      src="/icons/logo.svg"
      width={130}
      {...props}
    />
  );
};
