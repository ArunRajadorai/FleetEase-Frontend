import React, { useEffect, useState } from 'react';

// Libraries
import { Col, Container, Row } from 'react-bootstrap';

// Layouts
import PageHeader from '../../layouts/page-header/PageHeader';

// Components
import VehicleShowcase1, { VehicleShowcase3 } from '../../component/car-list';

// Page Section
import CarPriceSearchBox from '../../template/car-price-search';
import CarListingSidebar from '../../template/car-listing-sidebar';

// Site Data
import axios from 'axios';
import apiConfig from '../../fleetease/configs';

function CarGrid() {

      const [vehicles, setVehicles] = useState([]);
      const [loading, setLoading] = useState(true);
      const [error, setError] = useState(null);
      const [filters, setFilters] = useState({}); // State to hold filters
      const [isFilterApplied, setIsFilterApplied] = useState(false); // Track if filter has been applied


      useEffect(() => {
        if (isFilterApplied) {
          fetchFilteredVehicles(filters); // Fetch filtered vehicles if the filter is applied
        } else {
          fetchVehicles(); // Fetch all vehicles otherwise
        }
      }, [filters, isFilterApplied]);
          console.log("filters",filters)
          const fetchFilteredVehicles = (filters) => {
            setLoading(true);
            axios.post(apiConfig.SEARCH_FILTER,  filters )
              .then(response => {
                if (response.data.success) {
                  const vehiclesData = response.data.data;
                  console.log(vehiclesData)
                  const updatedVehicles = vehiclesData.map(vehicle => {
                    const imgSrcArray = JSON.parse(vehicle.img_src);
                    return {
                      ...vehicle,
                      imgSrc: imgSrcArray[0], // Use the first image as the main display image
                      lightboxImages: imgSrcArray // Store all images for a lightbox gallery
                    };
                  });
                  setVehicles(updatedVehicles);
                } else {
                  setError(<span className="text-bg-danger">No vehicles found for the selected filters</span>);
                }
              })
              .catch(err => {
                setError('An error occurred while fetching filtered vehicles');
              })
              .finally(() => {
                setLoading(false);
              });
          };

      const fetchVehicles = () => {
        setLoading(true);
        axios.get(apiConfig.VEHICLE_FETCH,)
          .then(response => {
            if (response.data.success) {
              const vehiclesData = response.data.data;
              const updatedVehicles = vehiclesData.map(vehicle => {
                const imgSrcArray = JSON.parse(vehicle.img_src);
                return {
                  ...vehicle,
                  imgSrc: imgSrcArray[0],
                  lightboxImages: imgSrcArray
                };
              });
              setVehicles(updatedVehicles);
            } else {
              setError('Failed to fetch vehicles');
            }
          })
          .catch(err => {
            setError('An error occurred while fetching vehicles');
          })
          .finally(() => {
            setLoading(false);
          });
      };

  return (
    <>
      <div className="site-content">
        <PageHeader
          title="Car Listing"
          breadCrumbItems={[
            { label: 'Home', path: '/' },
            { label: 'Pages', path: '#' },
            { label: 'Car Listing', path: '#', active: true },
          ]}
        />
        <div className="content-wrapper">
          <section className="blog section-ptb">
            <Container>
              <Row>
                <Col lg={3} md={4}>
                  <CarListingSidebar
                  setFilters={(filters) => {
                    setFilters(filters);
                    setIsFilterApplied(true); // Mark that filters have been applied
                  }}
                />
                </Col>
                <Col lg={9} md={8}>
                  {/*<CarPriceSearchBox />*/}
                  <div className="grid-wrapper grid-lg-3 grid-md-3 grid-sm-2 grid-xs-1">
                   {loading ? <p>Loading...</p> : error ? <p>{error}</p> : vehicles.map((vehicle) => (
                      <VehicleShowcase3
                        key={vehicle.id}
                        className="car-item-grid"
                        imgSrc={vehicle.imgSrc}
                        carName={vehicle.vehicle_name}
                        carPrice={vehicle.vehicle_regular_price}
                        carNewPrice={vehicle.vehicle_sale_price}
                        id={vehicle.id}
                        attri={vehicle.attributes}
                        lightboxImages={vehicle.lightboxImages}
                      />
                    ))}
                  </div>
                </Col>
              </Row>
            </Container>
          </section>
        </div>
      </div>
    </>
  );
}

export default CarGrid;
