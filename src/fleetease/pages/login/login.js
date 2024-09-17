import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Col, Container, Row } from 'react-bootstrap';
import axios from 'axios';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

// Site Data
import BannerImg from '../../../assets/images/banner/modern-home3/FleetEaseBanner.png';

// Styles
import '../../../component/search/search.scss';
import './login.scss';
import apiConfig from '../../configs';
import AlertBox from '../../../component/alert';

// Validation schemas for Yup
const loginValidationSchema = Yup.object({
    username: Yup.string().required('Username is required'),
    password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
});

const signupValidationSchema = Yup.object({
    username: Yup.string().required('Username is required'),
    email: Yup.string().email('Invalid email address').required('Email is required'),
    password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
    number: Yup.string().required('Phone number is required'),
    confirmPassword: Yup.string()
        .oneOf([Yup.ref('password'), null], 'Passwords must match').required('Confirm Password is required'),
    role: Yup.string().required('Role is required')
});

function LoginSignupPage() {
    const [isLogin, setIsLogin] = useState(true);
    const [error, setError] = useState(null);
    const [alert, setAlert] = useState({ show: false, message: '', variant: 'danger' });

    const navigate = useNavigate();

    const handleToggle = () => {
        setIsLogin(!isLogin);
    };

    const handleSubmit = async (values) => {
        setError(null);
        setAlert({ show: false });
        try {
            const login = {
                username: values.username,
                password: values.password
            };
            const register = {
                username: values.username,
                mobile_number: values.number,
                email: values.email,
                password: values.password,
                user_type: values.role
            };
            let response;
            if (isLogin) {
                response = await axios.post(apiConfig.LOGIN_API, login);
            } else {
                response = await axios.post(apiConfig.REGISTER_API, register);
            }
            if (!response.data.success) {
                const message = response.data.message || 'An error occurred';
                setAlert({ show: true, message, variant: 'danger' });
                return;
            }
            const userId = response.data.data.id;
            sessionStorage.setItem('userId', userId);
            navigate('/');
        } catch (error) {
            const message = error.response?.data?.message || 'An unexpected error occurred';
            setError(message);
            setAlert({ show: true, message, variant: 'danger' });
        }
    };

    return (
        <div className="site-content homepage">
            <div className="content-wrapper">
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
                                    <h3 className="text-white">Join FleetEase to explore a comprehensive platform designed to streamline second-hand vehicle transactions</h3>
                                    <p className="text-white">FleetEase offers a cutting-edge, creative, and versatile web platform designed to streamline the process of acquiring and refurbishing second-hand vehicles.</p>
                                </div>
                            </Col>
                            <Col lg={5}>
                                <div className="login-signup-card">
                                    <h5 className="card-title">
                                        {isLogin ? 'Login to Your Account' : 'Create a New Account'}
                                    </h5>
                                    {isLogin ? (
                                        <Formik
                                            initialValues={{ username: '', password: '' }}
                                            validationSchema={loginValidationSchema}
                                            onSubmit={handleSubmit}
                                        >
                                            {() => (
                                                <Form className="card-form">
                                                    <Row>
                                                        <Col lg={12}>
                                                            <Field type="text" name="username" placeholder="Username" className="form-control" />
                                                            <ErrorMessage name="username" component="div" className="text-danger" />
                                                        </Col>
                                                        <Col lg={12}>
                                                            <Field type="password" name="password" placeholder="Password" className="form-control" />
                                                            <ErrorMessage name="password" component="div" className="text-danger" />
                                                        </Col>
                                                        <Col lg={12}>
                                                            <div className="card-btn">
                                                                <button type="submit" className="button">Login</button>
                                                            </div>
                                                        </Col>
                                                        <Col lg={12}>
                                                            <p className="text-dec">
                                                                Don’t have an account?
                                                                <Link to="#" onClick={handleToggle}> Sign Up</Link>
                                                            </p>
                                                        </Col>
                                                    </Row>
                                                    <AlertBox
                                                        variant={alert.variant}
                                                        message={alert.message}
                                                        show={alert.show}
                                                    />
                                                </Form>
                                            )}
                                        </Formik>
                                    ) : (
                                        <Formik
                                            initialValues={{ username: '', email: '', password: '', confirmPassword: '', role: '', number: '' }}
                                            validationSchema={signupValidationSchema}
                                            onSubmit={handleSubmit}
                                        >
                                            {() => (
                                                <Form className="card-form">
                                                    <Row>
                                                        <Col lg={12}>
                                                            <Field type="text" name="username" placeholder="Username" className="form-control" />
                                                            <ErrorMessage name="username" component="div" className="text-danger" />
                                                        </Col>
                                                        <Col lg={12}>
                                                            <Field type="email" name="email" placeholder="Email" className="form-control" />
                                                            <ErrorMessage name="email" component="div" className="text-danger" />
                                                        </Col>
                                                        <Col lg={12}>
                                                            <Field type="password" name="password" placeholder="Password" className="form-control" />
                                                            <ErrorMessage name="password" component="div" className="text-danger" />
                                                        </Col>
                                                        <Col lg={12}>
                                                            <Field type="password" name="confirmPassword" placeholder="Confirm Password" className="form-control" />
                                                            <ErrorMessage name="confirmPassword" component="div" className="text-danger" />
                                                        </Col>
                                                        <Col lg={12}>
                                                            <Field type="number" name="number" min="0" placeholder="Phone Number" className="form-control" />
                                                            <ErrorMessage name="number" component="div" className="text-danger" />
                                                        </Col>
                                                        <Col lg={12} className="mt-3">
                                                            <Field as="select" name="role" className="form-control">
                                                                <option value="" label="Select Role" />
                                                                <option value="buyer" label="Buyer" />
                                                                <option value="seller" label="Seller" />
                                                            </Field>
                                                            <ErrorMessage name="role" component="div" className="text-danger" />
                                                        </Col>
                                                        <Col lg={12}>
                                                            <div className="card-btn">
                                                                <button type="submit" className="button">Sign Up</button>
                                                            </div>
                                                        </Col>
                                                        <Col lg={12}>
                                                            <p className="text-dec">
                                                                Already have an account?
                                                                <Link to="#" onClick={handleToggle}> Login</Link>
                                                            </p>
                                                        </Col>
                                                    </Row>
                                                    <AlertBox
                                                        variant={alert.variant}
                                                        message={alert.message}
                                                        show={alert.show}
                                                    />
                                                </Form>
                                            )}
                                        </Formik>
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

export default LoginSignupPage;
