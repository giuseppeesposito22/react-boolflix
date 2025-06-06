import { ProductionProvider } from "./contexts/ProductionContext";
import Main from "./components/Main";
import Header from "./components/Header";

function App() {
  return (
    <>
      <ProductionProvider>
        <Header />
        <Main />
      </ProductionProvider>
    </>
  );
}

export default App;
