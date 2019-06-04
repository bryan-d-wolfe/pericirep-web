import React from "react";
import { Form } from "../Form/Form";
import JokerImage from "../Image/Joker/Joker";

export interface MainProps {
  title: string;
  condition: (text: string) => boolean;
}

function Main(props: MainProps) {
  function formCallback(text: string) {
    alert(
      props.condition(text) ? text : "Wrong!",
    );
  }
  return (
    <main>
      <h1>{props.title}</h1>
      <Form text={props.title} callback={formCallback} />
      <JokerImage />
    </main>
  );
}

export default Main;
