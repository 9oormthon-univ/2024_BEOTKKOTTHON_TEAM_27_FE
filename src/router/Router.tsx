import { createBrowserRouter } from "react-router-dom";
import Layout from "../layouts/Layout";
import PostHeaderLayout from "../layouts/PostHeaderLayout";
import PostNew from "../pages/PostNew/PostNew";
import Home from "../pages/Home/Home";
import PostResult from "../pages/PostResult/PostResult";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Layout />,
		children: [
			{
				element: <PostHeaderLayout />,
				children: [
					{
						path: "/post",
						element: <PostNew />,
					},
					{
						path: "/post-result",
						element: <PostResult />,
					},
				],
			},
			{
				path: "/",
				element: <Home />,
			},
		],
	},
]);

export default router;
