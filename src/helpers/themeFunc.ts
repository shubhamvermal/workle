export const toggleTheme = () => {
  if (document?.getElementById("addressbar-color")) {
    const d: any = document?.getElementById("addressbar-color");
    d.content = localStorage.theme === "dark" ? "#673ab6" : "#000000";
  }

  localStorage.theme = localStorage.theme === "dark" ? "light" : "dark";

  if (
    localStorage.theme === "dark" ||
    (!("theme" in localStorage) &&
      window.matchMedia("(prefers-color-scheme: dark)").matches)
  ) {
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");
  }
};
