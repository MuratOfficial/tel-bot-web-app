import React from 'react';
import Button from '../Button/Button';
import "./Product.css";

import ProductImg from './ProductImg';

const ProductItem = ({product, className, onAdd}) => {

    


    const onAddHandler = () => {
        onAdd(product);
    }



    return (
        <div className={'product ' + className}>
<ProductImg item={product.product} />
            
            <div className={'title'}>{product.product.name}</div>
            <div className={'stock'}>Осталось: {product.stock.stock}</div>
            <div className={'price'}>{product.product.salePrices[0].value}
                <span><b> ₸</b></span>
            </div>
            <Button className={'add-btn'} onClick={onAddHandler}>
                В корзину
            </Button>
        </div>
    );
};

export default ProductItem;