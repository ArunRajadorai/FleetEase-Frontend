import React, { useEffect, useState } from 'react';

// Libraries
import { useFormik } from 'formik';
import { AddCarSchema } from '../../form/schemas';
import { Container, Col, Row } from 'react-bootstrap';

// Layouts
import PageHeader from '../../layouts/page-header/PageHeader';
import fileIcon from '../../assets/images/upload-img-icon.png';

// Import styles
import './style.scss';
import { Link } from 'react-router-dom';
import axios from 'axios';
import backendUrls from '../../backendservice/service';
import '../../festylesheet/Addcar.scss';

const initialValues = {
    vehicle_name: '',
    year: '',
    make: '',
    model: '',
    mileage: '',
    transmission: '',
    regular_price: '',
    sale_price: '',
    description: '',
    service_history: '',
    location: '',
    toggle: 'false',
    checked: [],
};

function AddCar(props) {
    const [uploadedImages, setUploadedImages] = useState([]);

    const formik = useFormik({
        initialValues,
        validationSchema: AddCarSchema,
        onSubmit: async (values, actions) => {
            try {
                const formData = new FormData();
                Object.keys(values).forEach((key) => {
                    formData.append(key, values[key]);
                });

                uploadedImages.forEach((image, index) => {
                    formData.append('img_src', image);
                });

                const response = await axios.post(backendUrls.ADD_VEHICLE_URL, formData, {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                    },
                });

                console.log('Form submitted successfully:', response.data);
                actions.resetForm();
                setUploadedImages([]);
            } catch (error) {
                console.error('Error submitting form:', error);
            }
        },
    });

    const { values, errors, touched, handleChange, handleBlur, handleSubmit, isSubmitting } = formik;

    const handleImageUpload = (event) => {
        const files = Array.from(event.target.files);
        const imageUrls = files.map((file) => URL.createObjectURL(file));
        setUploadedImages((prevImages) => [...prevImages, ...imageUrls]);
    };

    useEffect(() => {
        return () => {
            uploadedImages.forEach((image) => URL.revokeObjectURL(image));
        };
    }, [uploadedImages]);

    return (
        <div className="site-content">
            <PageHeader
                title="Add Car"
                description=""
                breadCrumbItems={[
                    { label: 'Home', path: '/' },
                    { label: 'Add Car', path: '#', active: true },
                ]}
            />
            <div className="content-wrapper cdfs-add-car-page">
                <section className="section-ptb">
                    <Container>
                        <Row>
                            <Col sm={12}>
                                <div className="cdfs-add-car-form-wrapper">
                                    <form className="cdfs-car-form" onSubmit={handleSubmit}>
                                        <div className="cdfs-av-section">
                                            <div className="cdfs-av-section-heading">
                                                <h4 className="cdfs-av-title">Add Vehicle Details</h4>
                                            </div>
                                            <Row className="row-gap">
                                                <Col md={12}>
                                                    <div className="input-control">
                                                        <label>Vehicle Name*</label>
                                                        <input
                                                            className="form-control"
                                                            type="text"
                                                            autoComplete="off"
                                                            name="vehicle_name"
                                                            value={values.vehicle_name}
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            placeholder="Enter Title"
                                                        />
                                                        <p className="note">
                                                            If the title is not entered then it will be auto-generated using
                                                            Year, Make, and Model.
                                                        </p>
                                                        {errors.vehicle_name && touched.vehicle_name ? (
                                                            <p className="error">{errors.vehicle_name}</p>
                                                        ) : null}
                                                    </div>
                                                </Col>
                                                <Col md={4}>
                                                    <div className="input-control">
                                                        <label>Year*</label>
                                                        <input
                                                            className="form-control"
                                                            type="number"
                                                            autoComplete="off"
                                                            name="year"
                                                            value={values.year}
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            placeholder="Enter Year"
                                                        />
                                                        {errors.year && touched.year ? (
                                                            <p className="error">{errors.year}</p>
                                                        ) : null}
                                                    </div>
                                                </Col>
                                                <Col md={4}>
                                                    <div className="input-control">
                                                        <label>Make*</label>
                                                        <input
                                                            className="form-control"
                                                            type="text"
                                                            name="make"
                                                            value={values.make}
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            placeholder="Enter Make"
                                                        />
                                                        {errors.make && touched.make ? (
                                                            <p className="error">{errors.make}</p>
                                                        ) : null}
                                                    </div>
                                                </Col>
                                                <Col md={4}>
                                                    <div className="input-control">
                                                        <label>Model*</label>
                                                        <input
                                                            className="form-control"
                                                            type="text"
                                                            name="model"
                                                            value={values.model}
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            placeholder="Enter Model"
                                                        />
                                                        {errors.model && touched.model ? (
                                                            <p className="error">{errors.model}</p>
                                                        ) : null}
                                                    </div>
                                                </Col>
                                                <Col md={3}>
                                                    <div className="input-control">
                                                        <label>Transmission</label>
                                                        <input
                                                            className="form-control"
                                                            type="text"
                                                            name="transmission"
                                                            value={values.transmission}
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            placeholder="Enter Transmission"
                                                        />
                                                        {errors.transmission && touched.transmission ? (
                                                            <p className="error">{errors.transmission}</p>
                                                        ) : null}
                                                    </div>
                                                </Col>
                                                <Col md={4}>
                                                    <div className="input-control">
                                                        <label>Mileage</label>
                                                        <input
                                                            className="form-control"
                                                            type="text"
                                                            name="mileage"
                                                            value={values.mileage}
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            placeholder="Enter Mileage"
                                                        />
                                                        {errors.mileage && touched.mileage ? (
                                                            <p className="error">{errors.mileage}</p>
                                                        ) : null}
                                                    </div>
                                                </Col>
                                                <Col md={4}>
                                                    <div className="input-control">
                                                        <label>Regular Price*</label>
                                                        <input
                                                            className="form-control"
                                                            type="number"
                                                            name="regular_price"
                                                            value={values.regular_price}
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            placeholder="Enter Regular Price"
                                                        />
                                                        {errors.regular_price && touched.regular_price ? (
                                                            <p className="error">{errors.regular_price}</p>
                                                        ) : null}
                                                    </div>
                                                </Col>
                                                <Col md={3}>
                                                    <div className="input-control">
                                                        <label>Sale Price</label>
                                                        <input
                                                            className="form-control"
                                                            type="number"
                                                            name="sale_price"
                                                            value={values.sale_price}
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            placeholder="Enter Sale Price"
                                                        />
                                                        {errors.sale_price && touched.sale_price ? (
                                                            <p className="error">{errors.sale_price}</p>
                                                        ) : null}
                                                    </div>
                                                </Col>
                                                <Col md={6}>
                                                    <div className="input-control">
                                                        <label>Short Description</label>
                                                        <input
                                                            className="form-control"
                                                            type="text"
                                                            name="description"
                                                            value={values.description}
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            placeholder="Enter Short Description"
                                                        />
                                                        {errors.description && touched.description ? (
                                                            <p className="error">{errors.description}</p>
                                                        ) : null}
                                                    </div>
                                                </Col>
                                                <Col md={6}>
                                                    <div className="input-control">
                                                        <label>Service History</label>
                                                        <input
                                                            className="form-control"
                                                            type="text"
                                                            name="service_history"
                                                            value={values.service_history}
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            placeholder="Enter Service History"
                                                        />
                                                        {errors.service_history && touched.service_history ? (
                                                            <p className="error">{errors.service_history}</p>
                                                        ) : null}
                                                    </div>
                                                </Col>
                                            </Row>
                                        </div>
                                        <div className="cdfs-av-section">
                                            <div className="cdfs-av-section-heading">
                                                <h4 className="cdfs-av-title">Vehicle Images</h4>
                                            </div>
                                            <div className="cdfs-av-section-content">
                                                <div className="input-control">
                                                    <label>
                                                        Upload Images{' '}
                                                        <span className="upload-image-limit">
                                                            (Upload Limit: <span className="upload-image-limit-count">10</span>)
                                                        </span>
                                                    </label>
                                                    <div className="cdfs-image-upload">
                                                        <div className="select-file-info">
                                                            <div className="select-icon">
                                                                <img src={fileIcon} alt="file icon" />
                                                            </div>
                                                            <p>
                                                                Drag and drop the images to upload or <span>Browse</span> to upload
                                                            </p>
                                                        </div>
                                                        <input
                                                            type="file"
                                                            className="upload-file-control"
                                                            multiple
                                                            accept="image/*"
                                                            onChange={handleImageUpload}
                                                        />
                                                        <div className="uploaded-images-wrapper">
                                                            {uploadedImages.map((image, index) => (
                                                                <div className="uploaded-image" key={index}>
                                                                    <img src={image} alt={`Uploaded ${index}`} />
                                                                </div>
                                                            ))}
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="cdfs-av-section">
                                            <div className="cdfs-av-section-heading">
                                                <h4 className="cdfs-av-title">Vehicle Location</h4>
                                            </div>
                                            <Row className="row-gap">
                                                <Col md={4}>
                                                    <div className="input-control">
                                                        <label>Location*</label>
                                                        <input
                                                            className="form-control"
                                                            type="text"
                                                            name="location"
                                                            value={values.location}
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            placeholder="Enter Location"
                                                        />
                                                        {errors.location && touched.location ? (
                                                            <p className="error">{errors.location}</p>
                                                        ) : null}
                                                    </div>
                                                </Col>
                                            </Row>
                                        </div>
                                        <div className="cdfs-car-form-actions">
                                            <Link className="btn btn-secondary" to="/inventory">
                                                Cancel
                                            </Link>
                                            <button
                                                className="btn btn-primary"
                                                type="submit"
                                                disabled={isSubmitting}
                                            >
                                                Save
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </section>
            </div>
        </div>
    );
}

export default AddCar;
