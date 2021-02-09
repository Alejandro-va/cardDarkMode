import React from 'react';
import './Globals.css';
import './Header.css';
import Header from './Header';
import TopCardList from './Top-card-list';
import Overview from './Overview';
import Switch from './Switch'

function App() {
  return (
  <>
    <Header >
        <Switch/>
    </Header>

    <TopCardList />
    
    <Overview/>
  </>
  )
}

export default App;
