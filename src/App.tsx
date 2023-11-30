import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import RootLayout from './pages/Layout/RootLayout';
import { lazy } from 'react';
import { Suspense } from 'react';
import LoadingScreen from './UI/LoadingScreen';
import { loader as menuLoader } from './pages/MenuPage';
import RootError from './components/Errors/RootError';
import RootMenu from './pages/Layout/RootMenu';
const HomePage = lazy(() => import('./pages/HomePage'));
const MenuPage = lazy(() => import('./pages/MenuPage'));
const AboutPage = lazy(() => import('./pages/AboutPage'));
const DetailPage = lazy(() => import('./pages/DetailPage'));
const router = createBrowserRouter([
	{
		path: '/',
		element: <RootLayout />,
		errorElement: <RootError />,
		children: [
			{
				index: true,
				element: (
					<Suspense fallback={<LoadingScreen />}>
						<HomePage />
					</Suspense>
				),
			},
			{
				path: 'menu',
				element: <RootMenu />,
				id: 'root',
				loader: menuLoader,
				children: [
					{
						index: true,
						element: (
							<Suspense fallback={<LoadingScreen />}>
								<MenuPage />
							</Suspense>
						),
					},
					{
						path: ':menuId',
						element: (
							<Suspense fallback={<LoadingScreen />}>
								<DetailPage />
							</Suspense>
						),
					},
				],
			},
			{
				path: 'about',
				element: (
					<Suspense fallback={<LoadingScreen />}>
						<AboutPage />
					</Suspense>
				),
			},
		],
	},
]);
function App() {
	return <RouterProvider router={router} />;
}

export default App;
