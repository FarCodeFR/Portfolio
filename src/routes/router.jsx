import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
	{
		path: "/",
		element: <App />,
		children: [
			{
				path: "/profil",
				element: <Profil />,
			},
		],
	},
]);

export default router;
