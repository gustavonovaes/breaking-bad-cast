import React from 'react';

import './App.css';
import Header from './components/ui/Header';
import CharacterGrid from './components/characters/CharacterGrid';
import { useFetch } from './hooks/useFetch';

const API_BASE_URL = 'https://www.breakingbadapi.com/api';

const App = () => {
  const {
    data: items,
    loading,
    error
  } = useFetch(API_BASE_URL + '/characters');

  return (
    <div className="App container">
      <Header />
      {error && <p className="text-highlight">Oops...</p>}
      <CharacterGrid isLoading={loading} items={items} />
    </div>
  );
}

export default App;
