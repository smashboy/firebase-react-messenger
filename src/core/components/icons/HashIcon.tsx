import { IconProps } from "./types";

const HashIcon: React.FC<IconProps> = ({ size = 15 }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 15 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2.5 5.625H12.5"
        stroke="white"
        strokeOpacity="0.85"
        strokeWidth="1.08333"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M2.5 9.375H12.5"
        stroke="white"
        strokeOpacity="0.85"
        strokeWidth="1.08333"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6.25 1.875L5 13.125"
        stroke="white"
        strokeOpacity="0.85"
        strokeWidth="1.08333"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10 1.875L8.75 13.125"
        stroke="white"
        strokeOpacity="0.85"
        strokeWidth="1.08333"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default HashIcon;
