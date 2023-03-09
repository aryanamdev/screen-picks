import React, { createContext, useState } from "react";

export const movieContext = createContext();

export default function MovieContextProvider({ children }) {
  const [content, setContent] = useState([]);

  const [skeleton, setSkeleton] = useState(true);

  const [modalInfo, setModalInfo] = useState([]);

  const [modalDisplay, setModalDisplay] = useState(false);

  const setModalValue = (content) => {
    setModalInfo(content);
  };

  return (
    <movieContext.Provider
      value={{
        content,
        setContent,
        skeleton,
        setSkeleton,
        modalInfo,
        setModalInfo,
        modalDisplay,
        setModalDisplay,
      }}
    >
      {children}
    </movieContext.Provider>
  );
}
