import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';


const ProductCard = ({ image, title, content, onClick }) => {
  return (
    <div className="card custom-card h-100 text-center" onClick={onClick} style={{ cursor: 'pointer' }}>

      <img src={image} className="card-img-top product-img" alt={title} />
      <hr />
      <h5 className="card-title " style={{ color: 'white' }}>{title }</h5>
      <hr />
      <div className="card-body">
        <p className="card-text">{content}</p>
      </div>
 
    </div>
  );
};

export default ProductCard;
