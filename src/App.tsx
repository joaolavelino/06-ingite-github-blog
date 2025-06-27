import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./styles/themes/default";
import { GlobalStyle } from "./styles/global";

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <h1>This is Github Blog!</h1>
      <h3>There will be a lot here!</h3>
      <p>I'm going to use this app extensively</p>
    </ThemeProvider>
  );
}

export default App;
