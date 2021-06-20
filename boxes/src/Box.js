import React from 'react';
import './Box.css';

function Box({ id, handleRemove, width, height, backgroundColor }) {
  const remove = () => handleRemove(id);
  return (
    <>
      <div
        className="box"
        style={{
          height: height + 'px',
          width: width + 'px',
          backgroundColor: '' + backgroundColor,
        }}
      >
        <button onClick={remove}>X</button>
      </div>
    </>
  );
}

export default Box;
