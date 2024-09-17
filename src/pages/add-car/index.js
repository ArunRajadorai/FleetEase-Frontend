import React, { useEffect, useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Container, Col, Row } from 'react-bootstrap';
import PageHeader from '../../layouts/page-header/PageHeader';
import fileIcon from '../../assets/images/upload-img-icon.png';
import { Link } from 'react-router-dom';
import axios from 'axios';
import apiConfig from '../../fleetease/configs';
import './style.scss';
import '../../festylesheet/Addcar.scss';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; // Import Toast styles
import '../../festylesheet/custom-toast.scss';


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
const userId = sessionStorage.getItem("userId");

const validationSchema = Yup.object({
    vehicle_name: Yup.string()
        .min(3, 'Vehicle name must be at least 3 characters')
        .required('Vehicle name is required'),
    make: Yup.string()
        .min(2, 'Make must be at least 2 characters')
        .required('Make is required'),
    model: Yup.string()
        .min(2, 'Model must be at least 2 characters')
        .required('Model is required'),
    year: Yup.number()
        .min(1900, 'Year must be a valid year')
        .max(new Date().getFullYear(), `Year can't be in the future`)
        .required('Year is required'),
    regular_price: Yup.number()
        .min(1, 'Regular price must be greater than 0')
        .required('Regular price is required'),
    mileage: Yup.number()
        .min(0, 'Mileage must be a positive number')
        .required('Mileage is required'),
});
function AddCar(props) {
    const [uploadedImages, setUploadedImages] = useState([]);

    const {
        values,
        errors,
        touched,
        handleBlur,
        handleChange,
        handleSubmit,
        isSubmitting,
    } = useFormik({
        initialValues,
        validationSchema,
        onSubmit: async (values, actions) => {
            try {
                const formData = new FormData();

                // Append form fields
                Object.keys(values).forEach(key => {
                    formData.append(key, values[key]);
                });

                // Append files
                uploadedImages.forEach((image) => {
                    formData.append('img_src', image);
                });

                // Retrieve user ID from sessionStorage and append it
                if (userId) {
                    formData.append('user_id', userId);
                }

                const response = await axios.post(apiConfig.ADD_VEHICLE_URL, formData, {
                    headers: { 'Content-Type': 'multipart/form-data' }
                });
                console.log(response.data)
                if (response.data.success) {
                    // Trigger success toast notification
                    toast.success(response.data.message || "Vehicle created successfully");
                } else {
                    toast.error("Failed to create vehicle.");
                }

                actions.resetForm();
                setUploadedImages([]);
            } catch (error) {
                console.error('Error submitting form:', error);
                toast.error('Error submitting form.');
            }
        },
    });
            const handleImageUpload = (event) => {
            const files = Array.from(event.target.files);
            setUploadedImages(files); // Store File objects directly
        };


    return (
        <>
            <ToastContainer
                position="top-center"
                autoClose={4000}
                hideProgressBar
                closeOnClick
                pauseOnHover
                draggable
                className="custom-toast-container"
                toastClassName="custom-toast"
            />
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
                                                                name="vehicle_name"
                                                                value={values.vehicle_name}
                                                                onChange={handleChange}
                                                                onBlur={handleBlur}
                                                                placeholder="Enter Title"
                                                            />
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
                                                    <Col md={6}>
                                                        <div className="input-control">
                                                            <label>Location</label>
                                                            <input
                                                                className="form-control"
                                                                type="text"
                                                                name="location"
                                                                value={values.location}
                                                                onChange={handleChange}
                                                                onBlur={handleBlur}
                                                                placeholder="Enter Service History"
                                                            />
                                                            {errors.location && touched.location ? (
                                                                <p className="error">{errors.location}</p>
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
                                                        <label>Upload Images <span className="upload-image-limit">(Upload Limit: <span className="upload-image-limit-count">10</span>)</span></label>
                                                        <div className="cdfs-image-upload">
                                                            <div className="select-file-info">
                                                                <div className="select-file-icon"><img src={fileIcon} alt="File Icon" /></div>
                                                                <div className="select-file-note">Drag and drop images here, <span>OR</span></div>
                                                            </div>
                                                            <Link to="#" className="button select-image">Select File</Link>
                                                            <input
                                                                id="uploadImage"
                                                                type="file"
                                                                name="img_src"
                                                                onChange={handleImageUpload}
                                                                accept="image/png, image/jpeg"
                                                                multiple
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="cdfs-image-preview-grid">
                                                    {uploadedImages.map((file, index) => (
                                                      <div className="image-preview" key={index}>
                                                          <img src={URL.createObjectURL(file)}
                                                               alt={`Uploaded ${index}`} />
                                                      </div>
                                                    ))}
                                                </div>
                                            </div>
                                            <div className="cdfs-form-footer">
                                                <button
                                                  type="submit"
                                                    className="cdfs-btn cdfs-btn-primary"
                                                    disabled={isSubmitting}
                                                >
                                                    Submit
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
        </>
    );
}

export default AddCar;
