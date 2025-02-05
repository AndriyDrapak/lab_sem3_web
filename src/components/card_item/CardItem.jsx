import React from "react";
import './CardItem.css';
import { Link } from 'react-router-dom';
import product1 from '../image/product1.png';
import product2 from '../image/product2.png';
import product3 from '../image/product3.png';
import product4 from '../image/product4.png';
import product5 from '../image/product5.png';
import product6 from '../image/product6.png';
import product7 from '../image/product7.png';
import product8 from '../image/product8.png';
import product9 from '../image/product9.png';

export function getImageSrc(imgpath) {
    switch (imgpath) {
        case 'product1':
            return product1;
        case 'product2':
            return product2;
        case 'product3':
            return product3;
        case 'product4':
            return product4;
        case 'product5':
            return product5;
        case 'product6':
            return product6;
        case 'product7':
            return product7;
        case 'product8':
            return product8;
        case 'product9':
            return product9;
        default:
            return null; // або дефолтне зображення
    }
}

function CardItem({ id, title, text, imgpath, price, showViewMore, showPrice }) {
    const imageSrc = getImageSrc(imgpath);
  
    console.log(`CardItem - showViewMore: ${showViewMore}, id: ${id}`);
  
    return (
      <div className="cards_content">
        <div className="cards__photo-container">
            {imageSrc ? (
                <img src={imageSrc} alt={title} className="cards__photo" />
            ) : (
                <div className="cards__photo-placeholder">No Image Available</div>
            )}
        </div>
        <article>
          <h3 className="cards_title">{title}</h3>
          <p className="cards_desc">{text}</p>
          {showPrice && (
            <div className="cards_price">
              <p className="cards_price-price">Price:</p>
              <p>{price} $</p>
            </div>
          )}
        </article>
        {showViewMore && (
          <div className="cards__button-container">
            <Link to={`/catalog/${id}`}>
              <button className="cards__button">View More</button>
            </Link>
          </div>
        )}
      </div>
    );
}

export default CardItem;
