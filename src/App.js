import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './components/UI/Header';
import axios from 'axios';
import CharacterGrid from './components/Characters/CharacterGrid'
import Search from './components/UI/Search';
import Modal from './components/UI/Modal'

const App = () => {
  const [items, setItems] = useState([]);
  const [singleItem, setSingleItem] = useState({});
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


  const updateState = (v) => {
    setSingleItem(v);
  }

  return (
    <div className="container">
      <Header />
      <Search getQuery={(q) => setQuery(q)} />
      <CharacterGrid isLoading={isLoading} items={items} setSingleItem={(value) => updateState(value)} />
      <Modal item={singleItem} />
    </div>
  );
}

export default App;
