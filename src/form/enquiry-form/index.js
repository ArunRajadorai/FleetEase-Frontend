import React, { useState } from 'react';
import { useFormik } from 'formik';
import { EnquiryFormSchema } from '../schemas';
import { Col, Row } from 'react-bootstrap';
import axios from 'axios'; // Import axios
import '../form.scss';
import apiConfig from '../../fleetease/configs';
import AlertBox from '../../component/alert';

const initialValues = {
  Username: '',
  Email: '',
  Message: '',
};
const buyerId= sessionStorage.getItem("userId")
console.log("SessionId :",buyerId)
function EnquiryForm(props) {

      const [alert, setAlert] = useState({ show: false, variant: '', message: '' });
      const {
        values,
        errors,
        touched,
        handleBlur,
        handleChange,
        handleSubmit,
        isSubmitting,
        setSubmitting,
      } = useFormik({
        initialValues: initialValues,
        validationSchema: EnquiryFormSchema,
        onSubmit: async (values, action) => {
          try {
            // Prepare the data to be sent
            const postData = {
              username: values.Username,
              email: values.Email,
              message: values.Message,
              sellerId: props.sellerId,  // Add sellerId from props
              buyerId: buyerId,    // Add buyerId from props
              vehicle_name: props.vehicleName, // Add vehicleId from props
            };
            console.log("PostData :: --> ",postData)
            // Send POST request to backend using axios
            const response = await axios.post(apiConfig.ENQUIRY_API, postData);

            // Log the response for debugging (remove in production)
            console.log('Form successfully submitted:', response.data);
            setAlert({
              show: true,
              variant: 'success',
              message: 'Enquiry has been submitted successfully, Our Team will reach you shortly',
            });
            // Reset the form after successful submission
            action.resetForm();
          } catch (error) {
            console.error('There was an error submitting the form:', error);
          } finally {
            setSubmitting(false); // Reset submitting state
          }
        },
      });

  return (
    <>
      <div className={`enquiry-form ${props.className || ''}`}>
        {props?.formtitle && (
          <h5 className={`enquiry-form-title ${props.formtitleclass || ''}`}>
            {props.formtitle}
          </h5>
        )}
        {props?.formdescription && <p>{props.formdescription}</p>}
        {alert.show && (
          <AlertBox
            variant={alert.variant}
            message={alert.message}
            show={alert.show}
          />
        )}
        <form className="pgs-form" onSubmit={handleSubmit}>
          <Row className="row-gap">
            <Col lg={12}>
              <div className="input-control">
                <label>Name*</label>
                <input
                  type="name"
                  autoComplete="off"
                  name="Username"
                  id="name"
                  value={values.Username}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="Name"
                />
                {errors.Username && touched.Username ? (
                  <p className="error">{errors.Username}</p>
                ) : null}
              </div>
            </Col>
            <Col lg={12}>
              <div className="input-control">
                <label>Email address*</label>
                <input
                  type="email"
                  name="Email"
                  value={values.Email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="Email"
                />
                {errors.Email && touched.Email ? (
                  <p className="error">{errors.Email}</p>
                ) : null}
              </div>
            </Col>
            <Col lg={12}>
              <div className="input-control">
                <label>Message*</label>
                <textarea
                  rows={5}
                  name="Message"
                  value={values.Message}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="Message"
                />
                {errors.Message && touched.Message ? (
                  <p className="error">{errors.Message}</p>
                ) : null}
              </div>
            </Col>
            <Col lg={12}>
              <div className="input-control">
                <button
                  className="button red"
                  disabled={isSubmitting}
                  type="submit"
                >
                  Submit
                </button>
              </div>
            </Col>
          </Row>
        </form>
      </div>
    </>
  );
}

export default EnquiryForm;
