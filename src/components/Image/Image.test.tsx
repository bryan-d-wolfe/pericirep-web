import React from "react";
import truthyTest from "../../tests/truthyTest";
import { Image } from "./Image";
import test from "./test.svg";

it (
  "Image is truthy!",
  () => truthyTest(<Image src={test} />),
);
