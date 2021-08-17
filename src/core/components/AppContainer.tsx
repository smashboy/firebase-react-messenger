/** @jsxImportSource @emotion/react */
import { jsx } from "@emotion/react";

const AppContainer: React.FC = ({ children }) => {
  return (
    <div
      css={{
        height: "100vh",
      }}
    >
      {children}
    </div>
  );
};

export default AppContainer;
