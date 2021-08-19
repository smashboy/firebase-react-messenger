import { useSelector } from "react-redux";
import Header from "../../../core/components/Header";
import Typography from "../../../core/components/Typography";
import { RootState } from "../../../core/store";

const RepliesCounter = () => {
  const repliesCounter = useSelector((state: RootState) => state.thread.message!.repliesCounter);

  return (
    <Header>
      <Typography color="additional" fontStyle="light">
        {repliesCounter === 0 || repliesCounter > 1
          ? `${repliesCounter} replies`
          : `${repliesCounter} reply`}
      </Typography>
    </Header>
  );
};

export default RepliesCounter;
