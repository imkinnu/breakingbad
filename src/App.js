import React, { useState, useEffect } from 'react';
import Header from './components/UI/Header';
import axios from 'axios';
import CharacterGrid from './components/Characters/CharacterGrid'
import Search from './components/UI/Search';
import Modal from './components/UI/Modal'
import Container from './components/UI/Container/Container';
import MainWrapper from './components/UI/MainWrapper/MainWrapper';
import Sidebar from './components/UI/Sidebar/Sidebar'
import Row from './components/UI/Row/Row';
import Col from './components/UI/Col/Col';
import Navbar from './components/UI/Navbar/Navbar';
import Card from './components/UI/Card/Card';
import Cardbody from './components/UI/Card/Cardbody/Cardbody';
import './App.css';
import Cardheader from './components/UI/Cardheader/Cardheader';
import Image from './components/UI/Image/Image';
import Episodes from './components/Episodes/Episodes';
import { BrowserRouter as Router, Link, useLocation } from 'react-router-dom';
import Route from 'react-router-dom/Route';
import Home from './components/Home/Home';
import Quotes from './components/Quotes/Quotes';
import Deaths from './components/Deaths/Deaths';

const App = () => {
  const [items, setItems] = useState([]);
  const [singleItem, setSingleItem] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [query, setQuery] = useState('');
  const [menuItems, setMenuItems] = useState([]);
  const [active, setActive] = useState('');

  //works like componenDidUpdate()
  useEffect(() => {
    const fetchItems = async () => {
      //axios returns a promise so await is used
      const result = await axios(`https://www.breakingbadapi.com/api/characters?name=${query}`);
      setItems(result.data);
      setIsLoading(false);
    }


    const getMenuItems = async () => {
      const result = await axios(`https://www.breakingbadapi.com/api/`)
      setMenuItems(Object.keys(result.data));
    }

    fetchItems();
    getMenuItems();
  }, [query])


  const updateState = (v) => {
    setSingleItem(v);
  }
  return (
    // <Container>
    //   <Header />
    //   <Search getQuery={(q) => setQuery(q)} />
    //   <CharacterGrid isLoading={isLoading} items={items} setSingleItem={(value) => updateState(value)} />
    //   <Modal item={singleItem} />
    // </Container >
    < Router >
      <React.Fragment>
        <Locationtrack setActive={setActive} />
        <Navbar >
          <Container>
            <a className="navbar-brand" href="#!">Breaking Bad</a>
            <Image source="./assets/images/logo.png" height="50px" width="75px" alt="Logo" />
            <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse"
              data-target=".navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false"
              aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
          </Container>
        </Navbar>
        <MainWrapper>
          <Container>
            <Row className="mt-3">
              <Col className="lg-3">
                <Link to="/" className={"list-group-item bg-dark text-white"}>{"Home".toUpperCase()}</Link>
                {menuItems.map(item => {
                  let className = '';
                  if ("/" + item === active) {
                    className = ' active';
                  }
                  return (<Link to={"/" + item} className={"list-group-item bg-dark text-white" + className} > {item.toUpperCase()}</Link>)
                })}
              </Col>
              <Route path='/characters' render={
                //in future instead of render here use component.put the below return content in a seperate file and use component attribute here
                () => {
                  return (
                    <Col className="lg-9">
                      <Card className="vh-90 overflow-auto mb-5">
                        <Cardheader className="bg-dark text-white" >
                          <h6>Characters</h6>
                        </Cardheader>
                        <Cardbody>
                          <Search getQuery={(q) => setQuery(q)} className="mb-4" />
                          <Row className="">
                            <CharacterGrid isLoading={isLoading} items={items} setSingleItem={(value) => updateState(value)} />
                          </Row>
                        </Cardbody>
                      </Card>
                    </Col>)
                }
              } />
              <Route path="/" exact strict component={Home} />
              <Route path='/episodes' component={Episodes} />
              <Route path='/quotes' component={Quotes} />
              <Route path="/deaths" component={Deaths} />
            </Row>
          </Container >
          <Modal item={singleItem} />
        </MainWrapper>
      </React.Fragment >
    </Router >
  );
}

let Locationtrack = ({ setActive }) => {
  let location = useLocation();
  if (location.pathname !== '') {
    setActive(location.pathname);
  }
  return null;
}

export default App;
