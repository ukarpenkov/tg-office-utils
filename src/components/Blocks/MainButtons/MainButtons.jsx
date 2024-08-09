import DoubleArrowIcon from "@mui/icons-material/DoubleArrow";
import { Button, FormControlLabel, Switch } from "@mui/material";
import TextRotateUpOutlinedIcon from "@mui/icons-material/TextRotateUpOutlined";
import TextRotationDownOutlinedIcon from "@mui/icons-material/TextRotationDownOutlined";
export const MainButtons = () => {
  return (
    <div className="main-buttons-group">
      <div className="main-buttonss">
        <FormControlLabel control={<Switch defaultChecked />} label="формат" />
      </div>
      <div className="main-buttonss">
        <Button variant="contained">
          <TextRotateUpOutlinedIcon />
        </Button>
      </div>
      <div className="main-buttonss">
        <Button variant="contained">
          <TextRotationDownOutlinedIcon />
        </Button>
      </div>
      <div className="main-buttonss">
        <Button variant="contained">
          <TextRotationDownOutlinedIcon />
        </Button>
      </div>
      <div className="main-buttonss">
        <Button variant="contained">
          <TextRotationDownOutlinedIcon />
        </Button>
      </div>
      <div className="main-buttonss">
        <Button variant="contained">
          <TextRotationDownOutlinedIcon />
        </Button>
      </div>
    </div>
  );
};
