import React from 'react'
import CategoryItem from '../CategoryItem/CategoryItem'
import { useLocation, useParams, useSearchParams } from 'react-router-dom';
import "./CategoryLayout.css"

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
      <div className='list'>{categories.map((item, key) => (
                  <CategoryItem
                  key={key}
                        category={item}
                        className={'item'}
                        
                    />

               
                
            ))}</div>
            
            
            
            
        </div>
  )
}
