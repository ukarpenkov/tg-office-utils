import { createSlice } from "@reduxjs/toolkit";

const textSlise = createSlice({
  name: "text",
  initialState: {
    text: "Вставь свой текст для форматирования",
    replaceTextFrom: "",
    replaceTextTo: "",
    isSingleLine: false,
    isLowerCase: false,
    isUpperCase: false,
    isCapitalizeCase: false,
    isTranslite: false,
    isReplaceMode: false,
    isAddMode: false,
  },
  reducers: {
    setEditText(state, action) {
      if (state.isLowerCase) {
        state.text = action.payload.toLowerCase();
      }
      if (state.isUpperCase) {
        state.text = action.payload.toUpperCase();
      }
      if (state.isSingleLine) {
        state.text = convertToSingleLine(action.payload);
      }
      if (state.isCapitalizeCase) {
        state.text = capitalizeFirstAndAfterDot(action.payload.toLowerCase());
      }
      if (state.isTranslite) {
        state.text = transliterateToCyrillic(action.payload);
      }
      if (state.replaceTextFrom !== "") {
        state.text = replaceAllCharacters(
          action.payload,
          state.replaceTextFrom,
          state.replaceTextTo
        );
      }
      if (state.isSingleLine && state.isUpperCase) {
        state.text = convertToSingleLine(action.payload).toUpperCase();
      }
      if (state.isTranslite && state.isUpperCase) {
        state.text = transliterateToCyrillic(action.payload).toUpperCase();
      }
      if (state.replaceTextFrom !== "" && state.isUpperCase) {
        state.text = replaceAllCharacters(
          action.payload,
          state.replaceTextFrom,
          state.replaceTextTo
        ).toUpperCase();
      }

      if (state.isSingleLine && state.isLowerCase) {
        state.text = convertToSingleLine(action.payload).toLowerCase();
      }
      if (state.isTranslite && state.isLowerCase) {
        state.text = transliterateToCyrillic(action.payload).toLowerCase();
      }
      if (state.replaceTextFrom !== "" && state.isLowerCase) {
        state.text = replaceAllCharacters(
          action.payload.toLowerCase(),
          state.replaceTextFrom,
          state.replaceTextTo
        ).toLowerCase();
      }
      if (state.isSingleLine && state.isCapitalizeCase) {
        state.text = capitalizeFirstAndAfterDot(
          convertToSingleLine(action.payload.toLowerCase())
        );
      }
      if (state.isTranslite && state.isCapitalizeCase) {
        state.text = capitalizeFirstAndAfterDot(
          transliterateToCyrillic(action.payload.toLowerCase())
        );
      }
      if (state.replaceTextFrom !== "" && state.isCapitalizeCase) {
        state.text = capitalizeFirstAndAfterDot(
          replaceAllCharacters(
            action.payload.toLowerCase(),
            state.replaceTextFrom,
            state.replaceTextTo
          )
        );
      }
      if (state.isTranslite && state.isSingleLine) {
        state.text = convertToSingleLine(
          transliterateToCyrillic(action.payload)
        );
      }
      if (state.isSingleLine && state.replaceTextFrom !== "") {
        state.text = convertToSingleLine(action.payload);
        state.text = replaceAllCharacters(
          state.text,
          state.replaceTextFrom,
          state.replaceTextTo
        );
      }
      if (
        state.isSingleLine &&
        state.isUpperCase &&
        state.replaceTextFrom !== ""
      ) {
        state.text = convertToSingleLine(
          replaceAllCharacters(
            action.payload,
            state.replaceTextFrom,
            state.replaceTextTo
          ).toUpperCase()
        );
      }
      if (
        !state.isUpperCase &&
        !state.isLowerCase &&
        !state.isSingleLine &&
        !state.isCapitalizeCase &&
        state.replaceTextFrom === "" &&
        !state.isTranslite
      ) {
        state.text = action.payload;
      }

      return state;
    },
    setEditFromText(state, action) {
      state.replaceTextFrom = action.payload;
      if (state.replaceTextFrom !== "") {
        state.isReplaceMode = true;
      }
      return state;
    },
    setEditFromTo(state, action) {
      state.replaceTextTo = action.payload;
      return state;
    },
    setUpperCase(state) {
      state.text = state.text.toUpperCase();
      state.isLowerCase = false;
      state.isCapitalizeCase = false;
      state.isUpperCase = true;
      return state;
    },
    setLowerCase(state) {
      state.text = state.text.toLowerCase();
      state.isUpperCase = false;
      state.isCapitalizeCase = false;
      state.isLowerCase = true;
      return state;
    },
    setIsSingleLine(state, action) {
      state.isSingleLine = !state.isSingleLine;
      if (state.isSingleLine) {
        state.text = convertToSingleLine(state.text);
      }
      if (state.isSingleLine && state.replaceTextFrom !== "") {
        state.text = replaceAllCharacters(
          convertToSingleLine(action.payload),
          state.replaceTextFrom,
          state.replaceTextTo
        );
      }
      if (!state.isSingleLine) {
        state.text = action.payload;
      }
      return state;
    },
    setCapitalize(state) {
      state.isLowerCase = false;
      state.isUpperCase = false;
      state.isCapitalizeCase = true;
      state.text = capitalizeFirstAndAfterDot(state.text.toLowerCase());
    },
    setTraslit(state) {
      state.isTranslite = true;
      state.isReplaceMode = false;
      state.replaceTextFrom = "";
      state.replaceTextTo = "";
      state.text = transliterateToCyrillic(state.text);
    },
    setResetModification(state, action) {
      state.isLowerCase = false;
      state.isUpperCase = false;
      state.isCapitalizeCase = false;
      state.isSingleLine = false;
      state.isTranslite = false;
      state.isReplaceMode = false;
      state.isAddMode = false;
      state.text = action.payload;
      state.replaceTextFrom = "";
      state.replaceTextTo = "";
      return state;
    },
    setCleanTextFiled(state) {
      state.text = "";
      state.replaceTextFrom = "";
      state.replaceTextTo = "";
      return state;
    },
    setReplaceMode(state, action) {
      state.isAddMode = false;
      state.isTranslite = false;
      state.isReplaceMode = !state.isReplaceMode;
      return state;
    },
    setReplaceText(state, action) {
      state.text = replaceAllCharacters(
        action.payload.text,
        action.payload.fromText,
        action.payload.toText
      );
      return state;
    },
    setTrimText(state, action) {
      state.text = trimMultilineText(state.text);
      return state;
    },
    setAddMode(state, action) {
      state.isReplaceMode = false;
      state.isAddMode = !state.isAddMode;
      return state;
    },
    setAddStartText(state, action) {
      state.text = addSymbolToStartOfLines(
        action.payload.text,
        action.payload.addText
      );
      return state;
    },
    setAddEndText(state, action) {
      state.text = addSymbolToEndOfLines(
        action.payload.text,
        action.payload.addText
      );
      return state;
    },
  },
});

