import React from 'react'
import { list2 } from '../../assets/cards-list'
import Card from './card'

import "./styles.css"
const Cards = () => {
  return (
    <div className='cards-flex'>
      {list2.map((card, i) => (
        <Card card={card} key={i} />
      ))}
    </div>
  )
}

export default Cards
