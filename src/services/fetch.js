export const fetchCharacters = (page = 1) => {
  return fetch(`https://rickandmortyapi.com/api/character?page=${page}`)
    .then(res => res.json())
    .then(json => json.results.map(({ id, name, species, status, image }) => ({
      id,
      name,
      description: `This character is a ${species} and is ${status}`,
      image: image.includes('Maxresdefault.jpg') ? 'http://www.placecage.com/c/200/300' : image
    })));
};

export const fetchCharacter = id => {
  return fetch (`https://rickandmortyapi.com/api/character/${id}`)
    .then(res => res.json())
    .then(json => ({
      name: json.name,
      status: json.status,
      species: json.species,
      image: json.image,
      origin: json.origin.name
    }));
};
