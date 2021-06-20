import React, { useState } from 'react';

/** Form for creating a new box to add to a list.
 *
 * Has state for the backgroundColor, width, height of the box on submission,
 * sends { backgroundColor, width, height } to function (addBox) received from parent (BoxList).
 *
 */

function NewBoxForm({ addBox }) {
  const INITIAL_STATE = { backgroundColor: '#000000', width: 100, height: 100 };
  const [formData, setFormData] = useState(INITIAL_STATE);

  /** Send { backgroundColor, width, height } to parent & clear form. */
  const handleSubmit = (evt) => {
    evt.preventDefault();
    addBox(formData);
    setFormData(INITIAL_STATE);
  };

  /** Update local state w/curr state of input element */

  const handleChange = (evt) => {
    const { name, value } = evt.target;
    setFormData((fData) => ({
      ...fData,
      [name]: value,
    }));
  };

  /** render form */

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="backgroundColor">Background Color:</label>
      <input
        type="color"
        id="backgroundColor"
        name="backgroundColor"
        value={formData.backgroundColor}
        onChange={handleChange}
      />

      <label htmlFor="width">Width:</label>
      <input
        type="number"
        id="width"
        name="width"
        value={formData.width}
        onChange={handleChange}
      />

      <label htmlFor="height">Height:</label>
      <input
        type="number"
        id="height"
        name="height"
        value={formData.height}
        onChange={handleChange}
      />

      <button>Add new box</button>
    </form>
  );
}

export default NewBoxForm;
