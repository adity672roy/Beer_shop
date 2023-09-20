import React from 'react';
import Home from '../components/Home'
import Search from '../components/Search';
import {GiBeerStein} from 'react-icons/gi'
import './homePage.css'

const HomePage = () => {
  return (
    <div>
      <div className='logo'>
      <GiBeerStein className='beer'/> 
      Hops & Cheers
      </div>
        <Search></Search>
        <Home></Home>
    </div>
  )
}

export default HomePage