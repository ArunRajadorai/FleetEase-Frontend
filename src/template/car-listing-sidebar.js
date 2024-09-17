import React, { useState } from 'react';
import { FormCheck, Button, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import bannerImg from '../../src/assets/images/banner.webp';
import PriceRangeSlider from '../component/range-slider/range-slider';

function CarListingSidebar({ setFilters }) {
  const [active, setActive] = useState(null);  // Track active filter category
  const [selectedFilters, setSelectedFilters] = useState({
    year: '0',  // Default to 'All years' with value 0
    transmission: '',
    priceRange: [1000, 10000], // Default price range
  });

  const handleCheckboxChange = (category, value) => {
    setSelectedFilters(prev => ({
      ...prev,
      [category]: value,
    }));
  };

  const handlePriceChange = (range) => {
    setSelectedFilters(prev => ({
      ...prev,
      priceRange: range,
    }));
  };

  const handleApplyFilters = () => {
    // Create an object that only includes selected filters (non-defaults)
    const appliedFilters = {};

    // Only include year if it's not 'All years' (value '0')
    if (selectedFilters.year !== '0') {
      appliedFilters.year = selectedFilters.year;
    }

    // Only include transmission if it's not the default empty value
    if (selectedFilters.transmission) {
      appliedFilters.transmission = selectedFilters.transmission;
    }

     // Format the priceRange as { minPrice, maxPrice }
  // Extract minPrice and maxPrice from priceRange and add them directly to the object
      const [minPrice, maxPrice] = selectedFilters.priceRange;
      appliedFilters.minPrice = minPrice;
      appliedFilters.maxPrice = maxPrice;

    // Send the formatted filters to the parent
    setFilters(appliedFilters);
  };

  const handleResetFilters = () => {
    const resetFilters = {
      year: '0',  // Reset to 'All years'
      transmission: '',
      priceRange: [1000, 10000],  // Reset price range to default
    };
    setSelectedFilters(resetFilters);
    setFilters({});  // Clear all filters in the parent component
  };

  const SearchListGroup = [
    {
      id: 1,
      item: 'year',
      checklist: [
        { id: 1, name: 'All years', label: 'All years', value: '0' },
        { id: 2, name: '2017', label: '2017', value: '2017' },
        { id: 3, name: '2018', label: '2018', value: '2018' },
        { id: 4, name: '2019', label: '2019', value: '2019' },
        { id: 5, name: '2020', label: '2020', value: '2020' },
        { id: 6, name: '2021', label: '2021', value: '2021' },
        { id: 7, name: '2022', label: '2022', value: '2022' },
        { id: 8, name: '2023', label: '2023', value: '2023' },
        { id: 9, name: '2024', label: '2024', value: '2024' },
      ],
    },
    {
      id: 2,
      item: 'transmission',
      checklist: [
        { id: 1, name: 'All transmissions', label: 'All transmissions', value: '' },
        { id: 2, name: 'Manual', label: 'Manual', value: 'Manual' },
        { id: 3, name: 'Automatic', label: 'Automatic', value: 'Automatic' },
      ],
    },
  ];

  return (
    <div className="listing-sidebar">
      <div className="widget">
        <div className="widget-search">
          <h5 className="title">Advanced Search</h5>
        </div>
        <div className="search-list-group">
          <ul className="list-group">
            {SearchListGroup.map((group) => (
              <li key={group.id} className="list-group-item">
                <Link
                  to="#"
                  className={active === group.id ? 'active' : ''}
                  onClick={() => setActive(group.id)}
                >
                  {group.item}
                </Link>
                <ul>
                  {group.checklist.map((item) => (
                    <li key={item.id}>
                      <FormCheck
                        label={item.label}
                        name={item.name}
                        type="radio"
                        checked={selectedFilters[group.item] === item.value}
                        onChange={() => handleCheckboxChange(group.item, item.value)}
                      />
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </div>

        {/* Price Range Slider */}
        <Row>
          <Col lg={12}>
            <div className="price-slide  px-3">
              <label>Price Range</label>
              <div className="slider"> {/* Add padding on the left and right */}
                <PriceRangeSlider
                  value={selectedFilters.priceRange}
                  onChange={handlePriceChange}
                />
              </div>
            </div>
          </Col>
        </Row>

        <div className="text-center mb-3"> {/* Center the buttons and add top margin */}
          <Button variant="primary" size="sm" onClick={handleApplyFilters} className="me-2">
            Apply Filters
          </Button>
          <Button variant="secondary" size="sm" onClick={handleResetFilters}>
            Reset Filters
          </Button>
        </div>
      </div>
      <div className="widget-banner">
        <img className="img-fluid" src={bannerImg} alt="Banner" />
      </div>
    </div>
  );
}

export default CarListingSidebar;
