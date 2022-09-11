import React,{useState} from 'react'
import './App.css';
import AddKeeper from './components/addKeeper/AddKeeper';
import Header from './components/header/Header';
import ShowKeeper from './components/show keeper/ShowKeeper';

function App() {
  const [keeperList, setKeeperList] = useState([])
  return (
    <div className="App">
     <Header/>
     <ShowKeeper/>
     <AddKeeper/>
    </div>
  );
}

export default App;
