import React, { useEffect, useState } from 'react';
import useResidentInfo from '../hooks/useResidenteInfo';
import Loader from './Loader';

const ResidentInfo = ({ url }) => {
  const [character] = useResidentInfo(url);

  return character ? (
    <div className="col-md-6">
      <div className="card bg-dark text-white">
        <img src={character.image} alt="" />
        <div className="card-body">
          <div className="card-title"></div>
          <div className="card-text"></div>
        </div>
      </div>
    </div>
  ) : (
    <Loader />
  );
};

export default ResidentInfo;
