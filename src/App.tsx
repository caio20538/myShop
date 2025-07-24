import React from 'react';
import { GlobalStyles } from './styles/GlobalStyles';
import { Header } from './components/Header/Header';
import { ProductCards } from './components/ProductCards/ProductCards';



//componente funcional
function App() {
  return (
    <>
      <Header />

      <ProductCards />
      <GlobalStyles />
    </>
  );
}

export default App;
