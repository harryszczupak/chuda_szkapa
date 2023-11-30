import { mealData } from '../../pages/MenuPage';
import classes from './item.module.css';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

const MealItem = (props: { item: mealData; isVisible: boolean }) => {
	const dispatch = useDispatch();
	const addItemHandler = () => {
		dispatch({
			type: 'ADD',
			payload: {
				id: props.item.id,
				name: props.item.name,
				price: props.item.price,
				quantatity: 1,
			},
		});
	};

	return (
		<div className={`${classes.item} ${props.isVisible ? classes.active : ''}`}>
			<div className={classes.front}>
				<Link to={`${props.item.id}`}></Link>
				<img src={'src/components/assets/' + props.item.url + '.jpg'}></img>
				<h1>{props.item.name}</h1>
				<div className={classes.bot_desc}>
					<span>{`${props.item.price.toFixed(2)}$`}</span>
					<button onClick={addItemHandler}>+</button>
				</div>
			</div>
		</div>
	);
};
export default MealItem;
