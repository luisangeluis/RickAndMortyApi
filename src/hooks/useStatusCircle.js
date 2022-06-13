import React, { useEffect, useState } from 'react';

const useStatusCircle = (status) => {
  const [stat, setStat] = useState();

  useEffect(() => {
    if (status == 'Alive') setStat('green');
    if (status == 'Dead') setStat('red');
  }, [status]);

  return [stat];
};

export default useStatusCircle;
