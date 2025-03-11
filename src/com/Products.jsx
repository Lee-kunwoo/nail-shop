import React from 'react'
import topData from '../data/cuticle.json';
import '../styles/pages.scss'

const Products = () => {
  return (
        <div className='page cuticle'>
    <h1>CUTICLE</h1>
    <div className='outBox'>
        {
            topData.map(item=>(
                <div key={item.id} className='inBox'>
                    {/* eslint-disable-next-line */}
                    <img src={item.img} />
                    <h3>{item.name}</h3>
                    <h2>{item.price}원</h2>
                </div>
            ))
        }
    </div>
</div>
  )
}

export default Products;