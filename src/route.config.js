import About from "./containers/About";
import Home from "./containers/Home";
import Post from "./containers/Post";
import LayoutFrame from "./containers/LayoutFrame/LayoutFrame";
import PostLists from "./containers/PostLists";
import Posts from "./containers/Posts";

const routes = [
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
		path: "/post",
		element: <Post />,
	},
	{
		path: "/about",
		element: <About />,
	},
];

export default routes;
