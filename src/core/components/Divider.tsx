export type DividerProps = {
  orientation?: "horizontal" | "vertical";
};

const Divider: React.FC<DividerProps> = ({ orientation = "horizontal" }) => {
  return (
    <hr
      css={(theme) => ({
        border: "none",
        height: orientation === "horizontal" ? "1px" : "100%",
        width: orientation === "horizontal" ? undefined : "1px",
        backgroundColor: theme.colors.dark.additional,
        margin: 0,
      })}
    />
  );
};

export default Divider;
