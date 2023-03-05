import './App.css';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from "./styles/reset";
import { baseTheme } from './styles/theme';
import { Container } from "./components/container/index";

function App() {
  return (
    <ThemeProvider theme={baseTheme}>
      <Container />
      <GlobalStyles />
    </ThemeProvider>
  )
}

export default App;
