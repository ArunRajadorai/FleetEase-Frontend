import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

// Libraries
import { Col, Container, Modal, Row } from 'react-bootstrap';
import { Navigation, A11y, FreeMode, Thumbs } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

// Layouts
import PageHeader from '../../layouts/page-header/PageHeader';

// Components
import '../../component/car-list/carlist.scss';
import FeatureInfo from '../../component/feature-info';
import VehicleShowcase1 from '../../component/car-list';
import TabsPGS from '../../component/tabs/tabs';

// Template
import CarDetailsGeneralInformation from '../../template/car-detail-general-information';

// Form
import EnquiryForm from '../../form/enquiry-form';

// Widget
import { SocialInfo03 } from '../../widget/social-info/social-info';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import apiConfig from '../../fleetease/configs';
// Components
import ChatPopup from '../../fleetease/components/chat/ChatPopup';

function CarDetails() {
  const { id } = useParams();
  console.log("here goes ::",id);
  const [carData, setCarData] = useState(null);
  const [showModal, setShowModal] = useState(null);
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const navigate = useNavigate();
  const [showChat, setShowChat] = useState(false);
  //const [userId, setUserId] = useState(null);
  const userId = sessionStorage.getItem("userId");// Assuming you have a way to get the user ID

  useEffect(() => {
    // Example to set user ID, you might want to fetch it or get it from auth context
    //setUserId('exampleUserId'); // Replace with actual user ID logic

    axios.get(`${apiConfig.VEHICLE_FETCH}/${id}`)
      .then(response => {
        if (response.data.success) {
          const data = response.data.data;
          console.log("here goes ::",data);
          const gallery = JSON.parse(data.img_src || '[]');

          setCarData({
            ...data,
            gallery,
            leadForm: data.leadForm || [],
          });
        } else {
          console.error('Failed to fetch car details');
        }
      })
      .catch(error => {
        console.error('An error occurred while fetching car details:', error);
      });
  }, [id]);

  const handleChatWithSeller = () => {
    setShowChat(true);
  };

  const closeChatPopup = () => {
    setShowChat(false);
  };

  const handlePurchase = () => {
    if (!userId) {
      alert('User not logged in. Please log in to make a purchase.');
      return;
    }

    axios.post(`${apiConfig.PURCHASE_URL}`, {
      vehicleId: id,
      userId: userId,
    })
      .then(response => {
        if (response.data.success) {
          alert('Purchase successful!');
          // Optionally, navigate to a confirmation page or refresh the page
          //navigate('/purchase-confirmation');
        } else {
          alert('Purchase failed. Please try again.');
        }
      })
      .catch(error => {
        console.error('An error occurred while processing the purchase:', error);
        alert('An error occurred. Please try again.');
      });
  };

  if (!carData) return <div>Loading...</div>;

  return (
    <>
      <div className="site-content">
        <PageHeader
          title={carData.carName}
          breadCrumbItems={[
            { label: 'Home', path: '/' },
            { label: 'Pages', path: '#' },
            { label: 'Car Details', path: '#', active: true },
          ]}
        />
        <div className="content-wrapper">
          <section className="car-details section-ptb">
            <Container>
              <Row>
                <Col lg={8} md={7}>
                  <div className="car-title">
                    <h3>{carData.vehicle_name}</h3>
                    <p className="car-description">{carData.description}</p>
                  </div>
                </Col>
                <Col lg={4} md={5} className="text-lg-end">
                  <div className="car-price">
                    <span className="old-price">
                      <i className="fa-solid fa-pound-sign"></i>
                      {carData.regular_price}
                    </span>
                    <span className="new-price">
                      <i className="fa-solid fa-pound-sign"></i>
                      {carData.sale_price}
                    </span>
                  </div>
                  <span>Plus Taxes & Licensing</span>
                </Col>
              </Row>
              <Row>
                <Col lg={8} md={7}>
                  <div className="car-img-slider">
                    {carData.gallery.length > 0 && (
                      <div className="thumbnail-image-slider">
                        <Swiper
                          spaceBetween={0}
                          slidesPerView={1}
                          loop={true}
                          navigation={true}
                          modules={[A11y, FreeMode, Navigation, Thumbs]}
                          thumbs={{ swiper: thumbsSwiper }}
                        >
                          {carData.gallery.map((image, index) => (
                            <SwiperSlide key={index}>
                              <img className="w-100" src={image} alt={`Slide ${index}`} />
                            </SwiperSlide>
                          ))}
                        </Swiper>
                        <Swiper
                          onSwiper={setThumbsSwiper}
                          loop={true}
                          spaceBetween={0}
                          slidesPerView={4}
                          freeMode={true}
                          watchSlidesProgress={true}
                          modules={[FreeMode, Navigation, Thumbs]}
                          className="mySwiper"
                        >
                          {carData.gallery.map((image, index) => (
                            <SwiperSlide key={index}>
                              <img className="w-100" src={image} alt={`Thumbnail ${index}`} />
                            </SwiperSlide>
                          ))}
                        </Swiper>
                      </div>
                    )}
                  </div>
                  <div className="car-detail-tab">
                    <TabsPGS
                      extraClass=""
                      tabActive="0"
                      tabsTitle={[
                        { id: 1, title: 'General Information' },
                        // { id: 2, title: 'Features & Options' },
                        // { id: 3, title: 'Vehicle Overview' },
                      ]}
                      tabsContent={[
                        {id: 31,content: (<CarDetailsGeneralInformation description={carData.description}
                            serviceHistory={carData.service_history}
                          />)},
                        // { id: 32, content: CarDetailsFeaturesOptions },
                        // { id: 33, content: CarDetailsVehicleOverview },
                      ]}
                    />
                  </div>
                  <div className="chat-button-container">
                    <button className="chat-button button red border-0" onClick={handleChatWithSeller}>
                      Chat with Seller
                    </button>
                  </div>
                  <div className="purchase-button-container" style={{ marginTop: '15px' }}>
                    <button className="purchase-button button green border-0" onClick={handlePurchase}>
                      Purchase
                    </button>
                  </div>
                </Col>
                <Col lg={4} md={5}>
                  <div className="car-details-sidebar">
                    <div className="details-block details-weight">
                      <h5 className="weight-title">Description</h5>
                      <ul className="car-details-list">
                        {carData.attributes
                          ? carData.attributes.map((val, index) => (
                              <li key={index}>
                                <span>{val.title}</span>
                                <strong className="text-end">
                                  {val.specification}
                                </strong>
                              </li>
                            ))
                          : 'Description not found'}
                      </ul>
                    </div>
                    <div className="details-social details-weight">
                      <h5 className="weight-title">Share now</h5>
                      <SocialInfo03 />
                    </div>
                    <div className="details-form details-weight">
                      <h5 className="weight-title">Send Enquiry</h5>
                      <EnquiryForm sellerId={carData.user_id} vehicleName={carData.vehicle_name} />
                    </div>
                    <div className="details-phone details-weight">
                      <FeatureInfo
                        className="feature-box-style-03 grey-border"
                        icon="fa fa-headphones"
                        title="1-888-345-888"
                        content="Call our customer care to get the best price "
                      />
                    </div>
                  </div>
                  {showChat && (
                    <ChatPopup
                      sellerId={carData.user_id}
                      vehicleName={carData.vehicle_name}
                      onClose={closeChatPopup}
                    />
                  )}
                </Col>
              </Row>
            </Container>
          </section>
        </div>
      </div>
    </>
  );
}

export default CarDetails;
