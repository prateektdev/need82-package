import React from 'react';
import { connect } from 'react-redux';
import {
  userSignUp as userSignUpAction,
  userSignUpSuccess as userSignUpSuccessAction,
  userSignUpFailed as userSignUpFailedAction,
}
  from '../../../actions/user.actions';
import styles from "./SignInModal.module.css";
import metamask from "../../../assets/images/Metamask.svg";
import nftg from "../../../assets/images/Nftg.svg";
import Loader from '../../Layout/Loader';
import LeftImage from "../LeftImage";
import { Modal, Row, Col, Container, Form, Button } from 'react-bootstrap';
import { reduxForm } from 'redux-form';
import TextField from '../../Forms/TextField';
import { validate } from './SignUpValidation';
import passwordMask from '../../../assets/images/passwordMask.svg';
import closedEye from '../../../assets/images/closedEye.svg';
import { SignUpState, stateProps, PropsFromDispatch } from './SignUpModal.interface';


class SignUpModal extends React.Component<any, SignUpState> {

  constructor(props: any) {
    super(props);
    this.state = {
      username: '',
      email: '',
      password: '',
      success: '',
      isSignupSuccess: false,
      termsConditions: false,
      hidden: true
    };
  }

  handleCheckClick = (event: any): void => {
    this.setState({ termsConditions: event.target.checked });
  }

  handleRoute = (event: any, path: any) => {
    event.preventDefault();
    this.props.history.push(path);
  }

  handleSubmit = (event: any) => {
    event.preventDefault();
    this.props.handleSubmit(event);
  }

  toggleShow = () => {
    this.setState({ hidden: !this.state.hidden });
  }

  componentDidMount() {
    if (this.props.password) {
      this.setState({ password: this.props.password });
    }
  }

  componentDidUpdate = (prevProps) => {
    if(this.props.isSignupSuccess!=prevProps.isSignupSuccess){
      if(this.props.isSignupSuccess){
        this.props.handleCloseModal('signUpModal');
        this.props.handleActionResponse('isSignUp',true);
        if(!this.props.message.userConfirmed){
          this.props.handleActionResponse('isConfirmSignUp',false);
          this.props.handleShowModal('confirmSignUpModal');
        }
      }else{
        this.props.signUpStatus(false);
      }
    }
  }

  render() {
    const { showModal, handleCloseModal } = this.props;
    const { signupError,isSignupSuccess } = this.props;

    return (<Modal show={showModal} onHide={()=>handleCloseModal('signUpModal')} className={styles.appPaymentoption}>
      <Modal.Body>
       <div className={styles.appMainwrapper}>
        <Row className={styles.appRow}>
          {this.props.isLoading && <Loader />}
          <LeftImage />
          <Col sm={8} className={styles.appRightfield}>
            <div className={styles.appSignin} >
              Already a member?
              <span className="NavLinks" onClick={(event) => this.handleRoute(event, 'signin')}
              >
                SIGN IN
              </span>
            </div>
            <Container className={styles.appMiddlesection}>
              <h2>Create an account</h2>
              <Form onSubmit={this.props.handleSubmit}>
                <TextField type="email" label="Email" name="email" />
                <TextField type="text" classes={styles.appUsernameInput}
                  label="Username" name="username"
                />
                <div className={styles.appShowfield}>
                  <TextField type={this.state.hidden ? "password" : "text"}
                    label="Password" name="password"
                  />
                  <a onClick={this.toggleShow} className={styles.appeyeblock}>
                    {this.state.hidden ?
                      <img src={passwordMask} className="img-fluid" alt="logo" /> :
                      <img src={closedEye} className="img-fluid" alt="logo" />
                    }
                  </a>
                </div>
                <div>
                  <div className={styles.termsConditions}>
                    <div className={styles.appCustomcheck}>
                      <input className={styles.appCheckboxfield}
                        type="checkbox"
                        checked={this.state.termsConditions}
                        disabled={this.props.isLoading}
                        onChange={(event: any) => this.handleCheckClick(event)}>
                      </input>
                      <label className={styles.appCheckmark}></label>
                    </div>
                    <p className={styles.appAcceptcondition}>
                      Creating an account means you are okay with our
                      <a href="#"> Terms of Service</a> and <a href="#"> Privacy Policy
                      </a>
                    </p>
                  </div>
                </div>
                {
                  this.props.isSignupSuccess &&
                  <span className="text-success" >
                    {'Sign Up successfully'}
                  </span>
                }
                {
                  signupError &&
                  <span className="text-danger" >
                    {signupError}
                  </span>
                }
                <div className={styles.appLoginbtn}>
                  <Button variant="primary" disabled={!this.state.termsConditions} type="submit">
                    CREATE ACCOUNT
                     </Button>
                </div>
              </Form>
            </Container>
          </Col>
        </Row>
      </div >

      </Modal.Body>
    </Modal>);
  }
}

const mapStateToProps = (state: stateProps) => ({
  signupError: state.signUp.error,
  message: state.signUp.message,
  isLoading: state.signUp.isLoading,
  isSignupSuccess: state.signUp.isSignupSuccess
});

const mapDispatchToProps: PropsFromDispatch = {
  userSignUp:  userSignUpAction,
  userSignUpSuccess:  userSignUpSuccessAction,
  userSignUpFailed:  userSignUpFailedAction,
  onSubmit: userSignUpAction
};

const formConnected = reduxForm<any,any>({
  form: 'SignUpForm',
  validate
})(SignUpModal);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(formConnected);