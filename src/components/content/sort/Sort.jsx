import { useState } from 'react';
import { SortLabelSvg } from '../../../assets/svg/Svg';

const Sort = ({ items, onClickSort }) => {
  const [active, setActive] = useState(0);
  const [visible, setVisible] = useState(false)

  const onSelectSort = (index) => {
    setActive(index);
    onClickSort(index);
    setVisible(true)
  };
  const onVisible = () => {
    setVisible(!visible)
  }

  return (
    <div className="sort">
      <div className="sort__label">
        <SortLabelSvg visible={visible}/>
        <b>Сортировка по:</b>
        <span onClick={onVisible}>популярности</span>
      </div>
      {visible &&
      <div className="sort__popup">
        <ul>
          {items.map((item, index) => (
            <li
              className={active === index ? 'active' : ''}
              key={`${item}_${index}`}
              onClick={() => onSelectSort(index)}>
              {item}
            </li>
          ))}
        </ul>
      </div>
      }
      
    </div>
  );
};

export default Sort;


// const Sort = ({ items, onClickSort,onSortPizzas,activeSortType }) => {
//   // const [active, setActive] = useState(0);
//   const [visible, setVisible] = useState(false)
//   // const activeLable = items[active].name
//   const activeLable = items.find((item) => item.type === activeSortType).name;

//   const onSelectSort = (index) => {
//     // setActive(index);
//     // onClickSort(index);
//     setVisible(true)
//     onSortPizzas(index)
//   };
//   const onVisible = () => {
//     setVisible(!visible)
//   }

//   return (
//     <div className="sort">
//       <div className="sort__label">
//         <SortLabelSvg visible={visible}/>
//         <b>Сортировка по:</b>
//         <span onClick={onVisible}>{activeLable}</span>
//       </div>
//       {visible &&
//       <div className="sort__popup">
//         <ul>
//           {items.map((item, index) => (
//             <li
//               className={activeSortType === item.type ? 'active' : ''}
//               key={`${item}_${index}`}
//               onClick={() => onSelectSort(item)}>
//               {item.name}
//             </li>
//           ))}
//         </ul>
//       </div>
//       }
      
//     </div>
//   );
// };

// export default Sort;