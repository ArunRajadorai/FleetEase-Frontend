import React from 'react';

// Libraries
import { Link } from 'react-router-dom';
import { Col, Container, Row } from 'react-bootstrap';

// Components
import AppButton from '../../component/app-button/app-button.js';
import CustomFiltersVerticle from '../../form/custom-filters/form-verticle.js';

// Site Data
import BannerImg from '../../assets/images/banner/modern-home3/FleetEaseBanner.png';

function Banner() {
  return (
    <>
      <section className="modern-banner-3" style={{
              backgroundImage: `url(${BannerImg})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
            }}>
        <div className="section-overlay bg-black" data-overlay-opacity="0.5"></div>
        <Container>
          <Row className="align-items-center banner-bg">
            <Col lg={7}>
              <div className="banner-content">
                <h2 className="text-white">Discover What You Need</h2>
                <h3 className="text-white">Explore our comprehensive platform designed to streamline second-hand vehicle transactions with FleetEase</h3>
                <p className="text-white">FleetEase is a cutting-edge, creative, and versatile web platform designed to streamline the process of acquiring and refurbishing second-hand vehicles</p>
              {/*  <AppButton*/}
              {/*      appleBtnColor="theme2" appleBtn={true} appleURL="/"*/}
              {/*      androidBtnColor="theme2" androidBtn={true} androidURL="/home-2"*/}
              {/*  />*/}
              {/*  <p className="text-dec">Want to learn more about us?<Link to="#">Click here <i className="fa-solid fa-circle-arrow-right"></i></Link></p>*/}
              </div>
            </Col>
            <Col lg={5}>
              <CustomFiltersVerticle />
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}

export default Banner;
