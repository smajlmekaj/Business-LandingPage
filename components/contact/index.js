import styled from '@emotion/styled';
import Link from 'next/link';
import { TextField, Checkbox, Button } from '@material-ui/core';
import { Field, Form, Formik } from 'formik';
import { boolean, number, object, string } from 'yup';
import MuiPhoneNumber from 'material-ui-phone-number';
import { Box, Container, Typography } from '@mui/material';

//
// Styled componets until ***

const MaterialFormWrapper = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',

  margin: '40px',
  color: '#667085',
  h5: {
    color: 'black',
  },

  form: {
    display: 'flex',
    flexDirection: 'column',
    padding: '12px',
    minWidth: '350px',
    borderRadius: '8px',
    margin: '32px',
  },

  '.input-2': {
    input: {
      height: '90px',
    },
  },

  [theme.breakpoints.up('lg')]: {
    margin: '64px 0 96px 0',
    justifyContent: 'space-between',
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
  margin: 10px 0;
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
  checkBox: false,
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
              checkBox: boolean().required(
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
                      label="First name"
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
                      label="Last name"
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
                  label="you@company.com"
                  fullWidth
                  error={
                    Boolean(errors.email) && Boolean(touched.email)
                  }
                  helperText={Boolean(touched.email) && errors.email}
                />

                <Field
                  name="phone"
                  type="phone"
                  as={MuiPhoneNumber}
                  regions={['europe', 'north-america']}
                  defaultCountry={'us'}
                  value={values.phone}
                  onChange={(event) => setFieldValue('phone', event)}
                  error={
                    Boolean(errors.phone) && Boolean(touched.phone)
                  }
                  helperText={Boolean(touched.phone) && errors.phone}
                  fullWidth
                  style={{ margin: '20px 0' }}
                />

                <StyledSpan>Message</StyledSpan>
                <Field
                  name="message"
                  type="message"
                  className="input-2"
                  as={TextField}
                  variant="outlined"
                  size="small"
                  color="primary"
                  label="Leave us a message..."
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
                    name="checkBox"
                    type="checkBox"
                    as={Checkbox}
                    error={
                      Boolean(errors.checkBox) &&
                      Boolean(touched.checkBox)
                    }
                  />
                  You agree to our friendly
                  <Link href="/privacy">
                    <span className="privacy"> privacy policy.</span>
                  </Link>
                </CheckedSpan>

                <Button
                  textTransform="inherit"
                  type="submit"
                  variant="contained"
                  size="small"
                  style={{
                    backgroundColor: '#22B56B',
                    color: 'white',
                    margin: '20px 0',
                    padding: '12px 0',
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