import React from 'react'
import { CountMinusSvg, CountPlusSvg, CountRemoveSvg } from '../../../assets/svg/Svg'

function BasketCart({id,name,price,image,onRemove,onPlus,onMinus,type,size,totalPrice,totalCount}) {
    const handleRemoveClick = () => {
        onRemove(id);
      };
    
      const handlePlusItem = () => {
        onPlus(id);
      };
    
      const handleMinusItem = () => {
        onMinus(id);
      };
  return (
    <div className="content__items">
    
      <div className="cart__item">
        <div className="cart__item-img">
          <img className="pizza-block__image" src={image} alt="Pizza" />
        </div>
        <div className="cart__item-info">
          <h3>{name}</h3>
          <p>
            {type}, {size} см.
          </p>
        </div>
        <div className="cart__item-count">
          <div
            onClick={handleMinusItem }
            className="button button--outline button--circle cart__item-count-minus">
            <CountMinusSvg />
          </div>
            <b>{totalCount}</b>
          <div
            onClick={handlePlusItem}
            className="button button--outline button--circle cart__item-count-plus">
            <CountPlusSvg />
          </div>
        </div>
        <div className="cart__item-price">
          <b>{totalPrice} s</b>
        </div>
        <div className="cart__item-remove" onClick={() => handleRemoveClick(id)}>
          <div className="button button--outline button--circle">
            <CountRemoveSvg />
          </div>
        </div>
      </div>
   
  </div>
  )
}

export default BasketCart
