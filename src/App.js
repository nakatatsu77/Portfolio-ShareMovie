import "./App.css";
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter } from "react-router-dom";
import { Router } from "./roter/Router";
import { Header } from "./components/header/Header";
import { Footer } from "./components/footer/Footer";
function App() {
  return (
    <ChakraProvider>
      <BrowserRouter>
        <Header />
        <Router />
        <Footer />
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
