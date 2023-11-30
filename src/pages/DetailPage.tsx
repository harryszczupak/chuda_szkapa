import { useRouteLoaderData } from 'react-router-dom';
import { Suspense } from 'react';
import { Await } from 'react-router-dom';
import LoadingScreen from '../UI/LoadingScreen';
import MenuDatail from '../components/menu/menuDetail/menuDetail';
const DetailPage = () => {
	const { data } = useRouteLoaderData('root') as any;
	
	return (
		<Suspense fallback={<LoadingScreen />}>
			<Await resolve={data}>
				<MenuDatail items={data} />
			</Await>
		</Suspense>
	);
};
export default DetailPage;
