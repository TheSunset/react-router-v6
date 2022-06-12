import About from "./containers/About";
import Home from "./containers/Home";
import Post from "./containers/Post";
import LayoutFrame from "./containers/LayoutFrame/LayoutFrame";
import PostLists from "./containers/PostLists";
import Posts from "./containers/Posts";
import { Navigate } from "react-router-dom";

const routes = [
	{
		path: "/",
		element: <Navigate to="/home"/>,
	},
	{
		path: "/lay",
		element: <LayoutFrame />,
		children: [
			{
				path: "home",
				element: <Home />,
        meta: {
          name: "主页"
        }
			},
			{
				path: "post/:slug",
				element: <Post />,
        meta: {
          name: "邮件"
        }
			},
			{
				path: "about",
				element: <About />,
        meta: {
          name: "关于"
        }
			},
		],
	},
	{
		path: "/home",
		element: <Home />,
	},
	{
		path: "/post/:slug",
		element: <Post />,
	},
	{
		path: "/about",
		element: <About />,
	},
];

export default routes;
