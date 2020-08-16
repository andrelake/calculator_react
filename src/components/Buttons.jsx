import React from 'react';

import './Button.css';

export default function Buttons({ label }) {
  return (
    <>
      <button className="button">{label}</button>
    </>
  );
}
