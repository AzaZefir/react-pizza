import { CardAddPlusSvg } from '../../../assets/svg/Svg';

const PizzaBlock = ({id, image,name,}) => {
  return (
    <div className="pizza-block">
      <img className="pizza-block__image" src={image} alt="Pizza" />
      <h4 className="pizza-block__title">{name}</h4>
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
  );
};
export default PizzaBlock;
