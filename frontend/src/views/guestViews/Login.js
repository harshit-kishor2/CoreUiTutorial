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
  CInputGroupPrepend,
  CInputGroupText,
  CInputGroup,
  CCardHeader,
  CFormText,
} from "@coreui/react";

import { connect } from "react-redux";
import CIcon from "@coreui/icons-react";
import ErrorLabel from "src/components/ErrorLabel";
import {
  EMAIL_PATTERN,
  EMAIL_REQUIRED,
  INVALID_EMAIL,
  PASSWORD_REQUIRED,
  VALID_PASSWORD,
} from "src/helper";

export class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
    };
  }

  onLoginFormSubmit = (values, { resetForm }) => {
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
      <div className="c-app c-default-layout flex-row ">
        <CContainer>
          <CRow className="justify-content-center">
            <CCol md="6">
              <CCardGroup>
                <CCard>
                  <CCardHeader>
                    <h5>Login</h5>
                    <span className="text-muted">Sign-in your account</span>
                  </CCardHeader>
                  <CCardBody>
                    <Formik
                      initialValues={{
                        email: "",
                        password: "",
                      }}
                      onSubmit={this.onLoginFormSubmit}
                      validationSchema={Yup.object({
                        email: Yup.string()
                          .email(INVALID_EMAIL)
                          .required(EMAIL_REQUIRED),
                        password: Yup.string()
                          .matches(EMAIL_PATTERN, VALID_PASSWORD)
                          .required(PASSWORD_REQUIRED),
                      })}
                    >
                      {(formik) => (
                        <CForm onSubmit={formik.handleSubmit}>
                          {/* this.props.authReducer.loadingStatus === "error" && <CAlert color="danger">
                                                      {this.props.authReducer.error}
                                                </CAlert> */}
                          <CFormGroup className="mb-3">
                            <CInputGroup>
                              <CInputGroupPrepend>
                                <CInputGroupText>Email</CInputGroupText>
                              </CInputGroupPrepend>

                              <CInput
                                className={
                                  formik.errors.email
                                    ? "form-control is-invalid"
                                    : formik.values.email
                                    ? "form-control is-valid"
                                    : "form-control"
                                }
                                type="text"
                                placeholder="Email"
                                autoComplete="email"
                                id="email"
                                {...formik.getFieldProps("email")}
                              />
                              <CInputGroupPrepend>
                                <CInputGroupText>
                                  <CIcon name="cil-at" />
                                </CInputGroupText>
                              </CInputGroupPrepend>
                            </CInputGroup>
                            {formik.errors.email ? (
                              <ErrorMessage
                                name="email"
                                render={(msg) => <ErrorLabel message={msg} />}
                              />
                            ) : (
                              <CFormText className="help-block">
                                Please enter your email
                              </CFormText>
                            )}
                          </CFormGroup>
                          <CFormGroup className="mb-4">
                            <CInputGroup>
                              <CInputGroupPrepend>
                                <CInputGroupText>Password</CInputGroupText>
                              </CInputGroupPrepend>

                              <CInput
                                className={
                                  formik.errors.password
                                    ? "form-control is-invalid"
                                    : formik.values.password
                                    ? "form-control is-valid"
                                    : "form-control"
                                }
                                type="password"
                                placeholder="Password"
                                autoComplete="current-password"
                                id="password"
                                {...formik.getFieldProps("password")}
                              />
                              <CInputGroupPrepend>
                                <CInputGroupText>
                                  <CIcon name="cil-lock-locked" />
                                </CInputGroupText>
                              </CInputGroupPrepend>
                            </CInputGroup>
                            {formik.errors.password ? (
                              <ErrorMessage
                                name="password"
                                render={(msg) => <ErrorLabel message={msg} />}
                              />
                            ) : (
                              <CFormText className="help-block">
                                Please enter your Password
                              </CFormText>
                            )}
                          </CFormGroup>
                          <CRow>
                            <CCol xs="6">
                              <CButton
                                type="submit"
                                color="primary"
                                className="px-4"
                              >
                                Login
                              </CButton>
                            </CCol>
                            <CCol xs="6" className="text-right">
                              <Link to="/forgot-password">
                                <CButton color="link" className="px-0">
                                  Forgot Password
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
      </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(Login);
