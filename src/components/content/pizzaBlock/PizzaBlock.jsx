import { CardAddPlusSvg } from '../../../assets/svg/Svg';
import { useState } from 'react';
import cn from 'classnames';
import Button from '../../../commons/button/Button';
import { useCart } from 'react-use-cart';

const PizzaBlock = ({
  id,
  image,
  name,
  price,
  types,
  sizes,
  setId,
  pizzaId,
  setModalActive,
  pizza,
}) => {
  const { addItem } = useCart();

  const availableTypes = ['тонкое', 'традиционное'];
  const availableSizes = [26, 30, 40];
  const [activeType, setActiveType] = useState(types[0]);
  const [activeSize, setActiveSize] = useState(0);

  const onSelectType = (index) => {
    setActiveType(index);
  };
  const onSelectSize = (index) => {
    setActiveSize(index);
  };

  const onModalActive = () => {
    setModalActive(true);
    setId(pizzaId);
    // document.body.style.overflowY = 'hidden';
  };

  const onAddPizza = () => {
    const obj = {
      id,
      name,
      image,
      price,
      size: availableSizes[activeSize],
      type: availableTypes[activeType],
    };
    addItem(obj);  
  };

  return (
    <div className="pizza-block">
      <img onClick={onModalActive} className="pizza-block__image" src={image} alt="Pizza" />
      <h4 className="pizza-block__title">{name}</h4>
      <div className="pizza-block__selector">
        <ul>
          {availableTypes.map((type, index) => (
            <li
              key={index}
              onClick={() => onSelectType(index)}
              className={cn({
                active: activeType === index,
                disabled: !types.includes(index),
              })}>
              {type}
            </li>
          ))}
        </ul>
        <ul>
          {availableSizes.map((size, index) => (
            <li
              key={index}
              onClick={() => onSelectSize(index)}
              className={cn({
                active: activeSize === index,
                disabled: !sizes.includes(size),
              })}>
              {size} см.
            </li>
          ))}
        </ul>
      </div>
      <div className="pizza-block__bottom" onClick={onAddPizza}>
        <div className="pizza-block__price">от {price} ₽</div>
        <Button className="button--outline button--add">
          <CardAddPlusSvg />
          <span>Добавить</span>
          <i>1</i>
        </Button>
      </div>
    </div>
  );
};
export default PizzaBlock;

// import { CardAddPlusSvg } from '../../../assets/svg/Svg';
// import { useState } from 'react';
// import cn from 'classnames';
// import { useCart } from 'react-use-cart';

// const PizzaBlock = ({ id,image, name, price, types, sizes, setId, pizzaId, setModalActive,pizza }) => {
//   const availableTypes = ['тонкое', 'традиционное'];
//   const availableSizes = [26, 30, 40];
//   const [activeType, setActiveType] = useState(types[0]);
//   const [activeSize, setActiveSize] = useState(0);
//   const { addItem} = useCart();

//   const onSelectType = (index) => {
//     setActiveType(index);
//   };
//   const onSelectSize = (index) => {
//     setActiveSize(index);
//   };
//   const onAddPizza = () => {
//     const obj = {
//       id,
//       name,
//       image,
//       price,
//       size: availableSizes[activeSize],
//       type: availableTypes[activeType],
//     };
//     addItem(obj)
//   }
//   const onModalActive = () => {
//     setModalActive(true);
//     setId(pizzaId);
//   };

//   return (
//     <div className="pizza-block">
//       <img onClick={onModalActive} className="pizza-block__image" src={image} alt="Pizza" />
//       <h4 className="pizza-block__title">{name}</h4>
//       <div className="pizza-block__selector">
//         <ul>
//           {availableTypes.map((type, index) => (
//             <li
//               key={index}
//               onClick={() => onSelectType(index)}
//               className={cn({
//                 active: activeType === index,
//                 disabled: !types.includes(index),
//               })}>
//               {type}
//             </li>
//           ))}
//         </ul>
//         <ul>
//           {availableSizes.map((size, index) => (
//             <li
//               key={index}
//               onClick={() => onSelectSize(index)}
//               className={cn({
//                 active: activeSize === index,
//                 disabled: !sizes.includes(size),
//               })}>
//               {size} см.
//             </li>
//           ))}
//         </ul>
//       </div>
//       <div className="pizza-block__bottom">
//         <div className="pizza-block__price">от {price} ₽</div>
//         <div onClick={onAddPizza} className="button button--outline button--add">
//           <CardAddPlusSvg />
//           <span>Добавить</span>
//           <i>1</i>
//         </div>
//       </div>
//     </div>
//   );
// };
// export default PizzaBlock;
