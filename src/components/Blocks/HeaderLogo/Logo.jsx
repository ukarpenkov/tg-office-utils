import { Image } from "@mui/icons-material";
import { Avatar, ImageListItem } from "@mui/material";
import image from "./../../../img/logo/logo.svg";
export const Logo = () => {
  return (
    <div>
      <img src={image} alt="" width={"120px"} />
    </div>
  );
};
