import React from "react";
import truthyTest from "../../tests/truthyTest";
import Main from "./Main";

it (
  "Main is truthy!",
  () => truthyTest(<Main title={"Test"} />),
);
