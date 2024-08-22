import React, { createContext, useState } from "react";
import { SpanishLanguage } from "../data/data";
import { LanguageInterface } from "../interfaces/interfaces";





type contextProps = {
  languaje: LanguageInterface
  setLanguaje: React.Dispatch<React.SetStateAction<LanguageInterface>>;
}

export const LanguajeContext = createContext<contextProps>({} as contextProps);

interface props {
  children: JSX.Element | JSX.Element[]
}

export const LanguajeProvider = ({ children }: props) => {

  const [languaje, setLanguaje] = useState<LanguageInterface>(SpanishLanguage);


  return (
    <LanguajeContext.Provider value={{ languaje, setLanguaje }}>
      {children}
    </LanguajeContext.Provider>
  );
};







/*
export const LanguajeContext = createContext();

export const LanguajeProvider = ({ children }) => {
  const [languaje, setLanguaje] = useState(SpanishLanguage);

  const changeLanguaje = () => {
    if (languaje.lang === "en") {
      document.documentElement.lang = "es";
      setLanguaje(SpanishLanguage);
    } else {
      document.documentElement.lang = "en";
      setLanguaje(EnglishLanguage);
    }
  };

  return (
    <LanguajeContext.Provider value={{ languaje, changeLanguaje }}>
      {children}
    </LanguajeContext.Provider>
  );
};
*/