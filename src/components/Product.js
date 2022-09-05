import React from 'react'

const Product = ({urun , sepet , setSepet}) => {

    const basketProduct = sepet.find(item => item.id === urun.id);

    const addBasket = () =>{

        const urunVarMi = sepet.find(item => item.id === urun.id);

        if(urunVarMi){
            urunVarMi.amount +=1;
            setSepet([...sepet.filter(item=> item.id !== urun.id),{
                id: urun.id,
                name : urun.name,
                img : urun.img,
                price : urun.price,
                amount : urunVarMi.amount
            }])
        }
        else{
            setSepet([...sepet , {
                id: urun.id,
                name : urun.name,
                img : urun.img,
                price : urun.price,
                amount : 1
            }])
        }
    }


    const removeBasket = () =>{

        const removeItem = sepet.find(item => item.id === urun.id);
        removeItem.amount -=1;

        if(removeItem.amount === 0){
            setSepet([...sepet.filter(item => item.id !== urun.id)]);
        }
        else{
            setSepet([...sepet.filter(item => item.id !== urun.id),{
                id: urun.id,
                name : urun.name,
                img : urun.img,
                price : urun.price,
                amount : removeItem.amount
            }])
        }
    }

  return (
    <div className="product">
        <div className="product-count">
            <button disabled={!basketProduct} onClick={removeBasket}>-</button>  <b>{basketProduct ? basketProduct.amount : 0}</b>  <button onClick={addBasket}>+</button>
        </div>
        <img src={urun.img}/>
        <div className="product-info">
            <p>{urun.name}</p>
            <p>₺ {urun.price }</p>
        </div>
    </div>
  )
}

export default Product