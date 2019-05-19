import React from "react";
import truthyTest from "../../../tests/truthyTest";
import { Image } from "../Image";
import joker from "./joker.svg";

it (
  "Image is truthy!",
  () => truthyTest(<Image src={joker} />),
);
