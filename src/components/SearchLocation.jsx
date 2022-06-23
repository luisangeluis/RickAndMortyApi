import axios from 'axios';
import React, { useEffect, useState } from 'react';

const SearchLocation = ({ setNameToSearch, locs, setLocation }) => {
  const [options, setOptions] = useState();

  useEffect(() => {
    if (locs) {
      setOptions(locs);
    }
  }, [locs]);

  const searchName = (e) => {
    e.preventDefault();
    // let value = e.target.children[0].children[0].value;
    let value = e.target.value;
    console.log('hola', value);

    setNameToSearch(value);
  };

  const setLocToSearch = (e) => {
    e.preventDefault();
    console.log(e.target[0].value);
    let name = e.target[0].value;

    axios
      .get(`https://rickandmortyapi.com/api/location/?name=${name}`)
      .then((res) => {
        console.log(res.data.results[0]);
        setLocation(res.data.results[0]);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // console.log(locs);

  return (
    <div className="row justify-content-center align-items-end">
      <div className="col-8">
        <div className="card text-center bg-dark text-white">
          <div className="card-body">
            <form
              onSubmit={setLocToSearch}
              className="d-flex justify-content-center align-items-center flex-column flex-sm-row"
            >
              <div className="flex-grow-1 mb-1 mb-sm-0">
                <input
                  type="text"
                  className="form-control form-control-lg"
                  id="inputSearch"
                  placeholder="type a location name"
                  list="options"
                  onChange={searchName}
                />
                <datalist id="options">
                  {options &&
                    options.map((option) => (
                      <option key={option.id} value={option.name} />
                    ))}
                </datalist>
              </div>
              <div>
                <button className="btn-lg">Search</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchLocation;
