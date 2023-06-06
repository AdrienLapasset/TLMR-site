import React, { useState, useEffect } from "react";

export const myContext = React.createContext();

const Provider = (props) => {
  const [isNavHidden, setIsNavHidden] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleIsHeaderVisible = () => {
      const currentScrollY = window.scrollY;
      currentScrollY > scrollY + 10 && setIsNavHidden(true);
      currentScrollY < scrollY - 10 && setIsNavHidden(false);
      setScrollY(currentScrollY);
    };
    window.addEventListener("scroll", handleIsHeaderVisible);
    return () => {
      window.removeEventListener("scroll", handleIsHeaderVisible);
    };
  }, [scrollY]);
  return (
    <myContext.Provider
      value={{
        isNavHidden,
      }}
    >
      {props.children}
    </myContext.Provider>
  );
};

const thisProvider = ({ element }) => <Provider>{element}</Provider>;

export default thisProvider;