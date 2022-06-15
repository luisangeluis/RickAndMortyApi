import React from 'react';
import ResidentInfo from './ResidentInfo';

const ResidentList = ({ loc }) => {
  return (
    <div className="resident-list">
      <div className="container">
        <div className="row">
          {loc.residents.map((resident) => (
            <ResidentInfo url={resident} key={resident} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ResidentList;
