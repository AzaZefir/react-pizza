import { Link } from 'react-router-dom';
// import { useCart } from 'react-use-cart';
import {
  ClearBasketSvg,
  // CountMinusSvg,
  // CountPlusSvg,
  // CountRemoveSvg,
  GoBackSvg,
  HeaderSvg,
} from '../../assets/svg/Svg';
import BasketCart from './basketCart/BasketCart';
import EmptyBasket from './emptyBasket/EmptyBasket';
import { useDispatch,useSelector } from 'react-redux';
import { clearCart, minusCartItem, plusCartItem, removeCartItem } from '../../redux/actions/cartAction';

const Basket = () => {
  // const { isEmpty, items, updateItemQuantity, removeItem, emptyCart, totalItems, cartTotal } =
  //   useCart();

    const dispatch = useDispatch();

    const { totalPrice, totalCount, items } = useSelector(({ cart }) => cart);
   
    const addedPizzas = Object.keys(items).map((key) => {
      return items[key].items[0];
    });
    const onClearCart = () => {
      if (window.confirm('Вы действительно хотите очистить корзину?')) {
        dispatch(clearCart());
      }
    };
  
    const onRemoveItem = (id) => {
      if (window.confirm('Вы действительно хотите удалить?')) {
        dispatch(removeCartItem(id));
      }
    };
  
    const onPlusItem = (id) => {
      dispatch(plusCartItem(id));
    };
  
    const onMinusItem = (id) => {
      dispatch(minusCartItem(id));
    };
  
    const onClickOrder = () => {
      console.log('ВАШ ЗАКАЗ', items);
    };
  return (
    <div className="wrapper">
      {totalCount ? (
        <div className="content">
          <div className="container container--cart">
            <div className="cart">
              <div className="cart__top">
                <h2 className="content__title">
                  <HeaderSvg />
                  Корзина
                </h2>
                <div className="cart__clear" onClick={onClearCart}>
                  <ClearBasketSvg />
                  <span>Очистить корзину</span>
                </div>
              </div>
              {addedPizzas.map((obj) => (
              <BasketCart
                key={obj.id}
                id={obj.id}
                name={obj.name}
                type={obj.type}
                size={obj.size}
                image={obj.image}
                totalPrice={items[obj.id].totalPrice}
                totalCount={items[obj.id].items.length}
                onRemove={onRemoveItem}
                onMinus={onMinusItem}
                onPlus={onPlusItem}
              />
            ))}
              <div className="cart__bottom">
                <div className="cart__bottom-details">
                  <span>
                    Всего пицц: <b>{totalCount} шт.</b>
                  </span>
                  <span>
                    Сумма заказа: <b>{totalPrice} ₽</b>
                  </span>
                </div>
                <div className="cart__bottom-buttons">
                  <Link to="/" className="button button--outline button--add go-back-btn">
                    <GoBackSvg />
                    <span>Вернуться назад</span>
                  </Link>
                  <div className="button pay-btn" onClick={onClickOrder}>
                    <span>Оплатить сейчас</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <EmptyBasket />
      )}
    </div>
  );
};

export default Basket;

// import { Link } from 'react-router-dom';
// import { useCart } from 'react-use-cart';
// import {
//   ClearBasketSvg,
//   CountMinusSvg,
//   CountPlusSvg,
//   CountRemoveSvg,
//   GoBackSvg,
//   HeaderSvg,
// } from '../../assets/svg/Svg';
// import EmptyBasket from './emptyBasket/EmptyBasket';

// const Basket = ({ pizzasBusket, setPizzasBusket }) => {
//   const { isEmpty, items, totalItems, cartTotal, updateItemQuantity, removeItem, emptyCart } =
//     useCart();
//   return (
//     <div className="wrapper">
//       {!isEmpty ? (
//         <div className="content">
//           <div className="container container--cart">
//             <div className="cart">
//               <div className="cart__top">
//                 <h2 className="content__title">
//                   <HeaderSvg />
//                   Корзина
//                 </h2>
//                 <div className="cart__clear" onClick={() => emptyCart()}>
//                   <ClearBasketSvg />
//                   <span>Очистить корзину</span>
//                 </div>
//               </div>
//               <div className="content__items">
//                 {items.map((pizzaInBasket) => (
//                   <div key={pizzaInBasket.id} className="cart__item">
//                     <div className="cart__item-img">
//                       <img className="pizza-block__image" src={pizzaInBasket.image} alt="Pizza" />
//                     </div>
//                     <div className="cart__item-info">
//                       <h3>{pizzaInBasket.name}</h3>
//                       <p>
//                         {pizzaInBasket.type}, {pizzaInBasket.size} см.
//                       </p>
//                     </div>
//                     <div className="cart__item-count">
//                       <div
//                         onClick={() =>
//                           updateItemQuantity(pizzaInBasket.id, pizzaInBasket.quantity - 1)
//                         }
//                         className="button button--outline button--circle cart__item-count-minus">
//                         <CountMinusSvg />
//                       </div>
//                       <b>{pizzaInBasket.quantity}</b>
//                       <div
//                         onClick={() =>
//                           updateItemQuantity(pizzaInBasket.id, pizzaInBasket.quantity + 1)
//                         }
//                         className="button button--outline button--circle cart__item-count-plus">
//                         <CountPlusSvg />
//                       </div>
//                     </div>
//                     <div className="cart__item-price">
//                       <b>{pizzaInBasket.price} сом</b>
//                     </div>
//                     <div className="cart__item-remove" onClick={() => removeItem(pizzaInBasket.id)}>
//                       <div className="button button--outline button--circle">
//                         <CountRemoveSvg />
//                       </div>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//               <div className="cart__bottom">
//                 <div className="cart__bottom-details">
//                   <span>
//                     Всего пицц: <b>{totalItems} шт.</b>
//                   </span>
//                   <span>
//                     Сумма заказа: <b>{cartTotal} сом</b>
//                   </span>
//                 </div>
//                 <div className="cart__bottom-buttons">
//                   <Link to="/" className="button button--outline button--add go-back-btn">
//                     <GoBackSvg />
//                     <span>Вернуться назад</span>
//                   </Link>
//                   <div className="button pay-btn">
//                     <span>Оплатить сейчас</span>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       ) : (
//         <EmptyBasket />
//       )}
//     </div>
//   );
// };

// export default Basket;
