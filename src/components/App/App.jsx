import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import CharactersPage from '../../containers/CharacterPage/CharacterPage';
import CharacterDetailContainer from '../../containers/CharacterDetailContainer/CharacterDetailContainer';


export default function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={CharactersPage} />
        <Route exact path="/:id" component={CharacterDetailContainer} />
      </Switch>
    </Router>
  );
}
