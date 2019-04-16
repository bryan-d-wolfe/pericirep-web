import React from 'react';

export interface ImageProps {
    src: string;
}

function Image(props: ImageProps) {
  return <img src={props.src} />;
}

export default Image;
