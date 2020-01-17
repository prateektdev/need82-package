import React from 'react';
import { connect } from 'react-redux';
import styles from "./ConfimForgotPassword.module.css";
import LeftImage from "../LeftImage";
import { Row, Col, Container, Form, Button } from 'react-bootstrap';
import {
  userConfirmForgotPassword as userConfirmForgotPasswordAction,
  userConfirmForgotPasswordFailed as userConfirmForgotPasswordFailedAction
}
  from '../../../actions/user.actions';
import Loader from '../../Layout/Loader';
import { reduxForm } from 'redux-form';
import TextField from '../../Forms/TextField';
import { validate } from './ConfirmForgotPasswordValidation';
interface ConfimForgotPasswordState {
  username: string,
  code: string,
  new_password: string,
  error: string,
  isLoading: boolean,
  isConfirmForgotPasswordSuccess: boolean,
  success: string
}


interface stateProps {

  confirmForgotPassword: {
    message: string,
    error: string,
    isConfirmForgotPasswordSuccess: boolean,
    isLoading: boolean
  }
}

interface PropsFromDispatch {
  userConfirmForgotPassword: typeof userConfirmForgotPasswordAction,
  userConfirmForgotPasswordFailed: typeof userConfirmForgotPasswordFailedAction,
  onSubmit: any
}

class ConfimForgotPassword extends React.Component<any, ConfimForgotPasswordState> {

  constructor(props: any) {
    super(props);
    this.state = {
      username: '',
      code: '',
      new_password: '',
      error: '',
      isLoading: false,
      isConfirmForgotPasswordSuccess: false,
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
    return (
      <div className={styles.appMainwrapper}>
        <Row className={styles.appRow}>
          {this.state.isLoading && <Loader />}
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
              <Form onSubmit={(event) => this.handleSubmit(event)}>
                <TextField type="text" label="Username" name="username" />
                <TextField type="text" label="code" name="code" />
                <TextField type="password" label="New Password" name="new_password" />
                {
                  this.props.isConfirmForgotPasswordSuccess &&
                  <span className="text-success" >
                    {'Password reset successfully'}
                  </span>
                }
                <div className={styles.appLoginbtn}>
                  <Button variant="primary" type="submit">
                    CONFIRM PASSWORD
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
  confirmForgotPasswordError: state.confirmForgotPassword.error,
  message: state.confirmForgotPassword.message,
  isConfirmForgotPasswordSuccess: state.confirmForgotPassword.isConfirmForgotPasswordSuccess,
  isLoading: state.confirmForgotPassword.isLoading
});

const mapDispatchToProps: PropsFromDispatch = {
  userConfirmForgotPassword: userConfirmForgotPasswordAction,
  userConfirmForgotPasswordFailed: userConfirmForgotPasswordFailedAction,
  onSubmit: userConfirmForgotPasswordAction
};


const formConnected = reduxForm({
  form: 'ConfimForgotPasswordForm',
  validate
})(ConfimForgotPassword);


export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(formConnected);



