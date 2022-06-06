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