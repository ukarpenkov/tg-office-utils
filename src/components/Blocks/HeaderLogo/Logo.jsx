import { Image } from "@mui/icons-material";
import { Avatar, ImageListItem } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import image from "./../../../img/logo/logo.svg";
export const Logo = () => {
  return (
    <div className="header-panel">
      <img src={image} alt="" width={"60px"} />
    </div>
  );
};
