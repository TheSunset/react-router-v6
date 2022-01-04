import React, { Suspense, useEffect, useState } from "react";
import { HashRouter as Router, Routes, Route, useRoutes, useLocation, location } from "react-router-dom";
import { ConfigProvider, Spin } from "antd";
import logo from "./logo.svg";
import "./App.css";

import routeConfig from "./route.config";
const LayoutFrame = React.lazy(() => import("./containers/LayoutFrame/LayoutFrame"));
const myConfig = {
	autoInsertSpaceInButton: false,
};

function ImportLoading(props) {
	return (
		<div className={"import-loading"}>
			<Spin size={"large"} tip={"努力加载中啊..."} />
		</div>
	);
}
function App() {
	return (
		<div className="App">
			<ConfigProvider {...myConfig}>
					<Router>
						<Suspense fallback={<ImportLoading />}>
							{/* 方案一 通过路由配置表遍历生成 */}
							{/* <RouterContainer1 /> */}

							{/* 方案二 手动写Route结构 嵌套 */}
							{/* <RouterContainer2 /> */}

							{/* 方案三 用 useRoutes hook */}
							<RouterContainer3 />
						</Suspense>
					</Router>
			</ConfigProvider>
		</div>
	);
}

// 以上三种方案类似 vue 的Router配置，需要插槽组件<Outlet>(类似vue的 router-view组件)

// 也可以用之前react的路由方式，把Route组件写在 各个组件里，这样就不用<Outlet />组件了
// 但是如果要匹配子路由需要在上层 写 *
// 例如：假如 LayoutFrame 里嵌套了一个 <Route path="/about" element={<div>Hello 888</div>} />
// 这时 如果location是 /lay/about, 如果要匹配上 需要在上层写上 /lay/*
{
	/* <Routes>
	<Route path="/lay/*" element={<LayoutFrame />} />
	<Route path="/about" element={<div>Hello about</div>} />
</Routes>; */
}

function RouterContainer1() {
	return (
		<Routes>
			{routeConfig.map(route => {
				return <Route path={route.path} key={route.path} element={route.element}></Route>;
			})}
		</Routes>
	);
}

function RouterContainer2() {
	return (
		<Routes>
			<Route path="/lay" element={<LayoutFrame />}>
				<Route path="about" element={<div>Hello 8888</div>}></Route>
			</Route>
			<Route path="/about" element={<div>Hello about</div>} />
		</Routes>
	);
}

function RouterContainer3() {
	const element = useRoutes(routeConfig);
	return element;
}

export default App;
