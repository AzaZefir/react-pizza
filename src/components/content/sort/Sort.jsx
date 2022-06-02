import { SortLabelSvg } from '../../../assets/svg/Svg';

const Sort = () => {
  return (
    <div className="sort">
      <div className="sort__label">
        <SortLabelSvg />
        <b>Сортировка по:</b>
        <span>популярности</span>
      </div>
      <div className="sort__popup">
        <ul>
          <li className="active">популярности</li>
          <li>цене</li>
          <li>алфавиту</li>
        </ul>
      </div>
    </div>
  );
};

export default Sort;
