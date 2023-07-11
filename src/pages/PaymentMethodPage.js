import React, { useState } from "react";
import styled from "styled-components";
import PageHero from "../components/PageHero";
import CheckoutSteps from "../components/CheckoutSteps";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { CREDIT_CARD } from "../utils/constants";
import RadioButtons from "../components/RadioButtons";

const PaymentMethodPage = () => {
  const [selectedOption, setSelectedOption] = useState('');

  const handleOptionChange = (event) => {
    console.log(event)
    setSelectedOption(event.target.value);
  };
  const handlePaymentSubmit = (e) => {
    console.log(e)
    // TODO: Handle payment submission
  };

  const initialState = {
    cardNumber:'',
    expiry:'',
    cvc:'',
    paymentMethod:''
    };

  const validationSchema = Yup.object().shape({
    paymentMethod: Yup.string().required('Please select a payment method'),
    cardNumber: Yup.string()
      .when('paymentMethod', {
        is: CREDIT_CARD,
        then: ()=>Yup.string().required('Please enter a card number'),
      }),
    expiry: Yup.string()
      .when('paymentMethod', {
        is: CREDIT_CARD,
        then: ()=>Yup.string().required('Please enter the card expiry date'),
      }),
    cvc: Yup.string()
      .when('paymentMethod', {
        is: CREDIT_CARD,
        then:()=> Yup.string().required('Please enter the card CVC'),
      }),
  });
  const paymentMethods =[
    { key: 'creditCard', value: CREDIT_CARD },
    { key: 'COD', value: 'Cash on Delivery' },
  ]
  return (
    <div>
      <PageHero title="Shipping Address" />
      <CheckoutSteps shipping confirmOrder payment />
      <Container>
        <Formik
          initialValues={initialState}
          validationSchema={validationSchema}
          onSubmit={handlePaymentSubmit}
        >
          {({ setFieldValue }) => (
          <Form className="form-continar">
            <h2>Select Payment Method</h2>
            
            <PaymentOption>
              <RadioButtons 
              options={paymentMethods}
              label=''
              name='paymentMethod'
              selectedOption={selectedOption}
              onChange={(event) => {
                handleOptionChange(event);
                setFieldValue('paymentMethod', event.target.value);
              }} 
              />
            </PaymentOption>
            {/* <PaymentOption>
              <input
                type="radio"
                id="creditCard"
                name="paymentMethod"
                value="creditCard"
                // checked={paymentMethod === "creditCard"}
                onChange={handleOptionChange}
                required
              />
              <label htmlFor="creditCard">Credit Card</label>
            </PaymentOption> 
             <PaymentOption>
          <input
            type="radio"
            id="paypal"
            name="paymentMethod"
            value="paypal"
            // checked={paymentMethod === 'paypal'}
            onChange={handleOptionChange}
            required
          />
          <label htmlFor="paypal">PayPal</label>
        </PaymentOption>  */}
         

            {selectedOption === CREDIT_CARD && (
              <div>
                <div className="form-control">
                  <label htmlFor="cardNumber">CardNumber</label>
                  <Field
                    className="field"
                    type="text"
                    id="cardNumber"
                    name="cardNumber"
                  />
                  <ErrorMessage name="cardNumber">
                    {(errMsg) => <div className="error-message">{errMsg}</div>}
                  </ErrorMessage>
                </div>

                <div className="form-control">
                  <label htmlFor="expiry">Card Expiry</label>
                  <Field
                    className="field"
                    type="text"
                    id="expiry"
                    name="expiry"
                  />
                  <ErrorMessage name="expiry">
                    {(errMsg) => <div className="error-message">{errMsg}</div>}
                  </ErrorMessage>
                </div>

                <div className="form-control">
                  <label htmlFor="cvc">Card CVC</label>
                  <Field
                    className="field"
                    type="text"
                    id="cvc"
                    name="cvc"
                  />
                  <ErrorMessage name="cvc">
                    {(errMsg) => <div className="error-message">{errMsg}</div>}
                  </ErrorMessage>
                </div>
              </div>
            )}
            <SubmitButton type="submit" className="btn">Proceed to Payment</SubmitButton>
          </Form>
          )}
        </Formik>
      </Container>
      <div>Selected Option: {selectedOption}</div>
    </div>
  );
};

const Container = styled.section`
  display: flex;
  flex-direction: column;
  padding: 20px;
  justify-content: center;
  align-items: center;
`;

const PaymentOption = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;

  input[type="radio"] {
    margin-right: 10px;
  }

  label {
    font-weight: bold;
  }
`;

const SubmitButton = styled.button`
  padding: 10px;
  // background-color: #007bff;
  // color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

export default PaymentMethodPage;
