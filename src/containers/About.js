import React, { useContext } from "react";
import { RouteObjectContext } from "../RouteObjectContext";
import Test2 from "./Test2";
function About() {
	const route = useContext(RouteObjectContext);
	console.log("About");
	return (
		<div style={{ padding: 20 }}>
			<h2>About View</h2>
			<p>{route && route.meta && route.meta.name}</p>
      <p>{route && route.count}</p>
      <Test2 />
		</div>
	);
}

export default About;
