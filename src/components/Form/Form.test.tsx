import React from "react";
import truthyTest from "../../tests/truthyTest";
import { Form } from "./Form";

it (
  "Form is truthy!",
  () => truthyTest(<Form />),
);
