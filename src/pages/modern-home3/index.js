import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, A11y } from 'swiper/modules';

// Components
import SectionTitle from '../../component/section-title/section-title';
import { VehicleShowcase3 } from '../../component/car-list';
import Button from '../../component/button/button';
import { CounterstyleThree } from '../../component/counter/counter';
import ClientLogoSection from './client-logo';
import SolutionServicesSection from './solution-services-section';
import HaveQuestionSection from './have-question-section';
import Banner from './banner';

// Assets & Data
import filterBG from '../../assets/images/modern-demo/section-bg-pattern-2.webp';
import sectionBG1 from '../../assets/images/modern-demo/video-bg-image.webp';

// Styles
import './home.scss';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import axios from 'axios';
import apiConfig from '../../fleetease/configs';

function ModernHome3() {
  const [vehicles, setVehicles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const userId =  sessionStorage.getItem('userId');
  console.log("Session Id::",userId)

  useEffect(() => {
    // Fetch vehicles from API
    axios.get(apiConfig.VEHICLE_FETCH)
      .then(response => {
        if (response.data.success) {
          const vehiclesData = response.data.data;

          const updatedVehicles = vehiclesData.map(vehicle => {
            // Parse img_src string into an array
            const imgSrcArray = JSON.parse(vehicle.img_src);
            return {
              ...vehicle,
              imgSrc: imgSrcArray[0], // Use the first image in the array
              lightboxImages: imgSrcArray // Keep the entire array for lightbox or other purposes
            };
          });

          setVehicles(updatedVehicles);
        } else {
          setError('Failed to fetch vehicles');
        }
      })
      .catch(err => {
        console.error('Error fetching vehicles:', err);
        setError('An error occurred while fetching vehicles');
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <div className="site-content homepage">
      <div className="content-wrapper">

        {/* Main Banner */}
        <Banner />

        {/* Feature Car Section */}
        <section className="feature-car section-ptb">
          <Container>
            <Row className="row align-items-center mb-lg-4">
              <Col lg={7}>
                <SectionTitle
                  extraClass="section-title-new mb-0"
                  title="Our Featured Cars"
                  content="FleetEase is a dynamic, innovative, and versatile platform designed to streamline the process of acquiring and refurbishing second-hand vehicles. Perfect for car dealerships, businesses, and corporate environments, FleetEase offers a modern and comprehensive solution for all your automotive needs."
                />
              </Col>
              <Col lg={5} className="text-lg-end mt-4 mt-lg-0">
                <Button btnClass="btn-lg me-3" btnText="All Feature Car" btnURL="/car-grid" />
              </Col>
            </Row>
            <Row>
              <Col lg={12}>
                <div className="grid-wrapper grid-lg-3 grid-md-2 grid-sm-2 grid-xs-1">
                  {loading && <p>Loading vehicles...</p>}
                  {error && <p>{error}</p>}
                  {!loading && !error && vehicles.map(vehicle => (
                    <VehicleShowcase3
                      key={vehicle.id}
                      className="car-item-grid"
                      imgSrc={vehicle.imgSrc} // First image
                      carName={vehicle.vehicle_name}
                      carPrice={vehicle.vehicle_regular_price}
                      carNewPrice={vehicle.vehicle_sale_price}
                      id={vehicle.id}
                      attri={vehicle.attributes}
                      lightboxImages={vehicle.lightboxImages} // Full array of images
                    />
                  ))}
                </div>
              </Col>
            </Row>
          </Container>
        </section>

        {/* Counter Section */}
        <section className="counter-section my-0 my-sm-4">
          <Container>
            <Row className="bg-primary new-counter-box mx-0">
              <Col xl={3} lg={6} md={6}>
                <CounterstyleThree
                  className="counterstyle-03 mb-4"
                  countStart="0"
                  countEnd="400"
                  countSuffix="k"
                  countIcon="glyph-icon flaticon-beetle"
                  countTitle="Vehicles Stock"
                />
              </Col>
              <Col xl={3} lg={6} md={6}>
                <CounterstyleThree
                  className="counterstyle-03 mb-4"
                  countStart="0"
                  countEnd="25"
                  countSuffix="+"
                  countIcon="glyph-icon flaticon-interface"
                  countTitle="Years Experience"
                />
              </Col>
              <Col xl={3} lg={6} md={6}>
                <CounterstyleThree
                  className="counterstyle-03 mb-4"
                  countStart="0"
                  countEnd="3990"
                  countSuffix="+"
                  countIcon="glyph-icon flaticon-circle"
                  countTitle="Satisfied Clients"
                />
              </Col>
              <Col xl={3} lg={6} md={6}>
                <CounterstyleThree
                  className="counterstyle-03 mb-4"
                  countStart="0"
                  countEnd="150"
                  countSuffix="+"
                  countIcon="glyph-icon flaticon-cup"
                  countTitle="Dealer Review"
                />
              </Col>
            </Row>
          </Container>
        </section>

        {/* Client Logo Section */}
        <section className="section-pb">
          <ClientLogoSection />
        </section>

        {/* Solution & Services Section */}
        {/*<section className="section-ptb solution-services-section" style={{ backgroundImage: `url(${sectionBG1})` }}>*/}
        {/*  <div className="section-overlay bg-black" data-overlay-opacity="0.8"></div>*/}
        {/*  <SolutionServicesSection />*/}
        {/*</section>*/}

        {/* Have Questions Section */}
        {/*<section className="have-question-section">*/}
        {/*  <HaveQuestionSection />*/}
        {/*</section>*/}

      </div>
    </div>
  );
}

export default ModernHome3;
