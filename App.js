import React, { useState } from 'react';
import './App.css';

import Counter from './pages/counter';
import Pricing from './pages/pricing';
import Cart from './pages/cart';
import Signin from './pages/signin';
function App() {
const[page, setPage]=useState("signin");
var show=true;
  return (

    <div className="App">
      <section className="pricing py-5">
      {page === "counter" && <Counter />}
      {page === "pricing" && <Pricing />}
      {page === "cart" && <Cart />}  
      {page === "signin" && <Signin />}
  
    </section>
    </div>
  ) ; (
    <section className="pricing py-5">Nothing to Show</section>
  )
}
export default App;
