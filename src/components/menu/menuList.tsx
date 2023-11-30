import { menuData } from '../../pages/MenuPage';
import MealItem from './mealItem';
import classes from './menu.module.css';
import Snowfall from 'react-snowfall';
import { ArrayFromObject } from '../utils/ArrayFromObject';
import { useInView } from 'react-intersection-observer';
const MenuList = (props: { items: menuData }) => {
	const Meals = ArrayFromObject(props.items);
	const { ref, inView } = useInView({
		triggerOnce: true,
	});
	return (
		<div className={classes.menu} ref={ref}>
			<Snowfall style={{ position: 'absolute', left: '0', top: '0' }} />
			{Meals.map((items) => {
				return <MealItem key={items.id} item={items} isVisible={inView} />;
			})}

		</div>
	);
};
export default MenuList;
