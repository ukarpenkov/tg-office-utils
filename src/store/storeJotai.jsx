import { atom } from "jotai";

export const textAtom = atom("hello");

const convertToSingleLine = (multilineText) => {
  // Заменяем все переводы строки на пробелы
  const singleLineText = multilineText.replace(/\n/g, " ");

  // Заменяем повторяющиеся пробелы на один
  return singleLineText.replace(/\s+/g, " ");
};

export const uppercaseAtom = atom((get) => get(textAtom).toUpperCase());
export const lowercaseAtom = atom((get) => get(textAtom).toLowerCase());
export const singleLineAtom = atom((get) => convertToSingleLine(get(textAtom)));
