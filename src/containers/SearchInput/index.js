import React, { Component } from 'react';

import Header from '../../components/Header'
import FirstBlock from '../../containers/FirstBlock'
import './style.css';
import SecondBlock from "../SecondBlock";
import Footer from "../Footer";
import WorkTypes from "../WorkTypes";
import ExamplesList from "../ExamplesList";

class SearchInput extends Component {

  render() {
    return (
      <div className="App">
        <Header />
        <FirstBlock />
        <WorkTypes />
        <SecondBlock />
        <ExamplesList />
        {/*<div className='wrapper'>*/}
          {/*<input placeholder='Почему' />*/}
          {/*<button>*/}
            {/*НАЙТИ*/}
          {/*</button>*/}
        {/*</div>*/}
        {/*<div className='wrapper'>*/}
          {/*<input placeholder='Why?' />*/}
          {/*<button>*/}
            {/*GO*/}
        <Footer />

          {/*</button>*/}
        {/*</div>*/}
      </div>
    );
  }
}

export default SearchInput;
