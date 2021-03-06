import React, { ChangeEvent, FormEvent, useState } from "react";

export function Form() {
  const [text, setText] = useState("");
  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setText("Wrong Word!");
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
      <button onClick={(e: FormEvent) => handleSubmit(e)}>Submit!</button>
    </form>
  );
}
