import React from 'react';
import Budget from './Budget'
export const BuyButton = (props) => {

  return (
    <button onClick={() => {Budget.subtract('item1')}}> -5 </button>
  )
}

export default BuyButton