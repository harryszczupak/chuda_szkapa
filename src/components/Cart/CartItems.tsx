import Overlay from '../../UI/Overlay';
import { useSelector } from 'react-redux';
import CartItem from './CartItem';
import classes from './CartItems.module.css';
import useFetch from '../Hooks/useHttp';
import { defaultCartState } from '../../store/cart-store';
import { updated } from '../../store/cart-store';
const CartItems = () => {
	const items = useSelector((state: defaultCartState) => state.items);
	const totalAmount = useSelector(
		(state: defaultCartState) => state.totalAmount
	);
	const { isSanding, onAddItem } = useFetch(
		'https://chuda-szkapa-default-rtdb.firebaseio.com/orders.json',
		'POST',
		{
			'Content-Type': 'application/json',
		},
		{
			totalAmount,
			items,
		}
	);
	const isEmpty = items.length < 1;
	return (
		<Overlay>
			{isSanding ? (
				<p className={classes.loading}>Sending...</p>
			) : (
				<>
					<ul className={classes['list-items']}>
						{items.map((item: updated) => {
							return (
								<CartItem
									key={item.id}
									name={item.name}
									price={item.price}
									quantity={item.quantatity}
								/>
							);
						})}
					</ul>
					<span>
						<p>{`Total:${totalAmount}$`}</p>
						<button
							disabled={isEmpty}
							className={isEmpty ? classes.disabled : classes.enabled}
							onClick={() => {
								onAddItem();
							}}>
							Order
						</button>
					</span>
				</>
			)}
		</Overlay>
	);
};
export default CartItems;
