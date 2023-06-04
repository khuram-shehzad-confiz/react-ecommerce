import React, { useState } from "react";
import styled from "styled-components";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useCartContext } from "../context/cart_context";
import { useNavigate } from "react-router-dom";
import CheckoutSteps from "../components/CheckoutSteps";
import { SHIPPING_ADDRESS } from "../utils/constants";
import PageHero from "../components/PageHero";

const ShippingAddressScreen = () => {
  const { saveShippingAddress } = useCartContext();
  const navigate = useNavigate();
 

  const loadShippingInfo = () => {
    return localStorage.getItem(SHIPPING_ADDRESS)
      ? JSON.parse(localStorage.getItem(SHIPPING_ADDRESS))
      : {
          addressLine1: "",
          addressLine2: "",
          city: "",
          state: "",
          zipCode: "",
          ph: "",
        };
  };
  const initialState = loadShippingInfo();

  const validationSchema = Yup.object({
    addressLine1: Yup.string().required("Required!"),
    city: Yup.string().required("Required!"),
    state: Yup.string().required("Required!"),
    zipCode: Yup.string().required("Required!"),
    ph: Yup.number().required("Required!"),
  });



  const handleSubmit = (e, { setSubmitting }) => {
    // e.preventDefault();
    // TODO: Handle form submission
    console.log(e);
    saveShippingAddress(e);
    navigate("/placeorder");
  };

  return (
    <div>
      <PageHero title="Shipping Address" />
      <CheckoutSteps shipping />

      <Container>
        <Formik
          initialValues={initialState}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          <Form className="form-continar">
            <h2>Shipping Address</h2>
            <div className="form-control">
              <label htmlFor="addressLine1">AddressLine1</label>
              <Field
                className="field"
                type="text"
                id="addressLine1"
                name="addressLine1"
              />
              <ErrorMessage name="addressLine1">
                {(errMsg) => <div className="error-message">{errMsg}</div>}
              </ErrorMessage>
            </div>
            {/* <Label for="fullName" >Full Name </Label>
        <Input
          type="text"
          name="fullName"
          id="fullName"
          placeholder="Full Name"
          value={formData.fullName}
          onChange={handleInputChange}
          required
        /> */}
            {/* <Label> Address Line 1</Label>
        <Input
          type="text"
          name="addressLine1"
          placeholder="Address Line 1"
          value={formData.addressLine1}
          onChange={handleInputChange}
          required
        /> */}

            <div className="form-control">
              <label htmlFor="addressLine2">Address Line 2</label>
              <Field
                className="field"
                type="text"
                id="addressLine2"
                name="addressLine2"
              />
            </div>

            <div className="form-control">
              <label htmlFor="ph">Phone Number</label>
              <Field className="field" type="text" id="ph" name="ph" />
              <ErrorMessage name="ph" className="error-message" >
              {(errMsg) => <div className="error-message">{errMsg}</div>}
                </ErrorMessage>
            </div>
            <div className="form-control">
              <label htmlFor="city">City</label>
              <Field className="field" type="text" id="city" name="city" />
              <ErrorMessage name="city" />
            </div>
            <div className="form-control">
              <label htmlFor="state">State</label>
              <Field className="field" type="text" id="state" name="state" />
              <ErrorMessage name="state" />
            </div>

            <div className="form-control">
              <label htmlFor="state">Zip Code</label>
              <Field
                className="field"
                type="text"
                id="zipCode"
                name="zipCode"
                required
              />
              <ErrorMessage name="zipCode" />
            </div>
            <SubmitButton type="submit" className="btn">Submit</SubmitButton>
          </Form>
        </Formik>
      </Container>
    </div>
  );
};

const Container = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  // height: 90vh;
  margin: 0 auto;
  padding-top: 20px;
  padding-bottom: 20px;

`;

const Label = styled.label``;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const SubmitButton = styled.button`
  width: 100%;
  padding: 10px;
  // background-color: #007bff;
  // color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  // &:hover {
  //   background-color: #0056b3;
  // }
`;

export default ShippingAddressScreen;
