import React, { useEffect, useState } from "react";
import { Layout, Menu, Breadcrumb } from "antd";
import {
	Routes,
	Route,
	Outlet,
	useNavigate,
	useLocation,
	useMatch,
	matchRoutes,
	matchPath,
	renderMatches,
	NavLink,
	useParams,
	useSearchParams,
} from "react-router-dom";
import {
	MenuUnfoldOutlined,
	MenuFoldOutlined,
	UserOutlined,
	VideoCameraOutlined,
	UploadOutlined,
} from "@ant-design/icons";
import { RouteObjectContext } from "../../RouteObjectContext";

import "./LayoutFrame.scss";
import routeConfig from "../../route.config";

import Test from "./Test";

const { Header, Sider, Content } = Layout;
function LayoutFrame() {
	const [collapsed, setCollapsed] = useState(false);
	const [routeObj, setRouteObj] = useState(null);
	const location = useLocation();
	const params = useParams();
	const [searchParams, setSearchParams] = useSearchParams();

	useEffect(() => {
		let match = matchRoutes(routeConfig, location.pathname);
		let target = match[match.length - 1];
		let query = {};
		for (let [k, v] of searchParams.entries()) {
			query[k] = v;
		}
		setRouteObj({
			pathname: target.pathname,
			meta: target.route.meta,
			query,
			params,
			count: 1,
		});
	}, [location]);

	useEffect(() => {
		console.log("Hello Hello");
	}, []);

	const toggle = () => {
		setCollapsed(c => !c);
	};

	const updateContextHandler = () => {
		let match = matchRoutes(routeConfig, location.pathname);
		let target = match[match.length - 1];
		let query = {};
		for (let [k, v] of searchParams.entries()) {
			query[k] = v;
		}
		setRouteObj(prev => {
			return {
				pathname: target.pathname,
				meta: target.route.meta,
				query,
				params,
        count: prev.count + 1
			};
		});
	};
	return (
		<RouteObjectContext.Provider value={routeObj}>
			<Layout className="layout-container">
				<Sider trigger={null} collapsible collapsed={collapsed}>
					<div className="logo" />
					<Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]}>
						<Menu.Item key={1}>
							<NavLink to={"/lay/home"}>home</NavLink>
						</Menu.Item>
						<Menu.Item key={2}>
							<NavLink to={"/lay/about"}>about</NavLink>
						</Menu.Item>
						<Menu.Item key={3}>
							<NavLink to={"/lay/post/1	"}>post</NavLink>
						</Menu.Item>
						<Menu.Item key={4} onClick={updateContextHandler}>
							update context
						</Menu.Item>
					</Menu>
				</Sider>
				<Layout className="site-layout">
					<Header className="site-layout-background" style={{ padding: 0 }}>
						{React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
							className: "trigger",
							onClick: toggle,
						})}

						<Breadcrumb
							style={{ margin: "16px 0", display: "inline-block", verticalAlign: "middle" }}
						>
							<Breadcrumb.Item>
								<Test />
							</Breadcrumb.Item>
						</Breadcrumb>
					</Header>
					<Content
						className="site-layout-background"
						style={{
							margin: "24px 16px",
							padding: 24,
							minHeight: 280,
						}}
					>
						<Outlet></Outlet>
					</Content>
				</Layout>
			</Layout>
		</RouteObjectContext.Provider>
	);
}

export default React.memo(LayoutFrame);
