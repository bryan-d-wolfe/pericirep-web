import React from 'react';

export interface ImageProps {
    src: string;
}

export function Image(props: ImageProps) {
  return <img src={props.src} />;
}
