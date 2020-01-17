import React from 'react';
import { connect } from 'react-redux';
import styles from "./ForgotPassword.module.css";
import LeftImage from "../LeftImage";
import { Row, Col, Container, Form, Button } from 'react-bootstrap';
import {
  userForgotPassword as userForgotPasswordAction,
  userForgotPasswordFailed as userForgotPasswordFailedAction
}
  from '../../../actions/user.actions';
import Loader from '../../Layout/Loader';
import { validate } from './ForgotPasswordValidation';
import { reduxForm } from 'redux-form';
import TextField from '../../Forms/TextField';

interface ForgotPasswordState {
  username: string,
  error: string,
  isLoading: boolean,
  isForgotPasswordSuccess: boolean,
  success: string
}


interface stateProps {
  forgotPassword: {
    message: string,
    error: string,
    isForgotPasswordSuccess: boolean,
    isLoading: boolean
  }
}

interface PropsFromDispatch {
  userForgotPassword: typeof userForgotPasswordAction,
  userForgotPasswordFailed: typeof userForgotPasswordFailedAction,
  onSubmit: any
}

class ForgotPassword extends React.Component<any, ForgotPasswordState> {

  constructor(props: any) {
    super(props);
    this.state = {
      username: '',
      error: '',
      isLoading: false,
      isForgotPasswordSuccess: false,
      success: ''
    };
  }

  handleRoute = (event: any, path: any) => {
    event.preventDefault();
    this.props.history.push(path);
  }

  handleSubmit = (e: any) => {
    e.preventDefault();
    this.props.handleSubmit(e);
  }

  render() {
    const { forgotPassworderror } = this.props;

    return (
      <div className={styles.appMainwrapper}>
        <Row className={styles.appRow}>
          {this.props.isLoading && <Loader />}
          <LeftImage />
          <Col sm={8} className={styles.appRightfield}>
            <div className={styles.appSignin} >
              Don’t have an account?
              <span className="NavLinks"
                onClick={(event) => this.handleRoute(event, 'signup')}
              >
                SIGN UP
              </span>
            </div>
            <Container className={styles.appMiddlesection}>
              <Form onSubmit={this.handleSubmit}>
                <h2>Enter your username to continue</h2>
                <TextField type="text" label="Username" name="username" />

                {
                  this.props.isForgotPasswordSuccess &&
                  <span className="text-success" >
                    {'Auth code sent successfully to registered email'}
                  </span>
                }
                {
                  forgotPassworderror &&
                  <span className="text-danger" >
                    {forgotPassworderror}
                  </span>
                }
                <div className={styles.appLoginbtn}>
                  <Button variant="primary" type="submit">
                    FORGOT PASSWORD
                     </Button>
                </div>
              </Form>
            </Container>
          </Col>
        </Row>
      </div>
    );
  }
}

const mapStateToProps = (state: stateProps) => ({
  forgotPassworderror: state.forgotPassword.error,
  message: state.forgotPassword.message,
  isForgotPasswordSuccess: state.forgotPassword.isForgotPasswordSuccess,
  isLoading: state.forgotPassword.isLoading
});

const mapDispatchToProps: PropsFromDispatch = {
  userForgotPassword: userForgotPasswordAction,
  userForgotPasswordFailed: userForgotPasswordFailedAction,
  onSubmit: userForgotPasswordAction
};

const formConnected = reduxForm({
  form: 'ForgotPasswordForm',
  validate
})(ForgotPassword);


export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(formConnected);

