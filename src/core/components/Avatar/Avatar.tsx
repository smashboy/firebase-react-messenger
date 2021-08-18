/** @jsxImportSource @emotion/react */
import { jsx } from "@emotion/react";
import { getCssProps } from "../../utils";
import { avatarSizeStyle, avatarStaticStyles } from "./Avatar.styles";
import { AvatarProps } from "./Avatar.types";

const Avatar: React.FC<AvatarProps> = ({ size = "medium", alt, css, ...otherProps }) => {
  return (
    <img
      // @ts-ignore
      css={(theme) => [avatarSizeStyle(size), avatarStaticStyles, getCssProps(theme, css)]}
      alt={alt || ""}
      {...otherProps}
    />
  );
};

export default Avatar;
