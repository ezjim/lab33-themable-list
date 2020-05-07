import { createContext } from "react";
import PropTypes from 'prop-types';
import { fetchCharacters } from "../services/fetch";

const CharacterContext = createContext()

const getData = {
  characters: fetchCharacters
};

export const CharacterProvider = ({ children }) => {
  const [chars, setChars] = useState('characters');
}