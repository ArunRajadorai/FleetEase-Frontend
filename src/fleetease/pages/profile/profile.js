import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Col, Container, Row, Table, Alert } from 'react-bootstrap';
import PageHeader from '../../../layouts/page-header/PageHeader';
import SectionTitle from '../../../component/section-title/section-title';
import TestimonialStyle1 from '../../../component/testimonial/testimonial-item';
import apiConfig from '../../configs';

const CustomerProfile = ({ userType }) => {
  const [profileData, setProfileData] = useState(null);
  const [vehicles, setVehicles] = useState([]);
  const [profileError, setProfileError] = useState(null);
  const [vehiclesError, setVehiclesError] = useState(null);
  const [loadingProfile, setLoadingProfile] = useState(true);
  const [loadingVehicles, setLoadingVehicles] = useState(true);

  const user_id = sessionStorage.getItem("userId");

  useEffect(() => {
    const fetchProfileData = async () => {
      try {
        const response = await axios.get(`${apiConfig.GET_CUSTOMER_DETAILS}/${user_id}`);
        setProfileData(response.data.data);
        setProfileError(null);
      } catch (error) {
        setProfileError('Oops! Unable to fetch profile data. Kindly login');
        console.error('Error fetching profile data:', error);
      } finally {
        setLoadingProfile(false);
      }
    };

    fetchProfileData();
  }, [user_id]);

  useEffect(() => {
    const fetchUserVehicles = async () => {
      try {
        const response = await axios.get(`${apiConfig.GET_CUSTOMER_VEHICLE_DETAILS}/${user_id}`);
        setVehicles(response.data.data);
        setVehiclesError(null);
      } catch (error) {
        setVehiclesError('Oops! Unable to fetch vehicle data. Kindly login');
        console.error('Error fetching vehicles:', error);
      } finally {
        setLoadingVehicles(false);
      }
    };

    fetchUserVehicles();
  }, [user_id]);

  return (
    <>
      <div className="site-content">
        <PageHeader
          title="Customer Profile"
          breadCrumbItems={[
            { label: 'Home', path: '/' },
            { label: 'Profile', path: '#' },
            { label: 'Customer Profile', path: '#', active: true },
          ]}
        />
        <div className="content-wrapper">
          <section className="section-ptb">
            <Container>
              <Row>
                <Col>
                  <SectionTitle
                    extraClass="mb-5 text-center"
                    title="Customer Profile"
                  />

                  {loadingProfile ? (
                    <div className="text-center">Loading profile...</div>
                  ) : profileError ? (
                    <Alert variant="danger" className="text-center">{profileError}</Alert>
                  ) : (
                    profileData && (
                      <TestimonialStyle1
                        authorName={profileData.name}
                        authorPosition={profileData.email}
                        description={`Phone: ${profileData.phone}`}
                      />
                    )
                  )}

                  {loadingVehicles ? (
                    <div className="text-center">Loading vehicles...</div>
                  ) : vehiclesError ? (
                    <Alert variant="danger" className="text-center">{vehiclesError}</Alert>
                  ) : (
                    <div className="profile-vehicles text-center">
                      <h4>{userType === 'buyer' ? 'Added Vehicles' : 'Purchased Vehicles'}</h4>
                      <Table striped bordered hover responsive>
                        <thead>
                          <tr>
                            <th>Name</th>
                            <th>Make & Model</th>
                            <th>Year</th>
                            <th>Date</th>
                            <th>Status</th>
                          </tr>
                        </thead>
                        <tbody>
                          {vehicles.length > 0 ? (
                            vehicles.map((vehicle, index) => (
                              <tr key={index}>
                                <td>{vehicle.name}</td>
                                <td>{vehicle.make_model}</td>
                                <td>{vehicle.year}</td>
                                <td>{vehicle.date}</td>
                                <td>{vehicle.status}</td>
                              </tr>
                            ))
                          ) : (
                            <tr>
                              <td colSpan="5" className="text-center">No vehicles available.</td>
                            </tr>
                          )}
                        </tbody>
                      </Table>
                    </div>
                  )}

                </Col>
              </Row>
            </Container>
          </section>
        </div>
      </div>
    </>
  );
};

export default CustomerProfile;
