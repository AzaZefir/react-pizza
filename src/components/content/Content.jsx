import SliderSlick from '../../commons/slider/Slider';
import Categories from './categories/Categories';
import PizzaBlock from './pizzaBlock/PizzaBlock';
import Sort from './sort/Sort';

const Content = ({ pizzas, setPizzas }) => {
  return (
    <div className="content">
      <div className="container">
        <SliderSlick />
        <div className="content__top">
          <Categories
            items={['Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые',]}
          />
          <Sort />
        </div>
        <h2 className="content__title">Все пиццы</h2>
        <div className="content__items">
          {pizzas.map((pizza) => (
            <PizzaBlock {...pizza} pizzas={pizzas} pizza={pizza} setPizzas={setPizzas} />
          ))}
        </div>
      </div>
    </div>
  );
};
export default Content;
