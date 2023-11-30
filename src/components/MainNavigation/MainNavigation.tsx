import classes from './MainNavigation.module.css';
import burger from '../assets/Burger-45.png';
import NavBar from './NavBar';
import { useContext } from 'react';
import { context } from '../Context/card-contex-provider';
import CartItems from '../Cart/CartItems';
const MainNavigation = () => {
	const ctx = useContext(context);
	return (
		<header className={classes.header}>
			<nav>
				<div className={classes.leftNav}>
					<img src={burger}></img>
				</div>
				<NavBar />
			</nav>
			{ctx.isVisible ? <CartItems /> : null}
		</header>
	);
};
export default MainNavigation;
