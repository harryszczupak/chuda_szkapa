import ShopButton from './ShopButton';
import { NavLink } from 'react-router-dom';
import classes from './MainNavigation.module.css';

const NavBar = () => {
	return (
		<div className={classes.rightNav}>
			<ul>
				<NavLink
					className={({ isActive }: { isActive: boolean }): string => {
						return isActive ? classes.active : '';
					}}
					to='/'>
					Home
				</NavLink>
				<NavLink
					className={({ isActive }: { isActive: boolean }): string => {
						return isActive ? classes.active : '';
					}}
					to='menu'>
					Menu
				</NavLink>
				<NavLink
					className={({ isActive }: { isActive: boolean }): string => {
						return isActive ? classes.active : '';
					}}
					to='about'>
					About
				</NavLink>
				<div className={classes.toggle}>
					<input
						id='dark-mode-toggle'
						type='checkbox'
						onChange={(e) => {
							if (e.target.checked) {
								document
									.querySelector('body')!
									.setAttribute('data-theme', 'dark');
							} else {
								document
									.querySelector('body')!
									.setAttribute('data-theme', 'light');
							}
						}}></input>
					<label htmlFor='dark-mode-toggle'></label>
				</div>

				<ShopButton />
			</ul>
		</div>
	);
};
export default NavBar;
