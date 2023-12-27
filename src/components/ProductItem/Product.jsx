import React from 'react';
import Button from '../Button/Button';
import "./Product.css";
import {FaMinus, FaPlus, FaTrash} from "react-icons/fa"
import { useDispatch, useSelector } from 'react-redux';
import { addItem, removeItem, decrementItem } from '../../features/basket/counterSlice';
import ProductImg from './ProductImg';



const ProductItem = ({product, className}) => {
  const basketItems = useSelector(state => state.basket.items);
    const dispatch = useDispatch();

  const addToBasket = () => {
    dispatch(addItem(product.product));

  };



  const decrementBasketItem = () => {
    dispatch(decrementItem(product.product.id));
  };

    return (
        <div className={'product ' + className}>
<ProductImg item={product.product} />
            
            <div className={'title'}>{product.product.name}</div>
            <div className={'stock'}>Осталось: {product.stock.stock}</div>
            <div className={'price'}>{product.product.salePrices[0].value}
                <span><b> ₸</b></span>
            </div>
            {
              basketItems.find((el)=>el.id===product.product.id) ? (
                <div>
              <button onClick={() => addToBasket(product.product)} className='button'><FaPlus/></button>
                <span>{basketItems.find((el)=>el.id!==product.product.id).quantity}</span>
              <button onClick={() => decrementBasketItem(product.product.id)} className='button'><FaMinus /></button>
            </div>
              ) : (
                <Button className={'add-btn'} onClick={addToBasket}>
                В корзину 
            </Button>
          )
            }
            
           
        </div>
    );
};

export default ProductItem;