import React from 'react';
import Button from '../Button/Button';
import "./CategoryItem.css"

const CategoryItem = ({product, className}) => {



    return (
        <div className={'product ' + className}>
            <div ><img src={product.img} className={'img'}alt={product.title}/></div>
            <div className={'title'}>{product.title}</div>
            
            <Button >
                Перейти
            </Button>
        </div>
    );
};

export default CategoryItem;