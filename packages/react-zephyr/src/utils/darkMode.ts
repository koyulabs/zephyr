import {useState, useEffect } from "react";
import {tw as twind} from "twind";

const useDarkMode = () => {
  const [darkMode, setDarkMode] = useState<boolean>();

  const saveDark = (): void => {
    document.documentElement.classList.add("dark");
    localStorage.setItem("darkMode", "true");
    // setDarkMode(true);
  };

  const saveLight = (): void => {
    document.documentElement.classList.remove("dark");
    localStorage.setItem("darkMode", "false");
    // setDarkMode(false);
  };

  const setModePreference = (): boolean => {
    if(typeof window !== 'undefined') {
      if (localStorage.getItem("darkMode") === null) {
        window.matchMedia("(prefers-color-scheme: dark)").matches
          ? setDarkMode(true)
          : setDarkMode(false);
      } else {
        localStorage.getItem("darkMode") === "true" ? setDarkMode(true) : setDarkMode(false);
      }
    }
    return darkMode;
  };

  useEffect(() => {
    setModePreference()
  }, [])

  useEffect(() => {
    if(darkMode === true) saveDark()
    if(darkMode === false) saveLight();
  }, [darkMode])

  return { darkMode, setDarkMode, setModePreference}
}

export default useDarkMode;