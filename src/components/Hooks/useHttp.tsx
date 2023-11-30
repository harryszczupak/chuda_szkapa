import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { json } from 'react-router-dom';

const useHttp = (url: string, method?: string, headers?: any, body?: any) => {
	const [isSanding, setIsSanding] = useState<boolean>(false);
	const dispatch = useDispatch();
	let data;
	const onAddItem = async () => {
		setIsSanding(true);

		const response = await fetch(url, {
			method: method ? method : 'POST',
			headers: headers ? headers : null,
			body: body ? JSON.stringify(body) : null,
		});
		if (response.status == 404) {
			throw json({ message: 'Could find a server' }, { status: 404 });
		}

		if (!response.ok) {
			throw json({ message: 'An error occured' });
		}
		data = response.json();
		setIsSanding(false);
		dispatch({ type: 'CLEAR' });
	};

	return {
		isSanding,
		onAddItem,
	};
};
export default useHttp;
