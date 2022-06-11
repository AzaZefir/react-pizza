import { CardAddPlusSvg } from '../../../assets/svg/Svg';
import { useState } from 'react';
import cn from 'classnames';
import Button from '../../../commons/button/Button';

const PizzaBlock = ({ image, name, price, types, sizes, setId, pizzaId, setModalActive }) => {
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
      <div className="pizza-block__bottom">
        <div className="pizza-block__price">от {price} ₽</div>
        <Button className=" button--outline button--add">
          <CardAddPlusSvg />
          <span>Добавить</span>
          <i>2</i>
        </Button>
      </div>
    </div>
  );
};
export default PizzaBlock;

// const PizzaBlock = ({ image, name, price,types,sizes }) => {
//   const availableTypes = ['тонкое', 'традиционное']
//   const availableSizes = [20, 30, 40]
//   const [activeTypes,setActiveTypes]= useState(types[0])
//   const [activeSizes, setActiveSizes] = useState(sizes[0])

//   const onSelectType = (index) => {
//     setActiveTypes(index)
//   }
//   const onSelectSize = (index) => {
//     setActiveSizes(index)
//   }
//   return (
//     <div className="pizza-block" >
//       <img className="pizza-block__image" src={image} alt="Pizza" />
//       <h4 className="pizza-block__title">{name}</h4>
//       <div className="pizza-block__selector">
//         <ul>
//           {availableTypes.map((type,index) =>
//             <li
//               key={index}
//               onClick={() =>onSelectType(index)}
//               className={cn({
//                 active: activeTypes === index,
//               disabled: !types.includes(index)})}
//             >{type}</li>
//             )}
//         </ul>
//         <ul>
//           {availableSizes.map((size,index) =>
//             <li
//               key={index}
//             onClick={() =>onSelectSize(index)}
//             className={cn({
//               active: activeSizes === index,
//               disabled: !sizes.includes(size)
//             })}
//             >
//               {size} см.</li>
//             )}
//         </ul>
//       </div>
//       <div className="pizza-block__bottom">
//         <div className="pizza-block__price">от {price} ₽</div>
//         <div className="button button--outline button--add">
//           <CardAddPlusSvg />
//           <span>Добавить</span>
//           <i>2</i>
//         </div>
//       </div>
//     </div>
//   );
// };
// export default PizzaBlock;
