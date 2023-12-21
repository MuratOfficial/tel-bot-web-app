import React from 'react'
import ProductItem from "../ProductItem/Product"
import { useLocation, useParams, useSearchParams } from 'react-router-dom';
import "./CategoryLayout.css"

const products = [
  {id: '1', title: 'Шоколадный Лазурь', price: 5000, description: 'Много крема и шоколада!!!', img: "./public/logo512.png"},
  {id: '2', title: 'Лимонный Лазурь', price: 12000, description: 'Лимон и бисквит!!!', img: "https://unsplash.com/photos/a-three-tiered-cake-with-figs-on-top-of-it-4on47p0-bk4"},
  {id: '3', title: 'Классический морковный', price: 5000, description: 'Полезный и сытный!!!', img: "https://unsplash.com/photos/sliced-chocolate-cake-beside-fork-on-plate-P_l1bJQpQF0"},
  {id: '4', title: 'Чернослив и апельсин', price: 122, description: 'Какой-то текст', img: "https://unsplash.com/photos/icing-covered-cake-beside-cupcakes-3962cSRPwOo"},
]

const categories = [
  {id: '1', path: "cakes", title: 'Пироги',  description: 'Вкусные пироги', img: "./assets/category1.jpg"},
  {id: '2',path: "pies", title: 'Торты',  description: 'Чудесные торты', img: "./assets/category2.jpg"},
  {id: '3',path: "pie", title: 'Пирожные',  description: 'Прелестные пироженые', img: "./assets/category3.jpg"},
  {id: '4',path: "cheesecakes", title: 'Чизкейки',  description: 'Вкусные чизкейки', img: "./assets/category4.jpg"},
  
  {id: '5',path: "premium", title: 'Премиум',  description: 'Премиум линейка товаров', img: "./assets/category5.jpg"},
  
  {id: '6',path: "fresh", title: 'AIRBA FRESH',  description: 'Коктейли и фреш', img: "./assets/category6.jpg"},
]

export default function CategoryLayout() {
  let {categoryId} = useParams();

  const category = categories.find((el)=>el.path===categoryId)

  return (
    <div className={'category-container'}>
      <h1 className={'titletext'}>{category.title}</h1>
      <p className='category-desc'>{category.description}</p>
      <div className='list'>{products.map((item, key) => (
                  <ProductItem
                  key={key}
                        product={item}
                        className={'item'}
                        
                    />

               
                
            ))}</div>
            
            
            
            
        </div>
  )
}
