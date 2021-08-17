/** @jsxImportSource @emotion/react */
import { jsx } from "@emotion/react";
import Footer from "../../core/components/Footer";
import Header from "./components/Header";

const Conversation = () => {
  return (
    <div css={{ width: "100%", height: "100%", position: "relative" }}>
      <Header />
      <Footer />
    </div>
  );
};

export default Conversation;
