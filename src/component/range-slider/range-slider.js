import React from 'react';
import RangeSlider from 'rsuite/RangeSlider';
import './range-slider.scss';

function PriceRangeSlider({ label, value = [1000, 20000], onChange }) {

  const handleRanges = (value) => {
    if (onChange) {
      onChange(value); // Notify parent component of the change
    }
  };

  return (
    <div className="price pricerangeslider">
      <div className="price-wrapper">
        {label && <label className="form-label">{label}</label>}
        <div className="price-value">
          <span className="first-value">£{value[0]} </span>-{' '}
          <span className="second-value">£{value[1]}</span>
        </div>
      </div>

      <RangeSlider
        value={value}
        onChange={handleRanges}
        min={1000} // Start from 1000
        max={20000} // End at 7000
        step={100} // Increment by 100
        tooltip={false}
      />
      <br />
    </div>
  );
}

export default PriceRangeSlider;
