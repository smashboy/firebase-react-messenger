/** @jsxImportSource @emotion/react */
import { jsx } from "@emotion/react";
import Divider from "../../core/components/Divider";
import Footer from "../../core/components/Footer";
import Header from "./components/Header";
import MessagesList from "./components/MessagesList";
import RepliesCounter from "./components/RepliesCounter";
import ThreadMessage from "./components/ThreadMessage";

const Thread = () => {
  return (
    <div css={{ width: "100%", height: "100%", display: "grid", gridTemplateColumns: "1px 405px" }}>
      <Divider orientation="vertical" />
      <div css={{ width: "99%", height: "100%" }}>
        <Header />
        <ThreadMessage />
        <RepliesCounter />
        <div
          css={{
            width: "100%",
            height: "calc(100% - 235px)",
            position: "relative",
          }}
        >
          <MessagesList />
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Thread;
