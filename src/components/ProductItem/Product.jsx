import React from 'react';
import Button from '../Button/Button';
import "./Product.css";

const ProductItem = ({product, className, onAdd}) => {

    const onAddHandler = () => {
        onAdd(product);
    }

    return (
        <div className={'product ' + className}>
            <div ><img src='./logo512.png' className={'img'}alt={product.title}/></div>
            <div className={'title'}>{product.title}</div>
            <div className={'description'}>{product.description}</div>
            <div className={'price'}>
                <span><b>{product.price} ₸</b></span>
            </div>
            <Button className={'add-btn'} onClick={onAddHandler}>
                В корзину
            </Button>
        </div>
    );
};

export default ProductItem;