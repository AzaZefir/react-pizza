import { CardAddPlusSvg } from '../../../assets/svg/Svg';

const PizzaBlock = ({ pizzas, setPizzas }) => {
  return (
    <div className="content__items">
      {pizzas.map((pizza) => (
        <div className="pizza-block" key={pizza.id}>
          <img className="pizza-block__image" src={pizza.image} alt="Pizza" />
          <h4 className="pizza-block__title">{pizza.name}</h4>
          <div className="pizza-block__selector">
            <ul>
              <li className="active">тонкое</li>
              <li>традиционное</li>
            </ul>
            <ul>
              <li className="active">20 см.</li>
              <li>30 см.</li>
              <li>40 см.</li>
            </ul>
          </div>
          <div className="pizza-block__bottom">
            <div className="pizza-block__price">от 395 ₽</div>
            <div className="button button--outline button--add">
              <CardAddPlusSvg />
              <span>Добавить</span>
              <i>2</i>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
export default PizzaBlock;
