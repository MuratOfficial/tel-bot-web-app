import React, {useState} from 'react';
import "./ProductsLink.css";
import ProductItem from '../ProductItem/Product';
import { useTelegram } from '../../hooks/useTelegram';
import {useCallback, useEffect} from "react";

const products = [
    {id: '1', title: 'Шоколадный Лазурь', price: 5000, description: 'Много крема и шоколада!!!', img: "./public/logo512.png"},
    {id: '2', title: 'Лимонный Лазурь', price: 12000, description: 'Лимон и бисквит!!!', img: "https://unsplash.com/photos/a-three-tiered-cake-with-figs-on-top-of-it-4on47p0-bk4"},
    {id: '3', title: 'Классический морковный', price: 5000, description: 'Полезный и сытный!!!', img: "https://unsplash.com/photos/sliced-chocolate-cake-beside-fork-on-plate-P_l1bJQpQF0"},
    {id: '4', title: 'Чернослив и апельсин', price: 122, description: 'Какой-то текст', img: "https://unsplash.com/photos/icing-covered-cake-beside-cupcakes-3962cSRPwOo"},
 ]

const getTotalPrice = (items = []) => {
    return items.reduce((acc, item) => {
        return acc += item.price
    }, 0)
}

const ProductList = () => {
    const [addedItems, setAddedItems] = useState([]);
    const {tg, queryId} = useTelegram();

    const onSendData = useCallback(() => {
        const data = {
            products: addedItems,
            totalPrice: getTotalPrice(addedItems),
            queryId,
        }
        fetch('http://localhost:8000', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        })
    }, [addedItems])

    useEffect(() => {
        tg.onEvent('mainButtonClicked', onSendData)
        return () => {
            tg.offEvent('mainButtonClicked', onSendData)
        }
    }, [onSendData])

    const onAdd = (product) => {
        const alreadyAdded = addedItems.find(item => item.id === product.id);
        let newItems = [];

        if(alreadyAdded) {
            newItems = addedItems.filter(item => item.id !== product.id);
        } else {
            newItems = [...addedItems, product];
        }

        setAddedItems(newItems)

        if(newItems.length === 0) {
            tg.MainButton.hide();
        } else {
            tg.MainButton.show();
            tg.MainButton.setParams({
                text: `Купить ${getTotalPrice(newItems)}`
            })
        }
    }

    return (
        <div className={'list'}>
            {products.map((item, key) => (
                <ProductItem
                key={key}
                    product={item}
                    onAdd={onAdd}
                    className={'item'}
                />
            ))}
        </div>
    );
};

export default ProductList;