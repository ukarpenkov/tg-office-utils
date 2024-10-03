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
import { Icon1 } from "../HeaderLogo/icon1";
import { ModificationButton } from "../../Elements/ModificationButton/ModificationButton";

export const MainTextArea = () => {
  const dispatch = useDispatch();
  const text = useSelector((state) => state.text.text);
  const isUpperCase = useSelector((state) => state.text.isUpperCase);
  const isLowerCase = useSelector((state) => state.text.isLowerCase);
  const isSingleLine = useSelector((state) => state.text.isSingleLine);
  const isReplaceModevisible = useSelector(
    (state) => state.text.isReplaceModevisible
  );
  const isReplaceMode = useSelector((state) => state.text.isReplaceMode);
  const isAddMode = useSelector((state) => state.text.isAddMode);
  const isCapitalizeCase = useSelector((state) => state.text.isCapitalizeCase);
  const isTranslite = useSelector((state) => state.text.isTranslite);
  const fromText = useSelector((state) => state.text.replaceTextFrom);
  const toText = useSelector((state) => state.text.replaceTextTo);
  const [inputText, setInputText] = useState(text);
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
        <ModificationButton
          Component={FormatTextdirectionLToRIcon}
          func={() => dispatch(setIsSingleLine(text))}
          activeCriteria={isSingleLine}
        />
        <ModificationButton
          Component={TextIncreaseIcon}
          func={() => dispatch(setUpperCase(text))}
          activeCriteria={isUpperCase}
        />
        <ModificationButton
          Component={TextDecreaseIcon}
          func={() => dispatch(setLowerCase(text))}
          activeCriteria={isLowerCase}
        />
        <ModificationButton
          Component={FormatSizeIcon}
          func={() => dispatch(setCapitalize(text))}
          activeCriteria={isCapitalizeCase}
        />
        <ModificationButton
          Component={LanguageIcon}
          func={() => dispatch(setTraslit(text))}
          activeCriteria={isTranslite}
        />
        <ModificationButton
          Component={AutorenewIcon}
          func={() => {
            dispatch(setResetModification(inputText));
            setAddText("");
          }}
          activeCriteria={""}
        />
      </div>

      <div className="main-buttons-group  main-buttonss-second-group">
        <ModificationButton
          Component={EditIcon}
          func={() => dispatch(setReplaceMode())}
          activeCriteria={isReplaceMode}
        />
        <div
          className={
            !isReplaceModevisible ? "show main-buttonss" : "hide main-buttonss"
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
            !isReplaceModevisible ? "show main-buttonss" : "hide main-buttonss"
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
            !isReplaceModevisible ? "show main-buttonss" : "hide main-buttonss"
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
        <ModificationButton
          Component={AddIcon}
          func={() => dispatch(setAddMode(text))}
          activeCriteria={isAddMode}
        />
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
            isAddMode || isReplaceModevisible
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
            isAddMode || isReplaceModevisible
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
            isAddMode || isReplaceModevisible
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
          // onClick={() => window.Telegram.WebApp.sendData("HELLO")}
        >
          <ContentCopyIcon />
        </div>
      </div>
    </div>
  );
};
