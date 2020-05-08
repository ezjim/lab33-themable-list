import React, { useState, useEffect } from 'react';
import Characters from '../../components/App/Characters/Characters';
import { fetchCharacters } from '../../services/fetch';

const CharactersPage = () => {
  const [page, setPage] = useState(1);
  const [characters, setCharacters] = useState([]);

  // componentDidMount
  useEffect(() => {
    fetchCharacters(page)
      .then(fetchedCharacters => setCharacters(fetchedCharacters));
  }, [page]);

  const changePage = by => setPage(prevPage => prevPage + by);

  return (
    <>
      <button onClick={() => changePage(-1)} disabled={page === 1}>&lt;</button>
      <button onClick={() => changePage(1)} disabled={characters.length < 20}>&gt;</button>
      <Characters characters={characters} />
    </>
  );
};
export default CharactersPage;
