import React, { useState, useEffect } from "react";

export const myContext = React.createContext();

const Provider = (props) => {
  const [isNavHidden, setIsNavHidden] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleIsHeaderVisible = () => {
      const currentScrollY = window.scrollY;
      const headerHeight = 74;

      if (currentScrollY > scrollY && currentScrollY > headerHeight) {
        setIsNavHidden(true);
      }
      if (currentScrollY < scrollY) {
        setIsNavHidden(false);
      }
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
