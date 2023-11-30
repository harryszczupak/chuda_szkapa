import { mealData } from '../../../pages/MenuPage';
import classes from './mealInfo.module.css';
import { useInView } from 'react-intersection-observer';
const MealInfo = ({ name, price, url }: any) => {
	const { ref, inView } = useInView({
		triggerOnce: true,
	});
	return (
		<div className={classes.menu}>
			<div className={classes.info}>
				<section ref={ref} className={`${inView ? classes.active : ''}`}>
					<aside>
						<img src={'../src/components/assets/' + url + '.jpg'}></img>
					</aside>
					<section className={classes.rightInfo}>
						<h1>{name}</h1>
						<p>{`${price}$`}</p>
					</section>
				</section>
			</div>
			<div className={classes.description}></div>
		</div>
	);
};
export default MealInfo;
