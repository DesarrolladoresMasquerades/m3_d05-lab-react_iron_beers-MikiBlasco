import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import Beer from "../components/Beer";
import Header from "../components/Header";

function BeersPage() {
  const [beers, setBeers] = useState([]);

  useEffect(() => {
    axios.get("https://ih-beers-api2.herokuapp.com/beers").then((response) => {
      setBeers(response.data);
      console.log("response.data=========", response.data);
      console.log("beers ======", beers);
    });
  }, []);

  return (
    <div> 
      <Header />
      <Beer beers={beers} />
    </div>
  );
}

export default BeersPage;
