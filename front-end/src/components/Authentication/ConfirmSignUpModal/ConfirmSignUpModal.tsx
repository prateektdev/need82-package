import React from 'react';
import { connect } from 'react-redux';
import {
  userConfirmSignUp as userConfirmSignUpAction,
  userConfirmSignUpFailed as userConfirmSignUpFailedAction,
  userResendConfirmSignUp as userResendConfirmSignUpAction,
  userResendConfirmSignUpFailed as userResendConfirmSignUpFailedAction
}
  from '../../../actions/user.actions';
import styles from "./ConfirmSignUpModal.module.css";
import Loader from '../../Layout/Loader';
import LeftImage from "../LeftImage";
import { Modal, Row, Col, Container, Form, Button } from 'react-bootstrap';
import { reduxForm } from 'redux-form';
import TextField from '../../Forms/TextField';
import { validate } from './ConfirmSignUpValidation';
import { ConfirmSignUpState, stateProps, PropsFromDispatch } from './ConfirmSignUpModal.interface';


class ConfirmSignUpModal extends React.Component<any, ConfirmSignUpState> {

  constructor(props: any) {
    super(props);
    this.state = {
      username: '',
      code: '',
      error: '',
      success: '',
      isConfirmSignupSuccess: false
    };
  }

  resendSignUp = async () => {
    const { username } = this.state;
    const formData = {
      username: username
    };
    this.props.userResendConfirmSignUp(formData);
  }

  handleChange = (e: any) => {
    this.setState({ username: e.target.value });
  }

  handleSubmit = (e: any) => {
    e.preventDefault();
    this.props.handleSubmit(e);
  }

  componentDidUpdate = (prevProps) => {
    if (this.props.isSignInSuccess != prevProps.isSignInSuccess) {
      if (this.props.isSignInSuccess) {
        this.props.loginStatus(true);
        this.props.handleCloseModal('confirmSignUpModal');
      } else {
        this.props.loginStatus(false);
      }
    }
  }

  render() {
    const { showModal, handleCloseModal } = this.props;
    const { errorResendOTP, errorConfirmSignup } = this.props;

    return (<Modal show={showModal} onHide={()=>handleCloseModal('confirmSignUpModal')} className={styles.appPaymentoption}>
      <Modal.Body>
        <div className={styles.appMainwrapper}>
          <Row className={styles.appRow}>
            {this.props.isLoading && <Loader />}
            {this.props.isLoadingResendOTP && <Loader />}
            <LeftImage />
            <Col sm={8} className={styles.appRightfield}>
              <Container className={styles.appMiddlesection}>
                <h2>Confirm Your Account</h2>
                <Form onSubmit={(event) => this.handleSubmit(event)}>
                  <TextField type="text" label="Username" name="username"
                    value={this.state.username}
                    onChange={(event) => this.handleChange(event)}
                  />
                  <TextField type="text" label="code" name="code" />
                  <Form.Group controlId="formBasicCheckbox">
                    <span className="NavLinks" onClick={this.resendSignUp}>
                      Resend Authentication Code
                  </span>
                  </Form.Group>
                  {
                    this.props.isConfirmSignupSuccess &&
                    <span className="text-success" >
                      {'User Account confirmed successfully'}
                    </span>
                  }

                  {
                    errorConfirmSignup &&
                    <span className="text-danger" >
                      {errorConfirmSignup}
                    </span>
                  }
                  {
                    errorResendOTP &&
                    <span className="text-success" >
                      {errorResendOTP}
                    </span>
                  }

                  <div className={styles.appLoginbtn}>
                    <Button variant="primary" type="submit">
                      CONFIRM ACCOUNT
                     </Button>
                  </div>
                </Form>
              </Container>
            </Col>

          </Row>
        </div>

      </Modal.Body>
    </Modal>);
  }
}

const mapStateToProps = (state: stateProps) => ({
  errorConfirmSignup: state.confirmSignUp.error,
  message: state.confirmSignUp.message,
  isConfirmSignupSuccess: state.confirmSignUp.isConfirmSignupSuccess,
  isLoading: state.confirmSignUp.isLoading,
  errorResendOTP: state.resendConfirmSignUp.error,
  messageResendOTP: state.resendConfirmSignUp.message,
  isConfirmSignupSuccessResendOTP: state.resendConfirmSignUp.isResendConfirmSignupSuccess,
  isLoadingResendOTP: state.resendConfirmSignUp.isLoading,
});

const mapDispatchToProps: PropsFromDispatch = {
  userConfirmSignUp: userConfirmSignUpAction,
  userConfirmSignUpFailed: userConfirmSignUpFailedAction,
  userResendConfirmSignUp: userResendConfirmSignUpAction,
  userResendConfirmSignUpFailed: userResendConfirmSignUpFailedAction,
  onSubmit: userConfirmSignUpAction
};



const formConnected = reduxForm<any,any>({
  form: 'ConfirmSignUpForm',
  validate
})(ConfirmSignUpModal);


export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(formConnected);
