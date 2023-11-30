import { mealData, menuData } from '../../pages/MenuPage';
export const ArrayFromObject = (data: menuData) => {
	const itemsList: Array<mealData> = [];

	for (const meal in data) {
		itemsList.push(data[meal as keyof menuData]);
	}
	return itemsList;
};
