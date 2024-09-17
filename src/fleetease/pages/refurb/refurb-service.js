import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import SectionTitle from '../../../component/section-title/section-title';
import InfoBox from '../../../component/infobox';
import NewsletterForm from '../../../form/newsletter';
import WhyChooseSection from './why-choose-section';
import newsletterImg from '../../../assets/images/fleetEase/add_car.jpg';
import PageHeader from '../../../layouts/page-header/PageHeader';
import Button from 'react-bootstrap/Button';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import RefurbishmentForm from '../../form/refurbform';
import apiConfig from '../../../fleetease/configs'

  const buyer_id =  sessionStorage.getItem('userId');
  console.log(" Refurb SessionId :",buyer_id)
  const fetchVehicles = async (buyer_id) => {
    try {
      const response = await fetch(apiConfig.BUYER_VEHICLES, { // Adjust the endpoint as needed
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ buyer_id }), // Send buyerId as JSON
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const vehicles = await response.json();
      console.log(vehicles)
      return vehicles.data;
    } catch (error) {
      console.error('Error fetching vehicles:', error);
      return []; // Return an empty array in case of error
    }
  };

function RefurbishmentPage() {
  const [vehicles, setVehicles] = useState([]);

  useEffect(() => {
    const loadVehicles = async () => {
      if (buyer_id) { // Ensure there's a valid buyerId before fetching
        const vehiclesData = await fetchVehicles(buyer_id);
        setVehicles(vehiclesData);
      }
    };

    loadVehicles();
  }, [buyer_id]); // Fetch vehicles whenever buyerId changes

  return (
    <>
      <div className="site-content">
        <PageHeader
          title="Vehicle Refurbishment Services"
          breadCrumbItems={[
            { label: 'Home', path: '/' },
            { label: 'Pages', path: '#' },
            { label: 'Refurbishment', path: '#', active: true },
          ]}
        />
        <div className="site-content refurbishment-page">
          <div className="content-wrapper">
            {/* Infobox Section */}
            <section className="section-ptb bg-gradient-grey">
              <Container>
                <Row className="row align-items-center mb-lg-4">
                  <Col lg={6}>
                    <SectionTitle
                      extraClass="section-title-new"
                      title="Why FleetEase for Your Refurbishment Needs?"
                      content="FleetEase is a cutting-edge, creative, and versatile web platform designed to streamline the process of acquiring and refurbishing second-hand vehicles. Ideal for car dealerships, businesses, and corporate websites, FleetEase offers an all-in-one solution that combines modern features with user-friendly design."
                    />
                    <NewsletterForm
                      newsLetterStyle="newsletter-style-3"
                      buttontext="Request Refurbishment"
                    />
                  </Col>
                  <Col lg={6} className="mt-4 mt-lg-0">
                    <img className="img-fluid" src={newsletterImg} alt="Newsletter" />
                  </Col>
                </Row>
                <Row>
                  <Col lg={12}>
                    <div className="grid-wrapper grid-lg-3 grid-md-2 grid-sm-1 grid-xs-1 mt-4">
                      <InfoBox
                        className="infobox-shadow"
                        infoStyle="style-2"
                        icontype="default"
                        iconshape="default"
                        icon="glyph-icon flaticon-air-conditioning"
                        title="Comprehensive Services"
                        description="We provide a full range of refurbishment services to ensure your highest standards."
                      />
                      <InfoBox
                        className="infobox-shadow"
                        infoStyle="style-2"
                        icontype="default"
                        iconshape="default"
                        icon="glyph-icon flaticon-alloy-wheel"
                        title="Experienced Technicians"
                        description="Our team of skilled technicians uses advanced techniques to address all your vehicle's needs."
                      />
                      <InfoBox
                        className="infobox-shadow"
                        infoStyle="style-2"
                        icontype="default"
                        iconshape="default"
                        icon="glyph-icon flaticon-customer-service"
                        title="Customer Satisfaction"
                        description="We prioritize your satisfaction and ensure that every refurbishment is done to your exact specifications."
                      />
                    </div>
                  </Col>
                </Row>

                <Row style={{ marginTop: '40px' }}><Col>
                <RefurbishmentForm vehicles={vehicles}/>
                  </Col>
                </Row>

              </Container>
            </section>

          </div>
        </div>
      </div>
    </>
  );
}

export default RefurbishmentPage;
