import React from 'react';
import PropTypes from 'prop-types';

let Filter = ({ handleChangeFilter }) => {
  return (
    <section>
      <label>
        Find contacts by name
        <input
          onChange={e => handleChangeFilter(e.target.value)}
          name="filter"
          type="text"
        />
      </label>
    </section>
  );
};

Filter.propTypes = {
  handleChangeFilter: PropTypes.func,
  filter: PropTypes.string,
};
export default Filter;
