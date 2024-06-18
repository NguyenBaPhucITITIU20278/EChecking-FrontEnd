// src/components/Warning.jsx
import React from 'react';

const Warning = ({ setWarning }) => {
  return (
    <div>
      <p>There was a problem with your submission. Please check your entries and try again.</p>
      <button onClick={() => setWarning(false)}>Close</button>
    </div>
  );
};

export default Warning;