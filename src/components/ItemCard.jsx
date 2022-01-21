import React from 'react';
import "./ItemCard.css"
function ItemCard({name,category,id,status}) {
  return <div className='item-card'>
            <div className="item-card-body">
                <h3>{name}</h3>
                <span>#{id}</span>
                <p>{category}</p>
                <strong>Stock Status:{status}</strong>
            </div>
  </div>;
}

export default ItemCard;
