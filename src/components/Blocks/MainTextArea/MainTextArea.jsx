import { Button, TextField } from "@mui/material";
import TextIncreaseIcon from "@mui/icons-material/TextIncrease";
import TextDecreaseIcon from "@mui/icons-material/TextDecrease";
import FormatSizeIcon from "@mui/icons-material/FormatSize";
import FormatTextdirectionLToRIcon from "@mui/icons-material/FormatTextdirectionLToR";
import LanguageIcon from "@mui/icons-material/Language";
import EditIcon from "@mui/icons-material/Edit";
import CleaningServicesIcon from "@mui/icons-material/CleaningServices";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import AutorenewIcon from "@mui/icons-material/Autorenew";
import { useDispatch, useSelector } from "react-redux";
import {
  setCapitalize,
  setCleanTextFiled,
  setEditText,
  setIsSingleLine,
  setLowerCase,
  setReplaceText,
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
  const [fromText, setFromText] = useState("");
  const [toText, setToText] = useState("");
  const [isFullTextArea, setFullTextArea] = useState(false);

  return (
    <div className="main-area">
      <div className="input-textarea">
        <textarea
          className={isFullTextArea ? "main-textarea-top " : "main-text-area"}
          onChange={(e) => {
            let newText = e.target.value;
            setInputText(newText);
            dispatch(setEditText(newText));
          }}
          value={inputText}
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
              setToText("");
              setFromText("");
            }}
          >
            <AutorenewIcon />
          </Button>
        </div>
      </div>

      <div className="main-buttons-group  main-buttonss-second-group">
        <div className="main-buttonss">
          <input
            className="replaceInput"
            placeholder="Заменить"
            onChange={(e) => {
              let newText = e.target.value;
              setFromText(newText);
            }}
            value={fromText}
          ></input>
        </div>
        <div className="main-buttonss">
          <Button
            variant="contained"
            onClick={() => dispatch(setReplaceText({ text, fromText, toText }))}
          >
            <EditIcon />
          </Button>
        </div>

        <div className="main-buttonss">
          <input
            className="replaceInput"
            placeholder="На"
            onChange={(e) => {
              let newText = e.target.value;
              setToText(newText);
            }}
            value={toText}
          ></input>
        </div>
        <div
          className={
            isFullTextArea ? "show main-buttonss" : "hide main-buttonss"
          }
        >
          <Button
            variant="contained"
            onClick={() => {
              setFullTextArea(true);
            }}
          >
            <ArrowDownwardIcon />
          </Button>
        </div>
        <div
          className={
            isFullTextArea ? "hide main-buttonss" : "show main-buttonss"
          }
        >
          <Button
            variant="contained"
            onClick={() => {
              setFullTextArea(false);
            }}
          >
            <ArrowUpwardIcon />
          </Button>
        </div>
        <div className="main-buttonss">
          <Button
            variant="contained"
            onClick={() => {
              setInputText("");
              setToText("");
              setFromText("");
              dispatch(setCleanTextFiled());
            }}
          >
            <CleaningServicesIcon />
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
