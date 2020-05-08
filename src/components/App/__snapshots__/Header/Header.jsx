import React from 'react';
import Toggle from '../Toggle/Toggle';
import { useToggle, useToggleSwitch } from '../../../../hooks/CharacterProvider';

const Header = () => {
  const toggle = useToggle();
  const toggleSwitch = useToggleSwitch();
    

  return (
    <header>
      <h1>Rick And Morty Characters</h1>
      <Toggle value={toggleSwitch === 'light'} toggle={toggle} />
    </header>
  );
};

export default Header;
