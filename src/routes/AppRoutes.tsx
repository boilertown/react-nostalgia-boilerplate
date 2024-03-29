import { useRoutes } from 'react-router-dom';
import type { RouteObject } from 'react-router-dom';
// --- routes ---
import { NotFoundPage } from 'pages/404';
import { HomePage } from 'pages/home';

export const routes: RouteObject[] = [
	{
		path: '/',
		element: <HomePage />,
	},
	{
		// When no routes matches, show 404 page.
		path: '*',
		element: <NotFoundPage />,
	},
];

export const AppRoutes = () => {
	const element = useRoutes(routes);
	return element;
};
