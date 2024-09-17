import React from 'react';
import './CustomerProfileCard.scss'; // Assuming the CSS changes are in this file

function CustomerProfileCard(props) {
  return (
    <>
      <div className={`customer-profile-card ${props.extraClass || ''}`}>
        <div className="customer-info">
          <h6 className="customer-name">{props.customerName}</h6>
          <span className="customer-mobile">{props.customerMobile}</span>
          <span className="customer-email">{props.customerEmail}</span>
        </div>
      </div>
    </>
  );
}

export default CustomerProfileCard;
