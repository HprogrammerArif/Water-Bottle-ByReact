import './Bottle.css'
const Bottle = ({bottle}) => {
  // console.log(bottle);
  const {name, image, price, id} = bottle;
  return (
    <div className="bottle">
      <img src={image} alt="" />
      <h3>Bottle Name: {name}</h3>
      <h5>Bottle Price: {price}</h5>
      <h5>Bottle Id: {id}</h5>
    </div>
  );
};

export default Bottle;