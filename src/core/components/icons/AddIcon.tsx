import { IconProps } from "./types";

const AddIcon: React.FC<IconProps> = ({ size = 17 }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 17 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8.5 3.54167V13.4583"
        stroke="white"
        strokeOpacity="0.85"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M3.54169 8.5H13.4584"
        stroke="white"
        strokeOpacity="0.85"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default AddIcon;
