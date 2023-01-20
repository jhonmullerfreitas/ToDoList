import AppRoutes from "./routes";
import { ThemeProvider } from "styled-components";
import { theme } from "./styles/pallete"


function App() {
  return (
    
      <ThemeProvider theme={theme} >
        <AppRoutes/>
      </ThemeProvider>

  );
}

export default App;
