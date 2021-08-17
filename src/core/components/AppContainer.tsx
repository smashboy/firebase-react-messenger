/** @jsxImportSource @emotion/react */
import { jsx } from "@emotion/react";

const AppContainer: React.FC = ({ children }) => {
  return (
    <div
      css={{
        height: "100vh",
        display: "grid",
        gridTemplateColumns: "300px 1fr",
      }}
    >
      {children}
    </div>
  );
};

export default AppContainer;
