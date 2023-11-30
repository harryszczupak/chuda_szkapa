import { useRouteLoaderData } from 'react-router-dom';
import { json } from 'react-router-dom';
import MenuList from '../components/menu/menuList';
import { Await } from 'react-router-dom';
import { Suspense } from 'react';
import LoadingScreen from '../UI/LoadingScreen';
import { defer } from 'react-router-dom';
import useFetch from '../components/Hooks/useHttp';
export type mealData = {
	id: string;
	name: string;
	price: number;
	url: string;
};
export type menuData = {
	m1: mealData;
	m2: mealData;
	m3: mealData;
};
const MenuPage = () => {
	const { data } = useRouteLoaderData('root') as any;
	return (
		<Suspense fallback={<LoadingScreen />}>
			<Await resolve={data}>
				<MenuList items={data}></MenuList>
			</Await>
		</Suspense>
	);
};
export default MenuPage;
export async function loader() {
	const response = await fetch(
		'https://chuda-szkapa-default-rtdb.firebaseio.com/meals.json'
	);
	if (response.status == 404) {
		throw json({ message: 'Could find a server' }, { status: 404 });
	}

	if (!response.ok) {
		throw json({ message: 'An error occured' });
	}

	const data: menuData = await response.json();

	return defer({
		data,
	});
}
