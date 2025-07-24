import React from 'react';
import { GlobalStyles } from './styles/GlobalStyles';
import { Header } from './components/Header/Header';
import { ProductsList } from './components/ProductsList/ProductsList';



//componente funcional
function App() {
  return (
    <>
      <Header />

      <ProductsList />
      <GlobalStyles />
    </>
  );
}

export default App;
