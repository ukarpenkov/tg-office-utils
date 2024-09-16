import { Button } from "@mui/material";
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
import SyncAltIcon from "@mui/icons-material/SyncAlt";
import ContentCutIcon from "@mui/icons-material/ContentCut";
import AddIcon from "@mui/icons-material/Add";
import FirstPageIcon from "@mui/icons-material/FirstPage";
import LastPageIcon from "@mui/icons-material/LastPage";
import BalanceIcon from "@mui/icons-material/Balance";
import { useDispatch, useSelector } from "react-redux";
import {
  setAddEndText,
  setAddMode,
  setAddStartText,
  setCapitalize,
  setCleanTextFiled,
  setEditFromText,
  setEditFromTo,
  setEditText,
  setIsSingleLine,
  setLowerCase,
  setReplaceMode,
  setReplaceText,
  setResetModification,
  setTraslit,
  setTrimText,
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
  const isReplaceMode = useSelector((state) => state.text.isReplaceMode);
  const isAddMode = useSelector((state) => state.text.isAddMode);
  const isCapitalizeCase = useSelector((state) => state.text.isCapitalizeCase);
  const isTranslite = useSelector((state) => state.text.isTranslite);
  const fromText = useSelector((state) => state.text.replaceTextFrom);
  const toText = useSelector((state) => state.text.replaceTextTo);
  const [inputText, setInputText] = useState(text);
  // const [fromText, setFromText] = useState("");
  // const [toText, setEditFromTo] = useState("");
  const [addText, setAddText] = useState("");
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
          onClick={() => {
            if (inputText === "Вставь свой текст для форматирования") {
              setInputText("");
              dispatch(setEditText(""));
            }
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
              setAddText("");
            }}
          >
            <AutorenewIcon />
          </Button>
        </div>
      </div>

      <div className="main-buttons-group  main-buttonss-second-group">
        <div className="main-buttonss">
          <Button
            variant="contained"
            onClick={() => {
              dispatch(setReplaceMode());
            }}
          >
            <EditIcon className={isReplaceMode ? "activeMod" : null} />
          </Button>
        </div>

        <div
          className={
            !isReplaceMode ? "show main-buttonss" : "hide main-buttonss"
          }
        >
          <input
            className="replaceInput"
            placeholder="Заменить"
            onChange={(e) => {
              let newText = e.target.value;
              dispatch(setEditFromText(newText));
            }}
            value={fromText}
          ></input>
        </div>

        <div
          className={
            !isReplaceMode ? "show main-buttonss" : "hide main-buttonss"
          }
        >
          <Button
            variant="contained"
            onClick={() => {
              dispatch(setReplaceText({ text, fromText, toText }));
            }}
          >
            <SyncAltIcon />
          </Button>
        </div>

        <div
          className={
            !isReplaceMode ? "show main-buttonss" : "hide main-buttonss"
          }
        >
          <input
            className="replaceInput"
            placeholder="На"
            onChange={(e) => {
              let newText = e.target.value;
              dispatch(setEditFromTo(newText));
            }}
            value={toText}
          ></input>
        </div>
        <div className="main-buttonss">
          <Button
            variant="contained"
            onClick={() => {
              dispatch(setAddMode(text));
            }}
          >
            <AddIcon className={isAddMode ? "activeMod" : null} />
          </Button>
        </div>
        <div
          className={!isAddMode ? "show main-buttonss" : "hide main-buttonss"}
        >
          <Button
            variant="contained"
            onClick={() => {
              dispatch(setAddStartText({ text, addText }));
            }}
          >
            <FirstPageIcon />
          </Button>
        </div>
        <div
          className={!isAddMode ? "show main-buttonss" : "hide main-buttonss"}
        >
          <input
            className="replaceInput"
            placeholder="Добавить"
            onChange={(e) => {
              let newText = e.target.value;
              setAddText(newText);
            }}
            value={addText}
          ></input>
        </div>
        <div
          className={!isAddMode ? "show main-buttonss" : "hide main-buttonss"}
        >
          <Button
            variant="contained"
            onClick={() => {
              dispatch(setAddEndText({ text, addText }));
            }}
          >
            <LastPageIcon />
          </Button>
        </div>
        <div
          className={
            isAddMode || isReplaceMode
              ? "show main-buttonss"
              : "hide main-buttonss"
          }
        >
          <Button
            variant="contained"
            onClick={() => {
              dispatch(setTrimText(text));
            }}
          >
            <ContentCutIcon />
          </Button>
        </div>
        <div
          className={
            isAddMode || isReplaceMode
              ? "show main-buttonss"
              : "hide main-buttonss"
          }
        >
          <Button
            variant="contained"
            onClick={() => {
              setInputText(text);
            }}
          >
            <BalanceIcon />
          </Button>
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

        <div
          className={
            isAddMode || isReplaceMode
              ? "show main-buttonss"
              : "hide main-buttonss"
          }
        >
          <Button
            variant="contained"
            onClick={() => {
              setInputText("");
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
