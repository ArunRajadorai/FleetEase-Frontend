import React from 'react';

function CarDetailsGeneralInformation({ description, serviceHistory }) {
  return (
    <div className="car-generalinfo">
      <h6>About this Vehicle</h6>
      <p>{description}</p>

      <h6>Service History</h6>
      <p>{serviceHistory}</p>
    </div>
  );
}

export default CarDetailsGeneralInformation;
