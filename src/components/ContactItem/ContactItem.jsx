import PropTypes from 'prop-types';

export const ContactItem = ({ name, number }) => (
  <li>
    <p>
      {name}: {number}
    </p>
  </li>
);

ContactItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};
