import { useTheme } from "@emotion/react";
import { IconProps } from "./types";
import { getColor } from "./utils";

const SendIcon: React.FC<IconProps> = ({ size = 30, color = "additional" }) => {
  const theme = useTheme();

  const styleColor = getColor(color, theme);

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 29 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0)">
        <path
          d="M26.285 15H13.3214"
          stroke={styleColor}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M26.2851 15L10.3752 22.6603L13.3215 15L10.3752 7.33966L26.2851 15Z"
          stroke={styleColor}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0">
          <rect
            width="20"
            height="20"
            fill="white"
            transform="translate(14.5 0.857849) rotate(45)"
          />
        </clipPath>
      </defs>
    </svg>
  );
};

export default SendIcon;
