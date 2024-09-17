import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Col, FormCheck, Row, Form } from 'react-bootstrap';
import './refurbstyle.scss';
import apiConfig from '../configs'
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AlertBox, { AlertDismissible } from '../../component/alert';

// Define initial values for the form
const initialValues = {
  vehicle: '', // Dropdown value for selected vehicle
  description: '', // New field for vehicle description
  issues: [], // Array of selected issues
};

// Define validation schema
const validationSchema = Yup.object({
  vehicle: Yup.string().required('Vehicle selection is required'),
  description: Yup.string(), // Optional field, no validation required
  issues: Yup.array().min(1, 'At least one issue must be selected'),
});

// Define checkbox options for issues
const issueOptions = [
  { id: 1, value: 'engineoil', label: 'Engine Oil Replacement' },
  { id: 2, value: 'brakepads', label: 'Brake Pads Replacement' },
  { id: 3, value: 'battery', label: 'Battery Replacement' },
  { id: 4, value: 'airfilter', label: 'Air Filter Replacement' },
  { id: 5, value: 'tires', label: 'Tire Replacement' },
  { id: 6, value: 'transmission', label: 'Transmission Repair' },
  { id: 7, value: 'suspension', label: 'Suspension Repair' },
  { id: 8, value: 'coolant', label: 'Coolant Flush' },
  { id: 9, value: 'belts', label: 'Belt Replacement' },
  { id: 10, value: 'sparkplugs', label: 'Spark Plugs Replacement' },
  { id: 11, value: 'wipers', label: 'Wiper Blade Replacement' },
  { id: 12, value: 'lights', label: 'Light Bulb Replacement' },
  { id: 13, value: 'alignment', label: 'Wheel Alignment' },
  { id: 14, value: 'filter', label: 'Cabin Air Filter Replacement' },
];

const RefurbishmentForm = ({ vehicles }) => {
  const buyer_id =  sessionStorage.getItem('userId');
  console.log("refurb Form Session id", buyer_id);
    const [alert, setAlert] = useState({ show: false, variant: '', message: '' });


  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: async (values, { resetForm }) => {
      // Prepare the data for submission
      const dataToSubmit = {
        vehicle_id: values.vehicle,
        service_description: values.description,
        service_type: JSON.stringify(values.issues), // Convert array to JSON string
        user_id: buyer_id, // Replace with actual user ID
        status: "scheduled"
      };

      console.log('Response:', dataToSubmit);

      try {
        const response = await axios.post(apiConfig.REFURB_REQUEST, dataToSubmit);
        console.log('Response:', response.data);

        // Set alert for success
        setAlert({
          show: true,
          variant: 'success',
          message: 'Refurbishment request has been submitted successfully!',
        });

        resetForm();
      } catch (error) {
        console.error('Error submitting form:', error);

        // Set alert for error
        setAlert({
          show: true,
          variant: 'danger',
          message: 'There was an error submitting the refurbishment request. Please try again.',
        });
      }
    },
  });

  return (
    <div className="form-container">
      <form onSubmit={formik.handleSubmit}>
      {alert.show && (
          <AlertBox
            variant={alert.variant}
            message={alert.message}
            show={alert.show}
          />
        )}
        <Row className="row-gap">
          <Col lg={6}>
            <h6 className="title">Vehicle Information</h6>
            <div className="input-control">
              <label htmlFor="vehicle">Select Your Purchased Vehicle</label>
              <Form.Control
                as="select"
                id="vehicle"
                name="vehicle"
                value={formik.values.vehicle}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              >
                <option value="">Select a vehicle...</option>
                {vehicles.map((vehicle) => (
                  <option key={vehicle.vehicle_id} value={vehicle.vehicle_id}>
                    {vehicle.vehicle_name}
                  </option>
                ))}
              </Form.Control>
              {formik.errors.vehicle && formik.touched.vehicle && (
                <p className="error">{formik.errors.vehicle}</p>
              )}
            </div>
            {/* Description Field */}
            <div className="input-control mt-3">
              <label htmlFor="description">Other Issues Description (Optional)</label>
              <Form.Control
                as="textarea"
                id="description"
                name="description"
                value={formik.values.description}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                rows={3}
                placeholder="Provide additional/any other issue..."
              />
              {formik.errors.description && formik.touched.description && (
                <p className="error">{formik.errors.description}</p>
              )}
            </div>
          </Col>
          <Col lg={6}>
            <div className="form-space" style={{ marginBottom: '20px' }}></div>
            <h6 className="title">Issues</h6>
            <div className="form car-options">
              <Row>
                {issueOptions.map((option, index) => (
                  <Col sm={6} key={option.id}>
                    <FormCheck
                      label={option.label}
                      value={option.value}
                      name="issues"
                      type="checkbox"
                      id={`issue-${option.id}`}
                      checked={formik.values.issues.includes(option.value)}
                      onChange={formik.handleChange}
                    />
                  </Col>
                ))}
              </Row>
              {formik.errors.issues && formik.touched.issues && (
                <p className="error">{formik.errors.issues}</p>
              )}
            </div>
          </Col>
          <Col lg={12}>
            <div className="input-control">
              <button
                className="button red border-0"
                disabled={formik.isSubmitting}
                type="submit"
              >
                Submit
              </button>
            </div>
          </Col>
        </Row>
      </form>
    </div>
  );
    };

export default RefurbishmentForm;
