import { Outlet } from 'react-router-dom';
import { Fragment } from 'react';
const RootMenu = () => {
	return (
		<Fragment>
			<Outlet />
		</Fragment>
	);
};
export default RootMenu;
