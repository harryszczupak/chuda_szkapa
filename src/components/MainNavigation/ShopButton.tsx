import classes from './MainNavigation.module.css';
import { useContext, useEffect, useState } from 'react';
import { context } from '../Context/card-contex-provider';
import { useSelector } from 'react-redux';
import { defaultCartState } from '../../store/cart-store';
const ShopButton = () => {
	const [animation, setAnimation] = useState(false);
	const ctx = useContext(context);
	const quantity = useSelector(
		(state: defaultCartState) => state.totalQuantity
	);
	useEffect(() => {
		if (quantity === 0) return;
		setAnimation(true);

		const id = setTimeout(() => {
			setAnimation(false);
		}, 300);
		return () => clearTimeout(id);
	}, [quantity]);
	const setVisibilityHanlder = () => {
		ctx.setVisibility((prev: boolean) => !prev);
	};
	return (
		<button
			className={`${classes.shopButt} ${animation ? classes.active : ''}`}
			onClick={setVisibilityHanlder}>
			<section className={classes.section}>
				<h3>shop</h3>
				<span>{quantity}</span>
			</section>
		</button>
	);
};
export default ShopButton;
