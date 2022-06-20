import React, { useContext } from 'react';
import { RouteObjectContext } from "../../RouteObjectContext";

function Test(props) {
  console.log("Test")
  const route = useContext(RouteObjectContext);
  return (
    <div>{route && route.meta && route.meta.name}</div>
  )
}
function areEqual(prevProps, nextProps) {
  // console.log(prevProps, nextProps)
  /*
  如果把 nextProps 传入 render 方法的返回结果与
  将 prevProps 传入 render 方法的返回结果一致则返回 true，
  否则返回 false
  */
  return true
}

const TestMemo = React.memo(Test)
export default TestMemo;