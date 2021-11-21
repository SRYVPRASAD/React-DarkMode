import { useState } from "react";
import { ThemeProvider } from "styled-components";
import Splash from "./Components/SplashScreen";

const LightTheme = {
  pageBackground: "white",
  titleColor: "#dc4345",
  tagLineColor: "#a234a",
};
const DarkTheme = {
  pageBackground: "#282c36",
  titleColor: "lightpink",
  tagLineColor: "lavender",
};
const themes = { light: LightTheme, dark: DarkTheme };

function App() {
  const [theme, setTheme] = useState("light");
  return (
    <ThemeProvider theme={themes[theme]}>
      <Splash theme={theme} setTheme={setTheme}></Splash>
    </ThemeProvider>
  );
}

export default App;
