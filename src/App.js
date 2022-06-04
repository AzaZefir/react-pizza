import './App.css';
import Header from './components/header/Header';
import Content from './components/content/Content';
import { Route, Routes } from 'react-router-dom';
import Basket from './components/basket/Basket';
import { useState } from 'react';
import { pizzaBlock, pizzasInBusket } from './data/db';
// import { useState } from 'react';

// export const Appp = () => {
// const [inc, setInc]= useState(0)
// const [decr, setDecr]= useState(0)

//   const onCount = () => {
//     setInc(inc + 1)
//   }
//   const onDecr = () => {
//     setDecr(decr - 1)
// }

//   return (
//     <div>
//       <h1>{inc}</h1>
//     <button onClick={onCount}>
// click+
//     </button>
//     <h1>{decr}</h1>
//     <button onClick={onDecr}>
// click-
//     </button>
//     </div>

//   )
// }

//!async zaprosy
  // const [pizzas, setPizzas] = useState([]);
  // const [pizzasBusket, setPizzasBusket] = useState(pizzasInBusket);

  // useEffect(() => {
  //   fetch('http://localhost:3000/db.json')
  //     .then((response) => response.json())
  //     .then((json) => setPizzas(json.pizzas));
  // }, []);

  // axios.get('http://localhost:3000/db.json')
  //   .then(({ data }) => {
  //   setPizzas(data.pizzas);
  // });

function App() {
  const [pizzas, setPizzas] = useState(pizzaBlock);
  const [pizzasBusket, setPizzasBusket] = useState(pizzasInBusket);

  return (
    <div className="wrapper">
      <Header />
      <Routes>
        <Route path="/" element={<Content pizzas={pizzas} setPizzas={setPizzas} />} />
        <Route
          path="/basket"
          element={<Basket pizzasBusket={pizzasBusket} setPizzasBusket={setPizzasBusket} />}
        />
      </Routes>
    </div>
  );
}

export default App;
