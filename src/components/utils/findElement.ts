import { mealData } from '../../pages/MenuPage';
export const findElement = (data: mealData[], param: string) => {
	return data.find((el: mealData) => el.id === param);
};
