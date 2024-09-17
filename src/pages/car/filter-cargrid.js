import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Col, Container, Row } from 'react-bootstrap';

// Layouts
import PageHeader from '../../layouts/page-header/PageHeader';

// Components
import {VehicleShowcase3} from '../../component/car-list/index'; // Adjust import path if necessary

// Page Section
import CarPriceSearchBox from '../../template/car-price-search';
import CarListingSidebar from '../../template/car-listing-sidebar';
import FilterListSidebar from './FilterListSidebar';
import FilterListingSidebar from './FilterListSidebar';

function FilterCarGrid() {

    const location = useLocation();
    const vehicles = location.state?.cars || [];

    // Debugging: Initial state of vehicles
    console.log("Initial vehicles from location.state:", vehicles);

    const [vehicles1, setVehicles1] = useState([]);

    useEffect(() => {
        // Debugging: Log before processing vehicles
        console.log("Starting to process vehicles:", vehicles);

        const processedVehicles = vehicles.map(vehicle => {
            let imgSrcArray = [];

            try {
                imgSrcArray = JSON.parse(vehicle.img_src); // Parse img_src from JSON string
            } catch (e) {
                console.error("Failed to parse img_src:", e);
            }

            const processedVehicle = {
                ...vehicle,
                imgSrc: imgSrcArray[0] || '', // Use the first image URL
                lightboxImages: imgSrcArray // Keep the entire array for lightbox
            };

            // Debugging: Log each processed vehicle
            // console.log("Processed vehicle:", processedVehicle);

            return processedVehicle;
        });

        // Debugging: Log after processing all vehicles
        // console.log("All processed vehicles:", processedVehicles);

        setVehicles1(processedVehicles);

        // Debugging: Log state after setting it
        // console.log("Updated vehicles1 state:", vehicles1);
    }, [vehicles]); // Added 'vehicles' as a dependency to ensure correct data processing

    // Debugging: Log before render
    // console.log("Vehicles1 state before rendering:", vehicles1);

    return (
        <div className="site-content">
            <PageHeader
                title="Filter Car Listing"
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
                            {/*<Col lg={3} md={4}>*/}
                            {/*    <FilterListingSidebar />*/}
                            {/*</Col>*/}
                            <Col lg={9} md={8}>
                                {/*<CarPriceSearchBox />*/}
                                <div className="grid-wrapper grid-lg-3 grid-md-3 grid-sm-2 grid-xs-1">
                                    {vehicles1.length > 0 ? (
                                        vehicles1.map((vehicle) => (
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
                                        ))
                                    ) : (
                                        <p>No vehicles match your search criteria.</p>
                                    )}
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </section>
            </div>
        </div>
    );
}

export default FilterCarGrid;
