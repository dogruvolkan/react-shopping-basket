import { useEffect, useState } from 'react';
import './style.css';
import Header from "./components/Header";
import Products from "./products.json";
import Product from "./components/Product";
import Basket from "./components/Basket";


function App() {

  const [sepet ,setSepet] =useState([]);
  const [toplam , setToplam] = useState("");

  useEffect(() =>{
    const toplamUcret = sepet.reduce((pre,sepet) =>  pre+ (sepet.amount * sepet.price), 0);
    setToplam(toplamUcret);
  }, [sepet])

  return (
    <>
      <Header />
      <div className="product-container">
        <div className="product-box">
          {
            Products.map(urun => (
                <Product key={urun.id}  urun ={urun}  sepet={sepet} setSepet = {setSepet}/>
            ))
          }
        </div>
        <Basket sepet={sepet} toplam = {toplam}/>
      </div>
     
    </>
  );
}

export default App;
