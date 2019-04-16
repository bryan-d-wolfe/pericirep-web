import React from 'react';
import Form from '../Elements/Form';
import Image from '../Elements/Image';

export interface MainProps {
  imgSrc: string;
}

function Main(props: MainProps) {
  return (
    <main>
      <Form />
      <Image src={props.imgSrc} /> 
    </main>
  );
}

export default Main;
