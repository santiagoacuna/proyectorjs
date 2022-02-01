import React from "react";
import NavBar from './components/NavBar';
import ItemListContainer from './components/itemListContainer';

function App() {
  
  return (
          <>
            <NavBar />
            <ItemListContainer 
              text="Soy un texto de prueba del Item List Container"
            />
          </>
  )
}

export default App;