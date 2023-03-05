import React, { useEffect } from 'react'
import './Header.css'
import { NavLink } from 'react-router-dom'
import { shallowEqual, useSelector } from 'react-redux';


const Header = () => {
  const { userName,  totalScore } = useSelector((store) => ({
    userName: store.statistic.userName,
    totalScore: store.statistic.totalScore
  }), shallowEqual)
  
  return (
    <div className='header'>
      <div className='container'>
        <div className='header__wrapper'>
          <nav className='header__nav'>
            <NavLink to='/game' className='header__link'>Game</NavLink>
            <NavLink to='/statistics' className='header__link'>Statistics</NavLink>
          </nav>
          <div className='score_info'>
          <p className='score'>Score:<span className='score-point'>{totalScore}</span></p>
          <p className='player'>Player:<span className='player_name'>{userName}</span></p>
          </div>
          <NavLink to='/login' className='header__link'>login</NavLink>

        </div>
      </div>
    </div>
  )
}

export default Header 