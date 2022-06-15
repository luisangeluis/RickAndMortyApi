import React from 'react';

const Locatio = ({ loc }) => {
  return (
    <div className="row class">
      <div className="col-12 my-2 my-md-3">
        <div className="card bg-dark text-white">
          <div className="title text-center">
            Earth <span className="fw-bolder">{loc.name}</span>
          </div>
          <div className="card-body d-flex flex-column text-center flex-md-row justify-content-evenly ">
            <div className="text p-2">
              Type: <span className="fw-bolder">{loc.type}</span>
            </div>
            <div className="text p-2">
              Dimension: <span className="fw-bolder">{loc.dimension}</span>
            </div>
            <div className="text p-2">
              Population:{' '}
              <span className="fw-bolder">{loc.residents.length}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Locatio;
