import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import SectionTitle from '../../../component/section-title/section-title';
import InfoBox from '../../../component/infobox';

function WhyChooseSection(props) {
  return (
    <>
      <Container>
        <Row className="align-items-center">
          <Col lg={6}>
            <div className="car-services">
              <SectionTitle
                extraClass="section-title-new section-title-light"
                title="Why Choose Our Refurbishment Services?"
                content="FleetEase is dedicated to providing top-notch refurbishment services for your second-hand vehicles. Our experienced team ensures that each vehicle receives meticulous attention to detail, enhancing performance and value."
              />
              <InfoBox
                className="infobox-light mt-4"
                infoStyle="style-2"
                icontype="flat"
                iconshape="round"
                icon="glyph-icon flaticon-brake-pad"
                title="Comprehensive Brake Checks"
                description="Thorough inspection and replacement of brake pads to ensure safety and reliability."
              />
              <InfoBox
                className="infobox-light mt-4"
                infoStyle="style-2"
                icontype="flat"
                iconshape="round"
                icon="glyph-icon flaticon-oil-change"
                title="Oil Replacement"
                description="High-quality oil replacement to maintain engine performance and longevity."
              />
              <InfoBox
                className="infobox-light mt-4"
                infoStyle="style-2"
                icontype="flat"
                iconshape="round"
                icon="glyph-icon flaticon-inspection"
                title="Detailed Vehicle Inspection"
                description="In-depth inspection to identify and address minor issues, ensuring your vehicle operates optimally."
              />
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default WhyChooseSection;
