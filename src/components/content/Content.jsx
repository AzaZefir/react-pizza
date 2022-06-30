import SliderSlick from '../../commons/slider/Slider';
import Categories from './categories/Categories';
import PizzaBlock from './pizzaBlock/PizzaBlock';
import Sort from './sort/Sort';
import MyModal from '../../commons/modal/MyModal';
import { PizzaInfoCard } from './pizzaInfoCard/PizzaInfoCard';
import { useState, useEffect } from 'react';
import { setPizzas } from '../../redux/actions/pizzaAction';
import { fetchPizzas } from '../../api/fetchPizzas';
import { useDispatch, useSelector } from 'react-redux';
import { setCategory, setSortBy } from '../../redux/actions/filterAction';
import { useCallback } from 'react';
import LoadingSkeleton from '../../commons/loader/Loader';

const Content = () => {
  const dispatch = useDispatch();

  const items = useSelector(({ pizzas }) => pizzas.items);
  const cartItems = useSelector(({ cart }) => cart.items);
  const isLoaded = useSelector(({ pizzas }) => pizzas.isLoaded);
  const { category, sortBy } = useSelector(({ filters }) => filters);
  // const [categories, setCategories] = useState(null);
  // const [sort, setSort] = useState({
  //   type: 'rating',
  // });

  // const [filter, setFilter] = useState(items);
  //!activate modal when click on img by own data
  const [id, setId] = useState(0);
  const [modalActive, setModalActive] = useState(false);

  useEffect(() => {
    dispatch(fetchPizzas(sortBy, category));
  }, [category, dispatch, sortBy]);

  const onSelectCategory = useCallback(
    (index) => {
      dispatch(setCategory(index));
    },
    [dispatch],
  );

  const onSelectSortType = useCallback(
    (type) => {
      dispatch(setSortBy(type));
    },
    [dispatch],
  );

  // const onClickCategories = (index) => {
  //   setCategories(categories);
  // };
  // const onClickSort = (type) => {
  //   setSort(type);
  //   const sortedPizzas = items.sort((a, b) => a[type.type]?.localeCompare(b[type.type]));
  //   setPizzas(sortedPizzas);
  // };
  // const onFilter = (categoryItem) => {
  //   if (categoryItem === '') {
  //     setFilter(items);
  //     return;
  //   }
  //   const result = items.filter((currentItem) => {
  //     return currentItem.category === categoryItem;
  //   });
  //   setFilter(result);
  // };

  const handleAddPizzaToCart = (obj) => {
    dispatch({
      type: 'ADD_PIZZA_CART',
      payload: obj,
    });
  };

  return (
    <div className="content">
      <div className="container">
        <SliderSlick />
        <div className="content__top">
          <Categories
            activeCategory={category}
            // onFilter={onFilter}
            onClickCategories={onSelectCategory}
            items={['Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые']}
          />
          <Sort
            activeSortType={sortBy.type}
            onClickSort={onSelectSortType}
            items={[
              { name: 'популярности', type: 'popular', order: 'desc' },
              { name: 'цене', type: 'price', order: 'desc' },
              { name: 'алфавит', type: 'name', order: 'asc' },
            ]}
          />
        </div>
        <h2 className="content__title">Все пиццы</h2>
        <div className="content__items">
          {isLoaded
            ? items.map((pizza) => (
                <PizzaBlock
                  key={pizza.id}
                  {...pizza}
                  onClickAddPizza={handleAddPizzaToCart}
                  pizzas={items}
                  pizza={pizza}
                  setPizzas={setPizzas}
                  setModalActive={setModalActive}
                  setId={setId}
                  pizzaId={pizza.id}
                  addedCount={cartItems[pizza.id] && cartItems[pizza.id].items.length}
                />
              ))
            : Array(12)
                .fill(0)
                .map((_, index) => <LoadingSkeleton key={index} />)}
        </div>
        <MyModal active={modalActive} setActive={setModalActive}>
          <PizzaInfoCard id={id} />
        </MyModal>
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
