import React, { useState } from 'react';
import NewBoxForm from './NewBoxForm';
import Box from './Box';
import { v4 as uuid } from 'uuid';

function BoxList() {
  const [boxes, setBoxes] = useState([]);

  /** Add new box object to BoxList. */
  const addBox = (box) => {
    const newBox = { ...box, id: uuid() };
    setBoxes((boxes) => [...boxes, newBox]);
  };

  /** Remove a box object from BoxList. */
  const removeBox = (id) => {
    setBoxes((boxes) => boxes.filter((box) => box.id !== id));
  };

  const boxComponents = boxes.map((box) => (
    <Box
      key={box.id}
      id={box.id}
      width={box.width}
      height={box.height}
      handleRemove={removeBox}
      backgroundColor={box.backgroundColor}
    />
  ));

  return (
    <div>
      <NewBoxForm addBox={addBox} />
      {boxComponents}
    </div>
  );
}

export default BoxList;
