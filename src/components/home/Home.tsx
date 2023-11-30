import classes from './Home.module.css';
import Label from './label';
import Carousel from './Slider/Carousel';
import { useInView } from 'react-intersection-observer';

const Home = () => {
	const { ref, inView } = useInView({
		triggerOnce: true,
	});

	return (
		<section ref={ref} className={classes.HomeSection}>
			<section className={inView ? classes.active : ''}>
				<h1>Witamy w Chudej Szkapie</h1>
			</section>
			<div className={classes.lableSection}>
				<Label isVisible={inView} />
				<hr
					style={{
						width: '3px',
						height: '100%',
						margin: '0 5rem 0 0',
						border: 'none',
						padding: '',
						backgroundColor: 'white',
					}}></hr>
				<Carousel isVisible={inView} />
			</div>
		</section>
	);
};
export default Home;
