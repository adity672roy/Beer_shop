import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Search from "../components/Search";


const Searched = () => {
  const [searched, setSearched] = useState([]);
  let params = useParams();

  const getSearched = async (name) => {
    const res = await fetch(`https://api.punkapi.com/v2/beers?beer_name=${name}`);
    const dt = await res.json();
    setSearched(dt);
    console.log(dt);
  };

  useEffect(() => {
    getSearched(params.search);
  }, [params.search]);

  return (
    <>
    <div>
      <Search></Search>
    </div>
      <div className="container  ">
        <div className="mx-2 row">
          {searched.map((search) => (
            <div key={search.id} className="col-4 mb-3">
              <div className="card h-100 ">
                <img
                  src={search.image_url}
                  className="card-img-top image"
                  alt={search.name}
                />
                <div className="card-body">
                  <h5 className="card-title">{search.name}</h5>
                  <p className="card-text">{search.tagline}</p>
                </div>
                <div className="m-2">
                  <h5 className="btn btn-danger w-100 ">
                  <p className="text-center">Description</p>
                     {search.description}
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

export default Searched;
