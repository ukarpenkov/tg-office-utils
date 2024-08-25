import { createSlice } from "@reduxjs/toolkit";

const textSlise = createSlice({
  name: "text",
  initialState: {
    text: "Вставь свой текст для форматирования",
    isSingleLine: false,
    isLowerCase: false,
    isUpperCase: false,
    isCapitalizeCase: false,
    isTranslite: false,
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
      if (state.isSingleLine && state.isUpperCase) {
        state.text = convertToSingleLine(action.payload).toUpperCase();
      }
      if (state.isSingleLine && state.isLowerCase) {
        state.text = convertToSingleLine(action.payload).toLowerCase();
      }
      if (state.isSingleLine && state.isCapitalizeCase) {
        state.text = capitalizeFirstAndAfterDot(
          convertToSingleLine(action.payload.toLowerCase())
        );
      }
      if (
        !state.isUpperCase &&
        !state.isLowerCase &&
        !state.isSingleLine &&
        !state.isCapitalizeCase
      ) {
        state.text = action.payload;
      }
      if (state.isTranslite) {
        state.text = transliterateToCyrillic(action.payload);
      }
      if (state.isTranslite && state.isUpperCase) {
        state.text = transliterateToCyrillic(action.payload).toUpperCase();
      }
      if (state.isTranslite && state.isLowerCase) {
        state.text = transliterateToCyrillic(action.payload).toLowerCase();
      }
      if (state.isTranslite && state.isCapitalizeCase) {
        state.text = capitalizeFirstAndAfterDot(
          transliterateToCyrillic(action.payload.toLowerCase())
        );
      }

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
      state.text = transliterateToCyrillic(state.text);
    },
    setResetModification(state, action) {
      state.isLowerCase = false;
      state.isUpperCase = false;
      state.isCapitalizeCase = false;
      state.isSingleLine = false;
      state.isTranslite = false;
      state.text = action.payload;
      return state;
    },
    setCleanTextFiled(state) {
      state.text = "";
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

// Пример использования
const originalText = "hello world";
const newText = replaceAllCharacters(originalText, "o", "a");
console.log(newText); // "hella warld"
