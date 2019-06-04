import React from "react";
import Main from "../../Main/Main";
import "./FrontPage";
import "./FrontPage.css";

function condition(text: string) {
  return text === "PeRiCiReP";
}

function FrontPage() {
  const title: string = "What's the magic word?";
  return (
    <div id="FrontPage">
      <Main title={title} condition={condition} />
    </div>
  );
}

export default FrontPage;
