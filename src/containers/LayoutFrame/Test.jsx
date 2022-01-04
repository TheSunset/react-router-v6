import React, { useContext } from 'react';
import { RouteObjectContext } from "../../RouteObjectContext";

function Test() {
  const route = useContext(RouteObjectContext);
  return (
    <div>{route && route.meta.name}</div>
  )
}

export default Test;