import { useRef, useState } from "react";
import IconMoon from "./icons/IconMoon";
import IconSun from "./icons/IconSun";
import { useEffect } from "react";

const inicialStateDarkMode =
  localStorage.getItem("theme") === "dark";
  /* localStorage.getItem("theme") === "dark" ? true : false; */

const Header = () => {
  //false=light true=dark
  const [darkMode, setDarkmode] = useState(inicialStateDarkMode);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <header className="container mx-auto px-4 pt-8">
      <div className="flex justify-between">
        <h1 className="text-3xl font-semibold uppercase tracking-[0.3em] text-white ">
          Todo
        </h1>
        <button onClick={() => setDarkmode(!darkMode)}>
          {darkMode ? <IconSun /> : <IconMoon />}
        </button>
      </div>
    </header>
  );
};

export default Header;
