import React from 'react';

// Libraries
import { A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Col, Container, Row, Badge } from 'react-bootstrap';

// Site Data
import ClientNameList from '../../data/client-logo-list';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

function ClientLogoSection() {
  return (
    <>
      <Container>
        <Row>
          <Col md={12}>
            <div className="divider-separator">
              <span className="separator-1">
                <span className="separator-line"></span>
              </span>
              <h4 className="separator-title">Our Partners &amp; Supporters</h4>
              <span className="separator-1">
                <span className="separator-line"></span>
              </span>
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            <Swiper
              modules={[A11y]}
              spaceBetween={30}
              slidesPerView={5}
              loop={true}
              breakpoints={{
                0: {
                  slidesPerView: 2,
                },
                400: {
                  slidesPerView: 2,
                },
                570: {
                  slidesPerView: 3,
                },
                768: {
                  slidesPerView: 4,
                },
                992: {
                  slidesPerView: 5,
                },
              }}
            >
              {ClientNameList.map((val, ind) => (
                <SwiperSlide key={ind}>
                  <Badge
                    bg="danger"
                    style={{
                      fontSize: '16px',
                      fontWeight: 'bold',
                      padding: '10px 15px',
                      textAlign: 'center',
                    }}
                  >
                    {val.name}
                  </Badge>
                </SwiperSlide>
              ))}
            </Swiper>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default ClientLogoSection;
