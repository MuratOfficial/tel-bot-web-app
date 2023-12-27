
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {  removeItem, decrementItem, addItem } from '../../features/basket/counterSlice';
import {FaMinus, FaPlus, FaTrash} from "react-icons/fa"
import "./Basket.css"

const Basket = () => {
  const basketItems = useSelector(state => state.basket.items);
  const dispatch = useDispatch();
console.log(basketItems)

  const handleRemoveItem = itemId => {
    dispatch(removeItem(itemId));
  };

  const handleDecrementItem = itemId => {
    dispatch(decrementItem(itemId));
  };

  const handleIncrementItem = item=> {
    dispatch(addItem(item));
  };

  return (
    <div className='category-container'>
      <h2 className='titletext'>Корзина</h2>
      {basketItems.length === 0 ? (
        <p className='title'>В корзине пусто.</p>
      ) : (
        <div>
          <ul className='basket-div'>
          {basketItems.map(item => (
            <li key={item.id} className='basket-item'>
              <span className=''>{item.name} </span>
              <span className='price'>{item.price} </span>

              
              <div className='quantity'>
              <button onClick={() => handleIncrementItem(item)} className='button'><FaPlus/></button>
                <span>{item.quantity}</span>
              <button onClick={() => handleDecrementItem(item.id)} className='button'><FaMinus /></button>
              </div>
              <button onClick={() => handleRemoveItem(item.id)} className='button'><FaTrash/></button>
              
            </li>
          ))}
        </ul>
<p className='title'>Итого: {basketItems.reduce((sum, item)=>sum + item.price, 0)}</p>
<button className='basket-button'>Оформить заказ</button>
        </div>
        
      )}
    </div>
  );
};

export default Basket;