export default textSlise.reducer;
export const {
  setUpperCase,
  setEditText,
  setLowerCase,
  setIsSingleLine,
  setCapitalize,
  setTraslit,
  setResetModification,
  setCleanTextFiled,
  setReplaceText,
  setReplaceMode,
  setTrimText,
  setAddMode,
  setAddStartText,
  setAddEndText,
  setEditFromText,
  setEditFromTo,
} = textSlise.actions;

export function convertToSingleLine(multilineText) {
  // Заменяем все переводы строки на пробелы
  const singleLineText = multilineText.replace(/\n/g, " ");

  // Заменяем повторяющиеся пробелы на один
  return singleLineText.replace(/\s+/g, " ");
}

function capitalizeFirstAndAfterDot(str) {
  return str
    .split(/(\. |\.)/)
    .map((part, index) => {
      // Если это не разделитель(точка), то преобразуем
      if (index === 0 || part.trim().length > 0) {
        return part.charAt(0).toUpperCase() + part.slice(1);
      }
      return part; // Возвращаем точки или пробелы без изменений
    })
    .join("");
}

function transliterateToCyrillic(text) {
  const keyboardMapping = {
    // Строчные буквы
    q: "й",
    w: "ц",
    e: "у",
    r: "к",
    t: "е",
    y: "н",
    u: "г",
    i: "ш",
    o: "щ",
    p: "з",
    a: "ф",
    s: "ы",
    d: "в",
    f: "а",
    g: "п",
    h: "р",
    j: "о",
    k: "л",
    l: "д",
    z: "я",
    x: "ч",
    c: "с",
    v: "м",
    b: "и",
    n: "т",
    m: "ь",

    // Заглавные буквы
    Q: "Й",
    W: "Ц",
    E: "У",
    R: "К",
    T: "Е",
    Y: "Н",
    U: "Г",
    I: "Ш",
    O: "Щ",
    P: "З",
    A: "Ф",
    S: "Ы",
    D: "В",
    F: "А",
    G: "П",
    H: "Р",
    J: "О",
    K: "Л",
    L: "Д",
    Z: "Я",
    X: "Ч",
    C: "С",
    V: "М",
    B: "И",
    N: "Т",
    M: "Ь",

    // cпец-символы
    "@": '"',
    "#": "№",
    $: ";",
    "^": ":",
    "&": "?",
    "[": "х",
    "{": "Х",
    "]": "ъ",
    "}": "Ъ",
    "?": ",",
    ",": ".",
    ".": "ю",
    "/": ".",
    ">": "Ю",
    "`": "ё",
    "~": "Ё",
    ":": "Ж",
    ";": "ж",
  };

  return text
    .split("")
    .map((char) => keyboardMapping[char] || char)
    .join("");
}

function replaceAllCharacters(text, oldChar, newChar) {
  return text.split(oldChar).join(newChar);
}

function trimMultilineText(text) {
  return text
    .split("\n")
    .map((line) => line.trim())
    .join("\n");
}

function addSymbolToStartOfLines(text, symbol) {
  return text
    .split("\n")
    .map((line) => symbol + line)
    .join("\n");
}
function addSymbolToEndOfLines(text, symbol) {
  return text
    .split("\n")
    .map((line) => line + symbol)
    .join("\n");
}

// Пример использования
const originalText = "hello world";
const newText = replaceAllCharacters(originalText, "o", "a");
console.log(newText); // "hella warld"
