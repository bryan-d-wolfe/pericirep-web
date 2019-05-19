import React from "react";
import Main from "../../Main/Main";
import "./FrontPage";
import "./FrontPage.css";

function FrontPage() {
  const text: string = "What's the magic word?";
  return (
    <div id="FrontPage">
      <Main title={text} />
    </div>
  );
}

export default FrontPage;
