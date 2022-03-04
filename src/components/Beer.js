import { Link } from "react-router-dom";

function Beer(props) {
  return (
    <div>
    <hr />
      {props.beers.map((beer) => (
        
          <div key={beer._id}>
          <Link to={`/:_id ${beer._id}`}>
            <img src={beer.image_url} alt="beer" width={50} />
            <h3>Name: {beer.name}</h3> </Link>
            <p>tagline: {beer.tagline}</p>
            <p>Contributed by: {beer.contributed_by}</p>
          </div>
      ))}
    </div>
  );
}

export default Beer;
