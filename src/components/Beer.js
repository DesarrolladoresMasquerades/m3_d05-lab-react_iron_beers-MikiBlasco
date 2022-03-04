import { Link } from "react-router-dom";

function Beer(props) {
  return (
    <div>
      {props.beers.map((beer) => (
        <Link to={`/apartments/${beer._id}`}>
          <div key={beer._id}>
            <img src={beer.img} alt="beer" />
            <h3>Name: {beer.name}</h3>
            <p>tagline: {beer.tagline}</p>
            <p>Contributed by: {beer.contributed_by}</p>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default Beer;
