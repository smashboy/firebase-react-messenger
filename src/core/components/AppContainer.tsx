import { css } from "@emotion/react";
import { useSelector } from "react-redux";
import { RootState } from "../store";

const AppContainer: React.FC = ({ children }) => {
  const threadMessageId = useSelector((state: RootState) => state.thread.message?.id);

  return (
    <div
      css={[
        {
          height: "100vh",
          display: "grid",
        },
        threadMessageId
          ? css`
              grid-template-columns: 300px auto 405px;
            `
          : css`
              grid-template-columns: 300px auto;
            `,
      ]}
    >
      {children}
    </div>
  );
};

export default AppContainer;
