import "./App.css";
import AppProvider from "./components/AppProvider";

import Home from "./components/Home";

const App = () => {
  return (
    <AppProvider>
      <Home />
    </AppProvider>
  );
};

export default App;
