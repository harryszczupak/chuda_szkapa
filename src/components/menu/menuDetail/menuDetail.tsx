import { menuData } from '../../../pages/MenuPage';
import { useParams } from 'react-router-dom';
import { ArrayFromObject } from '../../utils/ArrayFromObject';
import { findElement } from '../../utils/findElement';
import MealInfo from './mealInfo';
const MenuDatail = (props: { items: menuData }) => {
	const { menuId } = useParams();
	const Meals = ArrayFromObject(props.items);
	const element = findElement(Meals, menuId!);

	return <MealInfo {...element} />;
};
export default MenuDatail;
