import React from 'react';

const SearchLocation = ({ setNameSearch }) => {
  const setName = (e) => {
    console.log(e.target.value);
    setNameSearch(e.target.value);
  };

  return (
    <div className="row justify-content-center align-items-end">
      <div className="col-8">
        <div className="card text-center bg-dark text-white">
          <div className="card-body">
            <form className="d-flex justify-content-center align-items-center flex-column flex-sm-row">
              <div className="flex-grow-1 mb-1 mb-sm-0">
                <input
                  type="text"
                  className="form-control form-control-lg"
                  id="inputSearch"
                  placeholder="type a location name"
                  onChange={setName}
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchLocation;
