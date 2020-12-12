import React from 'react';

import s from './Filter.module.css';

function Filter({ value, onChange }) {
  return (
    <>
      <label className={s.filterLabel}>
        Find contact by name
        <input
          type="text"
          value={value}
          onChange={onChange}
          placeholder="Enter name to filter"
        />
      </label>
    </>
  );
}

export default Filter;
