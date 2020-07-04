import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './components/UI/Header';
import axios from 'axios';
import CharacterGrid from './components/Characters/CharacterGrid'
import Search from './components/UI/Search';

const App = () => {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [query, setQuery] = useState('');


  //works like componenDidUpdate()
  useEffect(() => {
    const fetchItems = async () => {
      //axios returns a promise so await is used
      const result = await axios(`https://www.breakingbadapi.com/api/characters?name=${query}`);
      setItems(result.data);
      setIsLoading(false);
    }
    fetchItems();
  }, [query])

  return (
    <div className="container">
      <Header />
      <Search getQuery={(q) => setQuery(q)} />
      <CharacterGrid isLoading={isLoading} items={items} />
    </div>
  );
}

export default App;
