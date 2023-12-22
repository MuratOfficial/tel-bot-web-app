import React from 'react';
import Button from '../Button/Button';
import "./Product.css";

const ProductItem = ({product, className, onAdd}) => {

    const onAddHandler = () => {
        onAdd(product);
    }

    const imageUrls = [
        "/pies/pie1.png",
        '/pies/pie2.png',
        '/pies/pie3.png',
        '/pies/pie4.png',
        '/pies/pie5.png',
        '/pies/pie6.png',
      ];
    
      // Generate a random index to select a random image
      const randomIndex = Math.floor(Math.random() * imageUrls.length);

    return (
        <div className={'product ' + className}>
            <div className={'imgStyle'} style={{backgroundImage:`url(${imageUrls[randomIndex]})`}}>
                
            </div>
            <div className={'title'}>{product.name}</div>
            <div className={'price'}>{product.salePrices[0].value}
                <span><b> ₸</b></span>
            </div>
            <Button className={'add-btn'} onClick={onAddHandler}>
                В корзину
            </Button>
        </div>
    );
};

export default ProductItem;