import { Routes, Route } from 'react-router-dom';
import './App.css';
import HomePage from './Pages/HomePage';
import BeersPage from './Pages/BeersPage';
import AddBeer from './Pages/AddBeer';
import RandomBeersPage from './Pages/RandomBeersPage';
import BeerDetailsPage from './Pages/BeerDetailsPage';


function App() {
  return (
    <div className="App">

    <HomePage />

    <Routes>
      <Route exact path="/beers" element={<BeersPage/>}/>
      <Route exact path="/random-beer" element={<RandomBeersPage/>}/>
      <Route exact path="/beers/:beerId" element={<BeerDetailsPage />} />
      <Route exact path="/new-beer" element={<AddBeer/>}/>
    </Routes>


    
    </div>
  );
}

export default App;
