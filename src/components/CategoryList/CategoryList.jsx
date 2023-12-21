import React, {useState} from 'react';
import "./CategoryList.css";
import CategoryItem from '../CategoryItem/CategoryItem';

const products = [
    {id: '1', title: 'Шоколадный Лазурь', price: 5000, description: 'Много крема и шоколада!!!', img: "./public/logo512.png"},
    {id: '2', title: 'Лимонный Лазурь', price: 12000, description: 'Лимон и бисквит!!!', img: "https://unsplash.com/photos/a-three-tiered-cake-with-figs-on-top-of-it-4on47p0-bk4"},
    {id: '3', title: 'Классический морковный', price: 5000, description: 'Полезный и сытный!!!', img: "https://unsplash.com/photos/sliced-chocolate-cake-beside-fork-on-plate-P_l1bJQpQF0"},
    {id: '4', title: 'Чернослив и апельсин', price: 122, description: 'Какой-то текст', img: "https://unsplash.com/photos/icing-covered-cake-beside-cupcakes-3962cSRPwOo"},
 ]




const CategoryList = () => {

    return (
        <div className={'list'}>
            {products.map((item, key) => (
                <CategoryItem
                key={key}
                    product={item}
                    className={'item'}
                    
                />
            ))}
        </div>
    );
};

export default CategoryList;