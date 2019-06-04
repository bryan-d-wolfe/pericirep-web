import React, { ChangeEvent, FormEvent, useState } from "react";

export interface FormProps {
  text: string;
  callback: (word: string) => void;
}

export function Form(props: FormProps) {
  const [text, setText] = useState(props.text);
  function onClick(e: FormEvent<HTMLButtonElement>) {
    e.preventDefault();
    props.callback(text);
  }
  function onChange(e: ChangeEvent<HTMLTextAreaElement>) {
    e.preventDefault();
    setText(e.currentTarget.value);
  }
  return (
    <form>
      <textarea
        onChange={(e: ChangeEvent<HTMLTextAreaElement>) => onChange(e)}
        value={text}
      />
      <button onClick={(e: FormEvent<HTMLButtonElement>) => onClick(e)}>Submit!</button>
    </form>
  );
}
