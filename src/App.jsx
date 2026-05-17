import AtelierApp from "./app/AtelierApp";
import { ThemeProvider } from "./context/ThemeContext";

function App() {
  return (
    <ThemeProvider>
      <AtelierApp />
    </ThemeProvider>
  );
}

export default App;
