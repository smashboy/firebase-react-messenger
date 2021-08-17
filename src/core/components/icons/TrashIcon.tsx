import { useTheme } from "@emotion/react";
import { IconProps } from "./types";
import { getColor } from "./utils";

const TrashIcon: React.FC<IconProps> = ({ size = 17, color = "secondary" }) => {
  const theme = useTheme();

  const styleColor = getColor(color, theme);

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 17 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2.125 4.75H3.54167H14.875"
        stroke={styleColor}
        strokeOpacity="0.85"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M5.66675 4.74999V3.33332C5.66675 2.9576 5.816 2.59727 6.08168 2.33159C6.34736 2.06591 6.70769 1.91666 7.08342 1.91666H9.91675C10.2925 1.91666 10.6528 2.06591 10.9185 2.33159C11.1842 2.59727 11.3334 2.9576 11.3334 3.33332V4.74999M13.4584 4.74999V14.6667C13.4584 15.0424 13.3092 15.4027 13.0435 15.6684C12.7778 15.9341 12.4175 16.0833 12.0417 16.0833H4.95841C4.58269 16.0833 4.22236 15.9341 3.95668 15.6684C3.691 15.4027 3.54175 15.0424 3.54175 14.6667V4.74999H13.4584Z"
        stroke={styleColor}
        strokeOpacity="0.85"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7.08325 8.29166V12.5417"
        stroke={styleColor}
        strokeOpacity="0.85"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9.91675 8.29166V12.5417"
        stroke={styleColor}
        strokeOpacity="0.85"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
export default TrashIcon;
