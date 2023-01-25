import AppRoutes from "./routes";
import { ThemeProvider } from "@mui/material";
import { theme } from "./styles/pallete"
import Global from "./styles/global";

function App() {
  return (
    <>
      <Global/>
      <ThemeProvider theme={theme} >
        <AppRoutes/>
      </ThemeProvider>
    </>

  );
}

export default App;
