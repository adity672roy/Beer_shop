import React, { useEffect, useState } from "react";
import "./home.css";

const Home = () => {
  const [drinks, setDrinks] = useState([]);
  useEffect(() => {
    popular();
  }, []);
  const popular = async () => {
    const api = await fetch("https://api.punkapi.com/v2/beers");
    const data = await api.json();
    console.log(data);
    setDrinks(data);
  };

  return (
    <>
      <div className="container  ">
        <div className="row">
          {drinks.map((drink) => (
            <div key={drink.id} className="col-lg-4 col-md-6 mb-3">
              <div className="card h-100 ">
                <img
                  src={drink.image_url}
                  className="card-img-top image"
                  alt={drink.name}
                />
                <div className="card-body">
                  <h5 className="card-title">{drink.name}</h5>
                  <p className="card-text">{drink.tagline}</p>
                </div>
                <div className="m-2">
                  <h5 className="btn btn-danger w-100 ">
                    PAIR WITH : <br></br>
                    {drink.food_pairing[0]}<br></br>
                    {drink.food_pairing[1]}<br></br>
                    {drink.food_pairing[2]}
                  </h5>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;
