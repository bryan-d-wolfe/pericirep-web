import React from "react";
import truthyTest from "../../tests/truthyTest";
import Main from "./Main";

function isEmpty(word: string) {
  return "" === word;
}

it (
  "Main is truthy!",
  () => truthyTest(<Main title={"Test"} condition={isEmpty} />),
);
