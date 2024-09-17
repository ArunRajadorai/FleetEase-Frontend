import React, { useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import Select from 'react-select';
import { useNavigate } from 'react-router-dom';
import { CarMakes, CarModels, CarYears } from '../../fleetease/components/MainPageFilter/car-info'; // Adjust the path as needed
import PriceRangeSlider from '../../component/range-slider/range-slider';
import axios from 'axios'; // Make sure to install axios if not already installed
import apiConfig from '../../fleetease/configs'; // Adjust the path to your API config

import '../../component/search/search.scss';

function CustomFiltersVerticle(props) {
  const [selectedMake, setSelectedMake] = useState(null);
  const [selectedModel, setSelectedModel] = useState(null);
  const [selectedYear, setSelectedYear] = useState(null);
  const [priceRange, setPriceRange] = useState([0, 7000]); // Example range

  const navigate = useNavigate();

  const handleMakeChange = (selectedOption) => {
    setSelectedMake(selectedOption);
    setSelectedModel(null); // Reset model when make changes
  };

  const handleSearch = async (e) => {
    e.preventDefault();

    const filters = {
      make: selectedMake ? selectedMake.value : null,
      model: selectedModel ? selectedModel.value : null,
      year: selectedYear ? selectedYear.value : null,
      minPrice: priceRange[0],
      maxPrice: priceRange[1],
    };
    console.log("Filters to Backend",filters)
    try {
      const response = await axios.post(`${apiConfig.SEARCH_FILTER}`, filters);
      if (response.data.success) {
        // Pass the search results to the car grid page (using state or as URL params)
        navigate('/filter-cargrid', { state: { cars: response.data.data } });
      } else {
        console.error('Search failed:', response.data.message);
      }
    } catch (error) {
      console.error('Error during search:', error);
    }
  };

  const modelsOptions = selectedMake ? CarModels[selectedMake.value] : [];

  return (
    <div className={`custom-filters search-block-verticle ${props.className || ''}`}>
      <h5 className="search-block-title">Find Your Dream Car</h5>
      <form className="search-box" onSubmit={handleSearch}>
        <Row>
          <Col lg={12}>
            <Select
              options={CarMakes}
              value={selectedMake}
              onChange={handleMakeChange}
              placeholder="Make"
            />
          </Col>
          <Col lg={12}>
            <Select
              options={modelsOptions}
              value={selectedModel}
              onChange={setSelectedModel}
              placeholder="Model"
              isDisabled={!selectedMake}
            />
          </Col>
          <Col lg={12}>
            <Select
              options={CarYears}
              value={selectedYear}
              onChange={setSelectedYear}
              placeholder="Year"
            />
          </Col>
          <Col lg={12}>
            <div className="price-slide">
              <PriceRangeSlider
                label="Price Range :"
                value={priceRange}
                onChange={setPriceRange}
              />
            </div>
          </Col>
          <Col lg={12}>
            <div className="price-btn">
              <button type="submit" className="button">
                Search Inventory
              </button>
            </div>
          </Col>
        </Row>
      </form>
    </div>
  );
}

export default CustomFiltersVerticle;
