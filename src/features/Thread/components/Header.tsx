/** @jsxImportSource @emotion/react */
import { jsx } from "@emotion/react";
import { useDispatch } from "react-redux";
import Button from "../../../core/components/Button";
import Header from "../../../core/components/Header";
import CloseIcon from "../../../core/components/icons/CloseIcon";
import Typography from "../../../core/components/Typography";
import { resetThread } from "../store/threadSlice";

const ThreadHeader = () => {
  const dispatch = useDispatch();

  const handleCloseThread = () => dispatch(resetThread());

  return (
    <Header>
      <div css={{ display: "flex", flexGrow: 1, alignItems: "center" }}>
        <Typography size={18} color="primary">
          Thread
        </Typography>
      </div>
      <Button onClick={handleCloseThread} size="small" variant="text" css={{ marginTop: "6px" }}>
        <CloseIcon />
      </Button>
    </Header>
  );
};

export default ThreadHeader;
