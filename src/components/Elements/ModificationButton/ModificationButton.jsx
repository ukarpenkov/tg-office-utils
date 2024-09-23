import { Button } from "@mui/material";

export const ModificationButton = ({ Component, func, activeCriteria }) => {
  return (
    <div className="main-buttonss">
      <Button variant="contained" onClick={func}>
        <Component className={activeCriteria ? "activeMod" : null} />
      </Button>
    </div>
  );
};
