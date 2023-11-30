import restaurant from '../../assets/restaurant.jpg';
import burgers from '../../assets/burgers.jpg';
import chief from '../../assets/chief.jpg';
import Slider from './Slider';
import classes from './Carousel.module.css';
const Carousel = ({ isVisible }: { isVisible: boolean }) => {
	console.log(isVisible);
	const gallery: string[] = [restaurant, chief, burgers];
	return (
		<div className={`${classes.gallery} ${isVisible ? classes.active : ''}`}>
			<Slider slide={gallery} />
		</div>
	);
};
export default Carousel;
