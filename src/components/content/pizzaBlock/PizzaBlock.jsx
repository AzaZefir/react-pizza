import { CardAddPlusSvg } from '../../../assets/svg/Svg';

const PizzaBlock = ({ image,name,price}) => {
  return (
    <div className="pizza-block" >
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
        <div className="pizza-block__price">от {price} ₽</div>
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



// const [activeTypes, setActiveTypes] = useState(types[0]);

//   const typesNames = ['тонкое', 'традиционное'];

//   const onSelectType = (index) => {
//     setActiveTypes(index);
//   };

//   return (
//     <div className="pizza-block">
//       <img className="pizza-block__image" src={imageUrl} alt="Pizza" />
//       <h4 className="pizza-block__title">{name}</h4>
//       <div className="pizza-block__selector">
//         <ul>
//           {typesNames.map((type, index) => (
//             <li
//               onClick={() => onSelectType(index)}
//               className={cn({
//                 active: activeTypes === index,
//                 disabled: !types.includes(index)
//               })}
//               // className={activeTypes === index ? 'active' : ''}
//             >
//               {type}
//             </li>
//           ))}
//         </ul>
//         <ul>
//           <li className="active">20 см.</li>
//           <li>30 см.</li>
//           <li>40 см.</li>
//         </ul>
//       </div>
//       <div className="pizza-block__bottom">
//         <div className="pizza-block__price">от 395 ₽</div>
//         <div className="button button--outline button--add">
//           <CardAddPlusSvg />
//           <span>Добавить</span>
//           <i>2</i>
//         </div>
//       </div>
//     </div>