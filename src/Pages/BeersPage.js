import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import Beer from "../components/Beer";
import Header from "../components/Header";
import Search from "../components/Search";

function BeersPage() {
  const [beers, setBeers] = useState([]);
  const [query, setQuery] =useState("");

  useEffect(() => {
    axios.get("https://ih-beers-api2.herokuapp.com/beers").then((response) => {
      setBeers(response.data);});
  }, []);

  /*function searchBeer(value){

    let searchResult = beers.filter((el)=>{
      return el.name.toLowerCase().includes(value)})

      setBeers(searchResult)
 }*/
  useEffect(() => {
    axios.get(`https://ih-beers-api2.herokuapp.com/beers/search?q=${query}`)
    .then((response) => {
      setBeers(response.data);});
  }, [query])

  const searchBeer = (event)=> {
    setQuery(event.target.value)
  }

  return (
    <div> 
      <Header />
      <Search  query={query} searchBeer={searchBeer}/>
       
      <Beer beers={beers} />

    </div>
  );
}

export default BeersPage;
