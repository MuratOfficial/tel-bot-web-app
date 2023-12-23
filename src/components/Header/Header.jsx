import React from 'react'
import Button from '../Button/Button';
import {useTelegram} from '../../hooks/useTelegram';
import {FaUser} from "react-icons/fa"
import "./Header.css"
import { useLocation } from 'react-router';
import { Link } from 'react-router-dom';


export default function Header() {
    const {onClose,  user} = useTelegram();
    const location = useLocation().pathname;

    return (
    <div className={'header'}>
      {location === "/" ? (<Button onClick={onClose}>Закрыть</Button>):(
      <Link to={"/"}><Button> Назад</Button></Link>
      )}
        
        
        <span className={'username'}>
        <FaUser/> {" "} {user?.username} 
        </span>
    </div>
  )
}
