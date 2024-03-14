import { useEffect } from "react";
import { useState } from "react";
import Bottle from "../Bottle/Bottle";
import "./Bottles.css";
import { addToLS, getStoredCart } from "../../utilities/localStorage";

const Bottles = () => {
  const [bottles, setBottles] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch("Bottles.json")
      .then((res) => res.json())
      .then((data) => setBottles(data));
  }, []);

  // load cart from local storage

  useEffect(() => {
    console.log("called the useeffect", bottles.length);
    if (bottles.length > 0) {
      const stordCart = getStoredCart();
      console.log(stordCart);
    }
  }, [bottles]);

  const handleAddToCart = (bottle) => {
    //console.log(bottle);
    const newCart = [...cart, bottle];
    setCart(newCart);
    addToLS(bottle.id);
  };

  return (
    <div>
      <h2>Bottles Available: {bottles.length}</h2>
      <h3>Cart: {cart.length}</h3>

      <div className="bottles-container">
        {bottles.map((bottle) => (
          <Bottle
            key={bottle.id}
            handleAddToCart={handleAddToCart}
            bottle={bottle}
          ></Bottle>
        ))}
      </div>
    </div>
  );
};

export default Bottles;
