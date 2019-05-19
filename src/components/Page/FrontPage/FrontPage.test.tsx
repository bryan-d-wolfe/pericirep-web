import React from "react";
import snapshotTest from "../../../tests/snapshotTest";
import FrontPage from "./FrontPage";

test(
  "FrontPage renders correctly",
  () => snapshotTest(<FrontPage />),
);
