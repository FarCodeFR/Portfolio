import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Profil from "../pages/Profil";
import Cv from "../pages/Cv";
import GitHub from "../pages/GitHub";

export const router = createBrowserRouter([
	{
		path: "/",
		element: <App />,
		children: [
			{
				path: "/profil",
				element: <Profil />,
			},
			{
				path: "/cv",
				element: <Cv />,
			},
			{
				path: "/github",
				element: <GitHub />,
			},
		],
	},
]);
