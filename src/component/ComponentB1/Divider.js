import React from 'react'

const Divider = ({color}) => {
  return (
    <hr
      style={{
        color: color,
        backgroundColor: color,
              height: "1px",
        margin:"5px"
      }}
    />
  );
}

export default Divider