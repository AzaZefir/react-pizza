import SliderSlick from '../../commons/slider/Slider';
import Categories from './categories/Categories';
import PizzaBlock from './pizzaBlock/PizzaBlock';
import Sort from './sort/Sort';
import { useState } from 'react';

const Content = ({ pizzas, setPizzas }) => {
  const [categories, setCategories] = useState(null);
  const [sort,setSort]= useState()

  const onClickCategories = (index) => {
    setCategories(categories);
  };
  const onClickSort = (index) => {
    setSort(sort)
  }

  return (
    <div className="content">
      <div className="container">
        <SliderSlick />
        <div className="content__top">
          <Categories
            onClickCategories={onClickCategories}
            items={['Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые']}
          />
          <Sort
            onClickSort={onClickSort}
            items={[
              'популярности','цене','алфавит' 
            ]}/>
        </div>
        <h2 className="content__title">Все пиццы</h2>
        <div className="content__items">
          {pizzas.map((pizza) => (
            <PizzaBlock
              key={pizza.id}
              {...pizza}
              pizzas={pizzas}
              pizza={pizza}
              setPizzas={setPizzas}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
export default Content;



// import SliderSlick from '../../commons/slider/Slider';
// import Categories from './categories/Categories';
// import PizzaBlock from './pizzaBlock/PizzaBlock';
// import Sort from './sort/Sort';
// import { useState } from 'react';

// const Content = ({ pizzas, setPizzas }) => {
//   const [categories, setCategories] = useState(null);
//   const [sort, setSort] = useState()
//   const [filterPizzas, setFilterPizzas] = useState(pizzas)
//   const [sortPizzas, setSortPizzas] = useState({
//     type: 'rating',
//   })
  
//   const onFilterPizzas = (categoriesItem) => {
//     if (categoriesItem === '') {
//       setFilterPizzas(pizzas)
//       return
//     }
//     const result = pizzas.filter((currentData) => {
//       return currentData.category === categoriesItem
//     })
//     setFilterPizzas(result)
//   }
//   const onSortPizzas = (type) => {
//     setSortPizzas(type)
//     const sortedPizzas = pizzas.sort((a, b) => a[type.type]?.localeCompare(b[type.type]))
//     setPizzas(sortedPizzas)
//   }

//   const onClickCategories = (index) => {
//     setCategories(categories);
//   };
//   const onClickSort = (index) => {
//     setSort(sort)
//   }

//   return (
//     <div className="content">
//       <div className="container">
//         <SliderSlick />
//         <div className="content__top">
//           <Categories
//             onFilterPizzas={onFilterPizzas}
//             onClickCategories={onClickCategories}
//             items={['Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые']}
//           />
//           <Sort
//             activeSortType={sortPizzas.type}
//             onSortPizzas={onSortPizzas}
//             onClickSort={onClickSort}
//             items={[
//               { name: 'популярности', type: 'rating', }, 
//               { name: 'цене', type: 'price', },
//               { name: 'алфавит', type: 'name', },
//             ]}/>
//         </div>
//         <h2 className="content__title">Все пиццы</h2>
//         <div className="content__items">
//           {filterPizzas.map((pizza) => (
//             <PizzaBlock
//               key={pizza.id}
//               {...pizza}
//               pizzas={pizzas}
//               pizza={pizza}
//               setPizzas={setPizzas}
//             />
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };
// export default Content;
