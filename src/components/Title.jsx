import React from 'react';
import PropTypes from 'prop-types';

import style from '../../style/App.css';

const Title = ({ title }) => (
  <h1
    className={style.Title}
  >
    {title}
  </h1>
);

Title.propTypes = {
  title: PropTypes.string.isRequired
};

export default Title;
