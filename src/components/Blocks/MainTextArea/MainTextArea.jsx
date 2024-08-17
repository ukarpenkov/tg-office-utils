import { Button } from "@mui/material";
import TextIncreaseIcon from "@mui/icons-material/TextIncrease";
import TextDecreaseIcon from "@mui/icons-material/TextDecrease";
import FormatSizeIcon from "@mui/icons-material/FormatSize";
import FormatTextdirectionLToRIcon from "@mui/icons-material/FormatTextdirectionLToR";
import LanguageIcon from "@mui/icons-material/Language";
import AutorenewIcon from "@mui/icons-material/Autorenew";
import { useDispatch, useSelector } from "react-redux";
import {
  setCapitalize,
  setEditText,
  setIsSingleLine,
  setLowerCase,
  setResetModification,
  setTraslit,
  setUpperCase,
} from "../../../store/textSlice";
import { useState } from "react";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";

export const MainTextArea = () => {
  const dispatch = useDispatch();
  const text = useSelector((state) => state.text.text);
  const isUpperCase = useSelector((state) => state.text.isUpperCase);
  const isLowerCase = useSelector((state) => state.text.isLowerCase);
  const isSingleLine = useSelector((state) => state.text.isSingleLine);
  const isCapitalizeCase = useSelector((state) => state.text.isCapitalizeCase);
  const isTranslite = useSelector((state) => state.text.isTranslite);
  const [inputText, setInputText] = useState(text);

  return (
    <div className="main-area">
      <div className="input-textarea">
        <textarea
          className="main-text-area"
          onChange={(e) => {
            let newText = e.target.value;
            setInputText(newText);
            dispatch(setEditText(newText));
          }}
          defaultValue={text}
        />
      </div>
      <div className="main-buttons-group">
        <div className="main-buttonss">
          <Button
            variant="contained"
            onClick={() => dispatch(setIsSingleLine(text))}
          >
            <FormatTextdirectionLToRIcon
              className={isSingleLine ? "activeMod" : null}
            />
          </Button>
        </div>
        <div className="main-buttonss">
          <Button
            variant="contained"
            onClick={() => {
              dispatch(setUpperCase(text));
            }}
          >
            <TextIncreaseIcon className={isUpperCase ? "activeMod" : null} />
          </Button>
        </div>
        <div className="main-buttonss">
          <Button
            variant="contained"
            onClick={() => {
              dispatch(setLowerCase(text));
            }}
          >
            <TextDecreaseIcon className={isLowerCase ? "activeMod" : null} />
          </Button>
        </div>
        <div className="main-buttonss">
          <Button
            variant="contained"
            onClick={() => {
              dispatch(setCapitalize(text));
            }}
          >
            <FormatSizeIcon className={isCapitalizeCase ? "activeMod" : null} />
          </Button>
        </div>

        <div className="main-buttonss">
          <Button
            variant="contained"
            onClick={() => {
              dispatch(setTraslit(text));
            }}
          >
            <LanguageIcon className={isTranslite ? "activeMod" : null} />
          </Button>
        </div>
        <div className="main-buttonss">
          <Button
            variant="contained"
            onClick={() => {
              dispatch(setResetModification(inputText));
            }}
          >
            <AutorenewIcon />
          </Button>
        </div>
      </div>
      <div className="input-textarea">
        <textarea className="main-text-area" value={text} disabled></textarea>
        <div
          className="copyBtn"
          onClick={() => navigator.clipboard.writeText(text)}
        >
          <ContentCopyIcon />
        </div>
      </div>
    </div>
  );
};
