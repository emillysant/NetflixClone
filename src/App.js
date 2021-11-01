import { ThemeProvider } from "@material-ui/styles";
import theme from "./constants/theme";
import HomePage from "./pages/HomePage/HomePage";
import MoviesPage from "./pages/MoviesPage/MoviesPage";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <HomePage />
      <MoviesPage/>
    </ThemeProvider>
  );
}

export default App;
