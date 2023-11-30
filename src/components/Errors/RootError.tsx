import { useRouteError } from 'react-router-dom';
import MainNavigation from '../MainNavigation/MainNavigation';
const RootError = () => {
	const error = useRouteError() as any;
	let message = 'An error occured';

	if (error.status == 404) {
		message = error.data.message;
	}
	return (
		<div
			style={{
				width: '100%',
				display: 'flex',
				alignItems: 'center',
				flexDirection: 'column',
			}}>
			<MainNavigation />
			<h1>
				<p style={{ textAlign: 'center' }}>{error.status}</p>
				{message}
			</h1>
		</div>
	);
};
export default RootError;
