import axios from "axios";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

export default function BeerDetailsPage() {
  const [beer, setBeer] = useState({});
  const params = useParams()
  const navigate = useNavigate()

  useEffect(()=>{
    axios
    .get(`https://ih-beers-api2.herokuapp.com/beers/${params.beerId}`)
    .then((response)=> setBeer(response.data))
    .catch((error)=> console.log(error));
  }, [params.beerId]);

  return beer._id ? (
    <div key={beer._id}>
      <hr />
      <img src={beer.image_url} alt="beer" width={150} />
      <h3>{beer.name}</h3>
      <p>{beer.first_brewed}</p>
      <p>{beer.attenuation_level}</p>
      <p>{beer.description}</p>
      <p>{beer.contributed_by}</p>
      <button onClick={()=> navigate(`/beers/${beer._id}/edit `)}> Edit beer </button>
    </div>
  ) : (
    <div>Loading the beer data</div>
  );
}