import PropTypes from 'prop-types';
import "./Bottle.css";

const Bottle = ({ bottle, handleAddToCart }) => {
  // console.log(bottle);
  const { name, image, price, id } = bottle;
  return (
    <div className="bottle">
      <img src={image} alt="" />
      <h3>Bottle Name: {name}</h3>
      <h5>Bottle Price: {price}</h5>
      <h5>Bottle Id: {id}</h5>
      <button onClick={() => handleAddToCart(bottle)} className="btn">
        Purchase
      </button>
    </div>
  );
};

Bottle.propTypes = {
  bottle: PropTypes.object.isRequired,
  handleAddToCart: PropTypes.func.isRequired
}

export default Bottle;
