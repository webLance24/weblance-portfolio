import { createContext, useContext } from "react";

interface ComponentsProps {
  hidden: boolean;
  setHidden: (hidden: boolean) => void;
  menu: boolean;
  setMenu: (menu: boolean) => void;
  selected: string;
  setSelected: (selected: string) => void;
  categorie: string;
  setCategorie: (categorie: string) => void;
  scrolled: boolean;
  setScrolled: (scrolled: boolean) => void;
  inputValue: string;
  setInputValue: (inputValue: string) => void;
  done: boolean;
  setDone: (done: boolean) => void;
  inputError: string;
  setInputError: (error: string) => void;
}

export const MyContext = createContext<ComponentsProps | null>(null);

export function Context() {
  const context = useContext(MyContext);
  return context;
}
