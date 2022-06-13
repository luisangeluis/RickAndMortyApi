import React, { useEffect, useState } from 'react';
import useResidentInfo from '../hooks/useResidenteInfo';
import Loader from './Loader';
import StatusCircle from './StatusCircle';

const ResidentInfo = ({ url }) => {
  const [character] = useResidentInfo(url);

  return character ? (
    <div className="col-md-6">
      <div className="card bg-dark text-white my-2 my-md-3">
        <img src={character.image} alt="" />
        <div className="card-body">
          <div className="card-title">{character.name}</div>
          <div className="card-text d-flex align-items-center">
            <StatusCircle status={character.status} />
            {`${character.status} - ${character.species}`}
          </div>
          <div className="card-text">
            Origin: <br />{' '}
            <span className="fw-bolder">{character.origin.name}</span>
          </div>
          <div className="card-text">
            Episodes where appear:
            <br /> <span className="fw-bolder">{character.episode.length}</span>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <Loader />
  );
};

export default ResidentInfo;
