import React from 'react';
import Button from '../Button/Button';
import "./CategoryItem.css"
import { Link } from 'react-router-dom';

const CategoryItem = ({category, className}) => {



    return (
        <div className={'product ' + className}>
            <div className={'img'} style={{backgroundImage:`url("${category.img}")`}}></div>
            <div className={'title'}>{category.title}</div>
            <div className={'description'}>{category.description}</div>
            <Link to={`/categories/${category.title}`}>
            <Button>
                Перейти
            </Button>
            </Link>
            
        </div>
    );
};

export default CategoryItem;