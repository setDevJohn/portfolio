import { Outlet } from 'react-router-dom';

export const NavLayout = () => {
	const teste = { 
		name: 'teste',
		email: 'teste'
	};

	return (
		<>
			<h1> Nav </h1>
			<Outlet/>
		</>
	);
};