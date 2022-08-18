import styled from '@emotion/styled';
import Link from 'next/link';
import { TextField, Checkbox, Button } from '@material-ui/core';
import { Field, Form, Formik } from 'formik';
import { boolean, number, object, string } from 'yup';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/bootstrap.css';
import { Box, Container, Typography } from '@mui/material';

//
// Styled componets until ***

const MaterialFormWrapper = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
  color: '#667085',
  margin: '64px 0 96px 0',

  '.MuiFormControl-root': {
    margin: '6px 0 24px 0',
  },

  h5: {
    color: 'black',
  },

  form: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    borderRadius: '8px',
  },

  [theme.breakpoints.up('lg')]: {
    margin: '64px 0 96px 0',
    justifyContent: 'center',
    form: {
      margin: '32px',
    },
  },
}));

const NameWrapper = styled('div')(({ theme }) => ({
  [theme.breakpoints.up('lg')]: {
    display: 'flex',
    '.divOne': {
      marginRight: '30px',
    },
  },
}));

const StyledSpan = styled.span`
  font-weight: 500;
  font-size: 14px;
  color: #344054;
`;

const CheckedSpan = styled.div`
  font-size: 12px;
  .privacy {
    text-decoration: underline;
  }
`;

const ImageWrapper = styled.div`
  width: 576px;
  height: 800px;

  margin-left: 60px;
  @media (max-width: 1024px) {
    display: none;
  }
`;

// **************

const initalValues = {
  email: '',
  name: '',
  lastName: '',
  message: '',
  phone: '',
  checkbox: false,
};

const MaterialForm = () => {
  return (
    <Container maxWidth="xl">
      <MaterialFormWrapper>
        <div>
          <Box
            sx={{
              padding: {
                lg: '0 40px',
              },
              textAlign: {
                lg: 'left',
                xs: 'center',
              },
            }}
          >
            <Typography
              variant="h4"
              component="h5"
              sx={{
                fontWeight: '600',
              }}
            >
              Get in touch
            </Typography>
            <Typography variant="body1" style={{ marginTop: '20px' }}>
              Our friendly team would love to hear from you.
            </Typography>
          </Box>
          <Formik
            initialValues={initalValues}
            validationSchema={object({
              name: string()
                .required('Please enter name')
                .min(2, 'Name too short'),
              lastName: string()
                .required('Please enter name')
                .min(2, 'Last name too short'),
              email: string()
                .required('Please enter email')
                .email('Invalid email'),
              message: string()
                .required('Please leave a message')
                .min(
                  7,
                  'Message should be minimum 7 characters long'
                ),
              checkbox: boolean().required(
                'Please agree to our privacy policy'
              ),
              phone: number().required('Please leave a phone number'),
            })}
            onSubmit={(values, formikHelpers) => {
              console.log(values);
              formikHelpers.resetForm();
            }}
          >
            {({ errors, touched, values, setFieldValue }) => (
              <Form style={{ maxWidth: '480px' }}>
                <NameWrapper>
                  <div className="divOne">
                    <StyledSpan>First name</StyledSpan>
                    <Field
                      name="name"
                      type="name"
                      as={TextField}
                      variant="outlined"
                      size="small"
                      color="primary"
                      placeholder="First name"
                      fullWidth
                      error={
                        Boolean(errors.name) && Boolean(touched.name)
                      }
                      helperText={
                        Boolean(touched.name) && errors.name
                      }
                    />
                  </div>

                  <div>
                    <StyledSpan>Last name</StyledSpan>
                    <Field
                      name="lastName"
                      type="lastName"
                      as={TextField}
                      variant="outlined"
                      size="small"
                      color="primary"
                      placeholder="Last name"
                      fullWidth
                      error={
                        Boolean(errors.lastName) &&
                        Boolean(touched.lastName)
                      }
                      helperText={
                        Boolean(touched.lastName) && errors.lastName
                      }
                    />
                  </div>
                </NameWrapper>

                <StyledSpan>Email</StyledSpan>
                <Field
                  name="email"
                  type="email"
                  as={TextField}
                  variant="outlined"
                  size="small"
                  color="primary"
                  placeholder="you@company.com"
                  fullWidth
                  error={
                    Boolean(errors.email) && Boolean(touched.email)
                  }
                  helperText={Boolean(touched.email) && errors.email}
                />

                <StyledSpan>Phone number</StyledSpan>
                <Field
                  name="phone"
                  type="phone"
                  as={PhoneInput}
                  placeholder="+1 (555) 000-0000"
                  value={values.phone}
                  containerStyle={{ margin: '5px 0 24px 0' }}
                  inputStyle={{
                    width: '100%',
                    height: '44px',
                  }}
                  onChange={(event) => setFieldValue('phone', event)}
                  error={
                    Boolean(errors.phone) && Boolean(touched.phone)
                  }
                  helperText={Boolean(touched.phone) && errors.phone}
                />

                <StyledSpan>Message</StyledSpan>
                <Field
                  name="message"
                  type="message"
                  as={TextField}
                  variant="outlined"
                  multiline={true}
                  minRows="5"
                  size="small"
                  color="primary"
                  placeholder="Leave us a message..."
                  fullWidth
                  error={
                    Boolean(errors.message) &&
                    Boolean(touched.message)
                  }
                  helperText={
                    Boolean(touched.message) && errors.message
                  }
                />

                <CheckedSpan>
                  <Field
                    name="checkbox"
                    type="checkbox"
                    as={Checkbox}
                  />
                  You agree to our friendly
                  <Link href="/privacy">
                    <span className="privacy"> privacy policy.</span>
                  </Link>
                </CheckedSpan>

                <Button
                  type="submit"
                  variant="contained"
                  size="small"
                  style={{
                    backgroundColor: '#22B56B',
                    color: 'white',
                    margin: '20px 0',
                    padding: '12px 0',
                    textTransform: 'inherit',
                  }}
                >
                  Send message
                </Button>
              </Form>
            )}
          </Formik>
        </div>
        <ImageWrapper>
          <img src="/imgs/Bigpizza.png" alt="" />
        </ImageWrapper>
      </MaterialFormWrapper>
    </Container>
  );
};

export default MaterialForm;
