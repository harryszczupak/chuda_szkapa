import { Fragment, PropsWithChildren } from 'react';
import { createPortal } from 'react-dom';
import classes from './Overlay.module.css';
import { context } from '../components/Context/card-contex-provider';
import { useContext } from 'react';
const Backdrop = () => {
	const ctx = useContext(context);
	const closeCardHandler = () => {
		ctx.setVisibility((prev: boolean) => !prev);
	};
	return <div onClick={closeCardHandler} className={classes.backdrop}></div>;
};

const Modal = (props: PropsWithChildren) => {
	return <div className={classes.modal}>{props.children}</div>;
};
const Overlay = (props: PropsWithChildren) => {
	return (
		<Fragment>
			{createPortal(
				<Modal>{props.children}</Modal>,
				document.getElementById('modal')!
			)}
			{createPortal(<Backdrop />, document.getElementById('backdrop')!)}
		</Fragment>
	);
};
export default Overlay;
