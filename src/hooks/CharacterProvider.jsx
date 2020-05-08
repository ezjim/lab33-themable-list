import React, { createContext, useState, useContext } from 'react';
import PropTypes from 'prop-types';


const ToggleSwitch = createContext();

export const ToggleSwitchProvider = ({ children }) => {
  const [toggleOn, setToggleOn] = useState('lights on');

  const toggle = ({ target }) => {
    if(target.checked) setToggleOn('lights on');
    if(!target.checked) setToggleOn('lights off');
  };

  return (
    <ToggleSwitch.Provider value={{ toggleOn, toggle }}>
      {children}
    </ToggleSwitch.Provider>
  );
};
//specify that anything renderable 
ToggleSwitchProvider.propTypes = {
  children: PropTypes.node
};
//useContext hook allows passing data to children elements without using redux

export const useToggle = () => {
  const { toggle } = useContext(ToggleSwitch);
  return toggle;
};

export const useToggleSwitch = () => {
  const { toggleOn } = useContext(ToggleSwitch);
  return toggleOn;
};
