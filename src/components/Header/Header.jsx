import React from 'react'
import Button from '../Button/Button';
import {useTelegram} from '../../hooks/useTelegram';
import {FaUser} from "react-icons/fa"
import "./Header.css"


export default function Header() {
    const {onClose, user} = useTelegram();
    return (
    <div className={'header'}>
        <Button onClick={onClose}>Закрыть</Button>
        <span className={'username'}>
        <FaUser/> {" "} {user?.username} 
        </span>
    </div>
  )
}
