import React, { useEffect, useState } from 'react';
import useStatusCircle from '../hooks/useStatusCircle';

const StatusCircle = ({ status }) => {
  const [stat] = useStatusCircle(status);

  return (
    <>
      <span
        className={`status-circle`}
        style={{ backgroundColor: stat }}
      ></span>
    </>
  );
};

export default StatusCircle;
