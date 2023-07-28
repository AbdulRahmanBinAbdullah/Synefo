import React, { Component } from "react";
import ForgotPasswordImage from "assets/img/login/forgot-password-image.png";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { Link } from "react-router-dom";
import { AUTH_PREFIX_PATH } from "Configs/AppConfig";
import Button from "@mui/material/Button";

class ForgetPassword extends Component {
  constructor(props) {
    super(props);
    this.state = {
      formData: {
        email: "",
      },
      sendEmail: false,
      toggleScreen: false,
      isSubmit: false,
    };
  }

  handleInputChange = (e) => {
    const { name, value } = e.target;
    const { formData } = this.state;
    formData[name] = value;
    this.setState({ formData });
  };

  handleSignIn = (e) => {
    e.preventDefault();
    this.setState({ isSubmit: true });
    const { valid } = this.validateForm(true);
    if (valid) {
      this.setState({ toggleScreen: true });
    }
  };

  validateForm = (isSubmit) => {
    const { formData } = this.state;
    let valid;
    let formErrors = {};
    if (isSubmit) {
      if (!formData.email) {
        formErrors.email = "Email is required!";
        valid = false;
      } else if (
        !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(formData.email)
      ) {
        formErrors.email = "Email format is not valid!";
        valid = false;
      } else {
        formErrors.email = "";
        valid = true;
      }
    }

    return { valid, formErrors };
  };

  render() {
    const { formData, toggleScreen, isSubmit } = this.state;
    const { formErrors } = this.validateForm(isSubmit);
    return (
      <Box className="forget-container">
        <Box className="forget-left">
          {!toggleScreen ? (
            <Box className="forget-left-content">
              <Box className="d-block width-100 back-btn">
                <Button
                  className="secondary-text-btn min-width-inherit"
                  to={`${AUTH_PREFIX_PATH}/signin`}
                  variant="outlined"
                  component={Link}
                >
                  <i className="fa-solid fa-chevron-left"></i>
                </Button>
                <span>Appkube</span>
              </Box>
              <Box className="d-block width-100 forget-text">
                <h2>Forget Password</h2>
                <p>
                  Enter the email address you used when you joines we'll send
                  you instructions to reset your password.
                </p>
                <p>
                  For security reasone, we do Not store your password. So rest
                  assured thet we will never send your password via email.
                </p>
              </Box>
              <form onSubmit={this.handleSignIn}>
                <Box sx={{ width: "100%" }}>
                  <Grid
                    container
                    rowSpacing={1}
                    columnSpacing={{ xs: 1, sm: 2, md: 3 }}
                  >
                    <Grid item xs={12}>
                      <Box className="input-group">
                        <label className="d-block" htmlFor="email">
                          Email
                        </label>
                        <input
                          id="email"
                          type="text"
                          className="form-control"
                          name="email"
                          placeholder="Input your email here"
                          value={formData.email}
                          onChange={this.handleInputChange}
                          autoComplete="on"
                        />
                        {formErrors.email ? (
                          <p className="m-b-0">{formErrors.email}</p>
                        ) : (
                          <></>
                        )}
                      </Box>
                    </Grid>
                  </Grid>
                </Box>
                <Box className="d-flex width-100 next-step">
                  <Button
                    className="primary-btn"
                    onClick={this.handleSignIn}
                    variant="contained"
                  >
                    Reset your password
                  </Button>
                </Box>
              </form>
            </Box>
          ) : (
            <Box className="forget-left-content">
              <Box className="d-block width-100 back-btn">
                <Button
                  className="secondary-text-btn min-width-inherit"
                  to={`${AUTH_PREFIX_PATH}/signin`}
                  variant="outlined"
                  component={Link}
                >
                  <i className="fa-solid fa-chevron-left"></i>
                </Button>
                <span>Back to log in</span>
              </Box>
              <Box className="d-block width-100 forget-text m-b-0">
                <h2>Check Your Email</h2>
                <p>
                  A password reset link has just been sent to your registered
                  email address. This link will remain valid for the next few
                  minutes. To proceed with resetting your password, simply click
                  on the link provided and reset your password.
                </p>
              </Box>
              <Box className="d-flex width-100 next-step">
                <Button className="primary-btn" variant="contained">
                  <Link to={`${AUTH_PREFIX_PATH}/resetpassword`}>
                    Open email app
                  </Link>
                </Button>
              </Box>
              <Box className="open-email-bottom-content">
                <p>
                  Didn’t receive the email? <a href="#">Click to resend</a>
                </p>
              </Box>
            </Box>
          )}
        </Box>
        <Box className="forget-right">
          <img src={ForgotPasswordImage} alt="forget-image" />
        </Box>
      </Box>
    );
  }
}

export default ForgetPassword;
