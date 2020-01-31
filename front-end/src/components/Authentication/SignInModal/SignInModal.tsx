import React from 'react';
import { connect } from 'react-redux';
import {
  userSignIn as userSignInAction,
  userSignInFailed as userSignInFailedAction,
  userSignInSuccess as userSignInSuccessAction
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
import { validate } from './SignInValidation';
import passwordMask from '../../../assets/images/passwordMask.svg';
import closedEye from '../../../assets/images/closedEye.svg';
import { SignInState, stateProps, PropsFromDispatch } from './SignIn.interface';
import { history } from '../../../utils/history';
import { setTOLocalStorage } from '../../../utils/localStorage';


class SignInModal extends React.Component<any, SignInState> {

  constructor(props: any) {
    super(props);
    this.state = {
      hidden: true
    };
  }

  handleRoute = (event: any, path: any) => {
    event.preventDefault();
    history.push(path);
  }

  componentDidUpdate = (prevProps) => {
    console.log(this.props);
    if (this.props.isLoading != prevProps.isLoading) {
      if (this.props.isSignInSuccess) {
        setTOLocalStorage('ROLE',this.props.message.role);
        setTOLocalStorage('TOKEN',this.props.message.token);
        this.props.handleActionResponse('isLoggedIn', true);
        this.props.handleCloseModal('signInModal');
      } else {
        this.props.handleActionResponse('isLoggedIn', false);
          this.props.handleCloseModal('signInModal');
      }
    }
  }

  handleSignUp = () => {
    this.props.handleCloseModal('signInModal');
    this.props.handleShowModal('signUpModal');
  }

  handleSubmit = (e: any) => {
    e.preventDefault();
    this.props.handleSubmit(e);
  }

  toggleShow = () => {
    this.setState({ hidden: !this.state.hidden });
  }

  render() {
    const { showModal, handleCloseModal } = this.props;
    const { signInError, isSignInSuccess } = this.props;

    return (<Modal show={showModal} onHide={() => handleCloseModal('signInModal')} className={styles.appPaymentoption}>
      <Modal.Body>
        <div className={styles.appMainwrapper} >
          <Row className={styles.appRow}>
            {this.props.isLoading && <Loader />}
            <LeftImage />
            <Col sm={8} className={styles.appRightfield}>
              <div className={styles.appSignin} >
                Don’t have an account?
              <span className="NavLinks"
                  onClick={this.handleSignUp} >
                  SIGN UP
              </span>
              </div>
              <Container className={styles.appMiddlesection}>
                <Form onSubmit={(event) => this.handleSubmit(event)}>
                  <h2>Welcome Back,</h2>
                  <TextField type="text" label="Username" name="username" />
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
                  <Form.Group controlId="formBasicCheckbox">
                  </Form.Group>
                  <span className={styles.Forgetpass}
                    onClick={(event) => this.handleRoute(event, 'forgot-password')}
                  >
                    FORGOT MY PASSWORD
                  </span>
                  {
                    isSignInSuccess &&
                    <span className="text-success" >
                      {'Login Successfully'}
                    </span>
                  }
                  {
                    signInError &&
                    <span className="text-danger" >
                      {signInError}
                    </span>
                  }
                  <div className={styles.appLoginbtn}>
                    <Button variant="primary" type="submit">
                      LOG IN
                     </Button>
                  </div>
                  <div className={styles.appSigninbottom} >
                    Don’t have an account?
                  <span className="NavLinks" onClick={(event) => this.handleRoute(event, 'signup')
                    }>
                      SIGN UP
                </span>
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
  signInError: state.signIn.error,
  message: state.signIn.message,
  isSignInSuccess: state.signIn.isSignInSuccess,
  isLoading: state.signIn.isLoading
});

const mapDispatchToProps: PropsFromDispatch = {
  onSubmit: userSignInAction,
  userSignInSuccess: userSignInSuccessAction,
  userSignInFailed: userSignInFailedAction,
};


const formConnected = reduxForm<any, any>({
  form: 'SignInForm',
  validate
})(SignInModal);


export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(formConnected);

