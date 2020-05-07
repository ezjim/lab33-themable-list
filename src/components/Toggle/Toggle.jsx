import React from 'react';
import PropTypes from 'prop-types';

const Toggle = ({ toggle, value }) => (
  <section>
    {/* <section className={styles.Toggle}> */}
    <input id="toggle" type="checkbox" checked={value} onChange={toggle} />
    <label htmlFor="toggle"></label>
  </section>
);

Toggle.propTypes = {
  toggle: PropTypes.func.isRequired,
  value: PropTypes.bool.isRequired
};

export default Toggle;
