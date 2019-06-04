import React from "react";
import truthyTest from "../../tests/truthyTest";
import { Form } from "./Form";

function testCallback(str: string) {
  return expect(str).toBe("Test");
}

it (
  "Form is truthy!",
  () => truthyTest(<Form text={"Test"} callback={testCallback} />),
);
