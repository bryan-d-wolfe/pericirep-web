import React from 'react';
import { Form } from '../Form/Form';
import JokerImage from '../Image/Joker/Joker';

export interface MainProps {
  title: string;
}

function Main(props: MainProps) {
  return (
    <main>
      <h1>{props.title}</h1>
      <Form />
      <JokerImage />
    </main>
  );
}

export default Main;
