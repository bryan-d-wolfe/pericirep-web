import React from 'react';
import Form from '../Form/Form';
import Image from '../Image/Image';

export interface MainProps {
  title: string;
  imgSrc: string;
}

function Main(props: MainProps) {
  return (
    <main> 
      <h1>{props.title}</h1>
      <Form />
      <Image src={props.imgSrc} /> 
    </main>
  );
}

export default Main;