import React, { useState, useEffect } from 'react';

function Test2(props) {
  console.log('Test2');
  useEffect(() => {})
  return (
    <div>Hello Test2</div> 
  )
}

export default React.memo(Test2);