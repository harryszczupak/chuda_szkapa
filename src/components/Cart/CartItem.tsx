import classes from './CartItem.module.css';
const CartItem = (props: { name: string; price: number; quantity: number }) => {
	return (
		<li className={classes['list-item']}>
			<div>
				<h1>{props.name}</h1>
				<p>{props.price}</p>
			</div>
			<p>{props.quantity}</p>
		</li>
	);
};
export default CartItem;
