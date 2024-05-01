import "./Footer.css"
import { useState,useEffect } from "react"
import cart1 from "../css/img/cart-1.png"
import cart2 from "../css/img/cart-2.png"
import cart3 from "../css/img/cart-3.png"
import cart4 from "../css/img/cart-4.png"
import cart5 from "../css/img/cart-5.png"
import cart6 from "../css/img/cart-6.png"
import cart7 from "../css/img/cart-7.png"
import cart8 from "../css/img/cart-8.png"
import cart9 from "../css/img/cart-9.png"
import cart10 from "../css/img/cart-10.png"


export default function Footer() {

  const [currentCart, setCurrentCart] = useState(0);
 
  const Prev = () => {
    setCurrentCart((prevCart) => (prevCart === 0 ? 9 : prevCart - 1));

  }

  const Next = () => {
    setCurrentCart((nextcart) => (nextcart ===9 ? 0 : nextcart +1))
  }

    


  
  return (
    <section className="container-fluid">
    <div className="container-fluid d-flex align-items-center cont-footer justify-content-between">
      <div className="col-sm-7 d-flex  align-items-center">
        <h4 className="fs-1">Featured Categories</h4>
      

     
        <ul className="d-flex justify-content-start align-items-center">
          <li className="list-group-item pt-3 pe-4 fs-5">Cake & Milk</li>
          <li className="list-group-item pt-3 pe-4">Coffes & Teas</li>
          <li className="list-group-item pt-3 pe-4">Pet Foods</li>
          <li className="list-group-item pt-3 pe-4">Vegetables</li>
        </ul>
      </div>

      <div className="col-sm-2 d-flex justify-content-end">
      <span id="prev" className="cart-control me-3" onClick={Prev} ><i class="fa-solid fa-arrow-left"></i></span>
      <span id="next" className="cart-control me-3" onClick={Next}><i class="fa-solid fa-arrow-right"></i></span>
      </div>
      
    </div>

    <div className="container-fluid">
        <div className="carts d-flex justify-content-between">
           <div className={`cart text-center ${currentCart === 0 ? 'active' : ''}`}>
            <img src={cart1} alt="img"/>
            <h6>Cake & Milks</h6>
            <span>26 items</span>
        </div>

        <div className={`cart text-center ${currentCart === 1 ? 'active' : ''}`}>
            <img src={cart2} alt="img"/>
            <h6>Organic Kiwi</h6>
            <span>28 items</span>
        </div>

        <div className={`cart text-center ${currentCart === 2 ? 'active' : ''}`}>
            <img src={cart3} alt="img"/>
            <h6>Peach</h6>
            <span>14 items</span>
        </div>


        <div className={`cart text-center ${currentCart === 3 ? 'active' : ''}`}>
            <img src={cart4} alt="img"/>
            <h6>Red Apple</h6>
            <span>54 items</span>
        </div>

        <div className={`cart text-center ${currentCart === 4 ? 'active' : ''}`}>
            <img src={cart5} alt="img"/>
            <h6>Snack</h6>
            <span>56 items</span>
        </div>

        <div className={`cart text-center ${currentCart === 5 ? 'active' : ''}`}>
            <img src={cart6} alt="img"/>
            <h6>Vegetables</h6>
            <span>72 items</span>
        </div>

        <div className={`cart text-center ${currentCart === 6 ? 'active' : ''}`}>
            <img src={cart7} alt="img"/>
            <h6>Strawberry</h6>
            <span>123 items</span>
        </div>

        <div className={`cart text-center ${currentCart === 7 ? 'active' : ''}`}>
            <img src={cart8} alt="img"/>
            <h6>Black plum</h6>
            <span>34 items</span>
        </div>

        <div className={`cart text-center ${currentCart === 8 ? 'active' : ''}`}>
            <img src={cart9} alt="img"/>
            <h6>Custard apple</h6>
            <span>89 items</span>
        </div>

        <div className={`cart text-center ${currentCart === 9 ? 'active' : ''}`}>
            <img src={cart10} alt="img"/>
            <h6>Cofee & Tea</h6>
            <span>28 items</span>
        </div>


    </div>
    </div>
    </section>
  );
}
