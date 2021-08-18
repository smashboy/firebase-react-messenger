import { useTheme } from "@emotion/react";
import { IconProps } from "./types";
import { getColor } from "./utils";

const CloseIcon: React.FC<IconProps> = ({ size = 19, color = "additional" }) => {
  const theme = useTheme();

  const styleColor = getColor(color, theme);

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 19 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M14.25 5.25L4.75 14.75"
        stroke={styleColor}
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M4.75 5.25L14.25 14.75"
        stroke={styleColor}
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default CloseIcon;
