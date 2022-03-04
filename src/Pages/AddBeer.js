import axios from "axios";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Header from "../components/Header";

function AddBeer() {
  const [formData, setFormData] = useState({});
  const params = useParams();
  const navigate = useNavigate();

  function handleSubmit(event){
    event.preventDefault()
    axios.post('https://ih-beers-api2.herokuapp.com/beers/new', formData)
    .then((newData)=> navigate("/beers"))
    .catch((error)=> console.log(error));
  }

  function handleChange(event){
    const inputName = event.target.name;
    const value = event.target.value;
    setFormData((formData)=> {
      return { ...formData, [inputName]: value}
    })
  }
   
  return (
    <div>
      <Header />
      <h3>Create a Beer</h3>  
        <form onSubmit={handleSubmit}>
          <label>Name</label>
          <input type="text" name="name" onChange={handleChange} value={formData.name} />
          <label>tagline</label>
          <input type="text" name="tagline" onChange={handleChange} value={formData.tagline} />
          <label>description</label>
          <input type="text" name="description" onChange={handleChange} value={formData.description} />
          <label>first_brewed</label>
          <input type="text" name="first_brewed" onChange={handleChange} value={formData.first_brewed} />
          <label>brewers_tips</label>
          <input type="text" name="brewers_tips" onChange={handleChange} value={formData.brewers_tips} />
          <label>attenuation_level</label>
          <input type="number" name="attenuation_level" onChange={handleChange} value={formData.attenuation_level} />
          <label>contributed_by</label>
          <input type="text" name="contributed_by" onChange={handleChange} value={formData.contributed_by} />
         
          <button type="submit">Create</button>
        </form>
      
    </div>
  );
}

export default AddBeer;
