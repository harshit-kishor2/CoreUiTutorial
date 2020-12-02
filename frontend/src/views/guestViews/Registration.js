import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import { Formik, ErrorMessage } from "formik";
import * as Yup from "yup";
import {
  CButton,
  CCard,
  CCardBody,
  CCardGroup,
  CCol,
  CContainer,
  CForm,
  CInput,
  CRow,
  CFormGroup,
  CAlert,
  CInputGroupText,
  CInputGroupPrepend,
  CInputGroup,
  CCardHeader,
  CLabel,
  CSelect,
} from "@coreui/react";

import { connect } from "react-redux";
import CIcon from "@coreui/icons-react";
import ErrorLabel from "src/components/ErrorLabel";
import {
  DOB_REQUIRED,
  EMAIL_PATTERN,
  EMAIL_REQUIRED,
  FIRST_NAME_REQUIRED,
  INVALID_EMAIL,
  LAST_NAME_REQUIRED,
  PASSWORD_REQUIRED,
  RE_PASSWORD_REQUIRED,
  USER_GENDER_REQUIRED,
  USER_PASSWORD_MATCH,
  VALID_PASSWORD,
} from "src/helper";

export class Registration extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
    };
  }

  onFormSubmit = (values, { resetForm }) => {
    console.log(values);
    // this.props.superAdminLogin(values)
  };

  render() {
    /* if (this.props.authReducer.userDetails != null) {
      return (<Redirect to="/dashboard" />)
    } else if (this.props.authReducer.loadingStatus === "loaded") {
      return (<Redirect to="/dashboard" />)
    } else { */
    return (
      <CContainer>
        <CRow className="justify-content-center">
          <CCol md="6">
            <CCardGroup>
              <CCard>
                <CCardHeader>
                  <h5>Register</h5>
                  <span className="text-muted">Create your account</span>
                </CCardHeader>

                <CCardBody>
                  <Formik
                    initialValues={{
                      firstName: "",
                      lastName: "",
                      email: "",
                      gender: "",
                      dob: "",
                      password: "",
                      rePassword: "",
                    }}
                    onSubmit={this.onFormSubmit}
                    validationSchema={Yup.object({
                      firstName: Yup.string().required(FIRST_NAME_REQUIRED),
                      lastName: Yup.string().required(LAST_NAME_REQUIRED),
                      dob: Yup.string().required(DOB_REQUIRED),
                      email: Yup.string()
                        .email(INVALID_EMAIL)
                        .required(EMAIL_REQUIRED),
                      password: Yup.string()
                        .matches(EMAIL_PATTERN, VALID_PASSWORD)
                        .required(PASSWORD_REQUIRED),
                      rePassword: Yup.string()
                        .matches(EMAIL_PATTERN, VALID_PASSWORD)
                        .required(RE_PASSWORD_REQUIRED)
                        .oneOf([Yup.ref("password")], USER_PASSWORD_MATCH),
                      gender: Yup.string()
                        .oneOf(["Male", "Female"], USER_GENDER_REQUIRED)
                        .required(USER_GENDER_REQUIRED),
                    })}
                  >
                    {(formik) => (
                      <CForm onSubmit={formik.handleSubmit}>
                        {/* this.props.authReducer.loadingStatus === "error" && <CAlert color="danger">
                              {this.props.authReducer.error}
                        </CAlert> */}
                        <CFormGroup className="my-0">
                          <CCol>
                            <CFormGroup className="">
                              <CInputGroup>
                                <CInputGroupPrepend>
                                  <CInputGroupText>
                                    <CIcon name="cil-user" />
                                  </CInputGroupText>
                                </CInputGroupPrepend>
                                <CInput
                                  type="text"
                                  placeholder="First Name"
                                  autoComplete="name"
                                  id="firstName"
                                  {...formik.getFieldProps("firstName")}
                                />
                              </CInputGroup>
                              <ErrorMessage
                                name="firstName"
                                render={(msg) => <ErrorLabel message={msg} />}
                              />
                            </CFormGroup>
                          </CCol>

                          <CCol>
                            <CFormGroup className="">
                              <CInputGroup>
                                <CInputGroupPrepend>
                                  <CInputGroupText>
                                    <CIcon name="cil-user" />
                                  </CInputGroupText>
                                </CInputGroupPrepend>
                                <CInput
                                  type="text"
                                  placeholder="Last Name"
                                  autoComplete="name"
                                  id="lastName"
                                  {...formik.getFieldProps("lastName")}
                                />
                              </CInputGroup>
                              <ErrorMessage
                                name="lastName"
                                render={(msg) => <ErrorLabel message={msg} />}
                              />
                            </CFormGroup>
                          </CCol>

                          <CCol>
                            <CFormGroup className="">
                              <CInputGroup>
                                <CInputGroupPrepend>
                                  <CInputGroupText>
                                    <CIcon name="cil-envelope-open" />
                                  </CInputGroupText>
                                </CInputGroupPrepend>
                                <CInput
                                  type="text"
                                  placeholder="Email"
                                  autoComplete="email"
                                  id="email"
                                  {...formik.getFieldProps("email")}
                                />
                              </CInputGroup>
                              <ErrorMessage
                                name="email"
                                render={(msg) => <ErrorLabel message={msg} />}
                              />
                            </CFormGroup>
                          </CCol>

                          <CCol>
                            <CFormGroup className="">
                              <CInputGroup>
                                <CInputGroupPrepend>
                                  <CInputGroupText>
                                    <CIcon name="cil-calendar" />
                                  </CInputGroupText>
                                </CInputGroupPrepend>
                                <CInput
                                  type="date"
                                  placeholder="Date of Birth"
                                  id="dob"
                                  {...formik.getFieldProps("dob")}
                                />
                              </CInputGroup>
                              <ErrorMessage
                                name="dob"
                                render={(msg) => <ErrorLabel message={msg} />}
                              />
                            </CFormGroup>
                          </CCol>

                          <CCol>
                            <CFormGroup>
                              <CInputGroup>
                                <CInputGroupPrepend>
                                  <CInputGroupText>
                                    <CIcon name="cil-wc" />
                                  </CInputGroupText>
                                </CInputGroupPrepend>
                                <CSelect
                                  id="gender"
                                  placeholder="Select gender"
                                  {...formik.getFieldProps("gender")}
                                >
                                  <option>Select Gender</option>
                                  <option value="Male">Male</option>
                                  <option value="Female">Female</option>
                                </CSelect>
                              </CInputGroup>
                              <ErrorMessage
                                name="gender"
                                render={(msg) => <ErrorLabel message={msg} />}
                              />
                            </CFormGroup>
                          </CCol>

                          <CCol>
                            <CFormGroup className="">
                              <CInputGroup>
                                <CInputGroupPrepend>
                                  <CInputGroupText>
                                    <CIcon name="cil-lock-locked" />
                                  </CInputGroupText>
                                </CInputGroupPrepend>
                                <CInput
                                  type="password"
                                  placeholder="Password"
                                  autoComplete="current-password"
                                  id="password"
                                  {...formik.getFieldProps("password")}
                                />
                              </CInputGroup>
                              <ErrorMessage
                                name="password"
                                render={(msg) => <ErrorLabel message={msg} />}
                              />
                            </CFormGroup>
                          </CCol>

                          <CCol>
                            <CFormGroup className="">
                              <CInputGroup>
                                <CInputGroupPrepend>
                                  <CInputGroupText>
                                    <CIcon name="cil-lock-locked" />
                                  </CInputGroupText>
                                </CInputGroupPrepend>
                                <CInput
                                  type="password"
                                  placeholder="RePassword"
                                  id="rePassword"
                                  {...formik.getFieldProps("rePassword")}
                                />
                              </CInputGroup>
                              <ErrorMessage
                                name="rePassword"
                                render={(msg) => <ErrorLabel message={msg} />}
                              />
                            </CFormGroup>
                          </CCol>
                        </CFormGroup>

                        <CRow>
                          <CCol>
                            <CButton
                              type="submit"
                              color="primary"
                              className="px-4 mx-3"
                            >
                              Register
                            </CButton>
                          </CCol>
                          <CCol className="text-right">
                            <Link to="/login">
                              <CButton color="link" className="px-0">
                                Login
                              </CButton>
                            </Link>
                          </CCol>
                        </CRow>
                      </CForm>
                    )}
                  </Formik>
                </CCardBody>
              </CCard>
            </CCardGroup>
          </CCol>
        </CRow>
      </CContainer>
    );
  }
  //}
}

const mapStateToProps = (state) => {
  return {
    ...state,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    //    superAdminLogin: params => dispatch(superAdminLogin(params))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Registration);
