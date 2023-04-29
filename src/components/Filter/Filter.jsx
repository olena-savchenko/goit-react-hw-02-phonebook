import PropTypes from 'prop-types';

export const Filter = ({ filter, onChangeFilter }) => {
  return (
    <label htmlFor="">
      Find contacts by name
      <input
        type="text"
        name="filter"
        value={filter}
        onChange={onChangeFilter}
      />
    </label>
  );
};

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  onChangeFilter: PropTypes.func.isRequired,
};
