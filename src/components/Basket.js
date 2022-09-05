import React from "react";
import { BsFillBasketFill } from 'react-icons/bs';

const Basket = ({ sepet ,toplam }) => {
  return (
    <div className="basket">
      <div className="basket-container">
        <h2><BsFillBasketFill /> Sepet</h2>
         {sepet.length==0 && "Sepete ürün yok." || null}
        {sepet.map((item) => (     
          <div className="basket-item" key={item.id}>
            <img src={item.img} />
            <p>{item.name} * {item.amount}</p>    
            <p>₺ {item.price * item.amount}</p>  
          </div>      
        ))}
        {toplam && <p>Toplam Tutar : ₺ {toplam}</p> || null}
      </div>
    </div>
  );
};

export default Basket;
