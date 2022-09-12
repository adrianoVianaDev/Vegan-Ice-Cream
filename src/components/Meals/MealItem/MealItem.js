import { useContext } from 'react';

import MealItemForm from './MealItemForm';
import classes from './MealItem.module.css';
import CartContext from '../../../store/cart-context';

const MealItem = (props) => {
  const cartCtx = useContext(CartContext);

  const price = `$${props.price.toFixed(2)}`;

  const addToCartHandler = amount => {
    cartCtx.addItem({
      id: props.id,
      image: props.image,
      name: props.name,
      amount: amount,
      price: props.price
    });
  };

  return (
    <div className={classes.meal}>
      <div>
        <img className={classes.image} src={require(`../../../assets/images/${props.image}.jpg`).default}></img>
        <h3>{props.name}</h3>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.price}>{price}</div>
      </div>
      <div>
        <MealItemForm onAddToCart={addToCartHandler} />
      </div>
    </div>

    /*
    <div class="card">
      <img src="img_avatar.png" alt="Avatar" style="width:100%">
      <div class="container">
        <h4><b>John Doe</b></h4> 
        <p>Architect & Engineer</p> 
      </div>
    </div>
    */
  );
};

export default MealItem;
