import React from 'react';
import { connect } from 'react-redux';
import styles from "./Header.module.css";
import logo from '../../../assets/images/logo.png';
import {
  Button, Navbar, Nav,
  FormControl, InputGroup,
  DropdownButton, Dropdown, Container
} from 'react-bootstrap';
import {
  userSignIn as userSignInAction,
  userSignInFailed as userSignInFailedAction,
  userSignOut as userSignOutAction
}
  from '../../../actions/user.actions';
import { AUTHENTICATION_TOKEN } from '../../../constants/constants';
import jwtDecode from 'jwt-decode';
import { history } from '../../../utils/history';
import { getTokenFromLocalStorage } from '../../../utils/localStorage';
import SignInModal from '../../Authentication/SignInModal';
import SignUpModal from '../../Authentication/SignUpModal';
import ConfirmSignUpModal from '../../Authentication/ConfirmSignUpModal';

interface stateProps {
  signIn: {
    message: string,
    error: string,
    isSignInSuccess: boolean,
    isLoading: boolean
  }
}

interface PropsFromDispatch {
  userSignIn: typeof userSignInAction,
  userSignInFailed: typeof userSignInFailedAction,
  userSignOut: typeof userSignOutAction
}

declare global {
  interface Window {
    web3: any;
    ethereum: any;
  }
}
window.web3 = window.web3 || {};
window.ethereum = window.ethereum || {};

class Header extends React.Component<any, any> {

  constructor(props: any) {
    super(props)
    this.state = {
      isLoggedIn: false,
      signInModal: false,
      forgotPasswordModal: false,
      confirmForgotPasswordModal: false,
      signUpModal: false,
      confirmSignUpModal: false
    }
  }

  componentWillReceiveProps(props) {
    if (!props.isSignInSuccess) {
      this.handleLogOut();
    }
  }

  showModal = (modalName: string) => {
    this.setState({ [modalName]: true });
  }

  handleCloseModal = (modalName: string) => {
    this.setState({ [modalName]: false });
  }

  handleActionResponse = (key: string, status: boolean) => {
    this.setState({ [key]: status })
  }

  componentDidMount() {

    // if (this.props.showLoginModal) {
    //   this.showModal('signInModal');
    // }
    // const isLoggedIn = localStorage.getItem(AUTHENTICATION_TOKEN) &&
    //   localStorage.getItem(AUTHENTICATION_TOKEN) !== "";
    // this.setState({ isLoggedIn: isLoggedIn });
    // this.goToLogintokenExpired();
  }

  goToLogintokenExpired = () => {
    const token = getTokenFromLocalStorage(AUTHENTICATION_TOKEN);
    try {
      if (jwtDecode(token).exp < parseInt(Date.now() / 1000 + '')) {
        this.showModal('signInModal');
      }
    } catch{
      if (this.state.isLoggedIn) {
        this.handleLogOut();
      }
    }
  }

  handleLogOut = () => {
    this.setState({ isLoggedIn: false });
    history.push('/')
    history.push('/home');
    localStorage.removeItem(AUTHENTICATION_TOKEN);
  }

  handleRoute = (path: any) => {
    history.push('/')
    history.push(path);
  }


  render() {
    const { signInModal, signUpModal, confirmSignUpModal } = this.state;
    return (
      <div className={styles.App}>
        <Container className={styles.appHeadercontainer}>

          <SignInModal showModal={signInModal} handleShowModal={this.showModal} handleCloseModal={this.handleCloseModal} handleActionResponse={this.handleActionResponse} />
          <SignUpModal showModal={signUpModal} handleShowModal={this.showModal} handleCloseModal={this.handleCloseModal} handleActionResponse={this.handleActionResponse} />
          <ConfirmSignUpModal showModal={confirmSignUpModal} handleShowModal={this.showModal} handleCloseModal={this.handleCloseModal} handleActionResponse={this.handleActionResponse} />


          <Navbar expand="lg">
            <Navbar.Brand href="#home">
              <img src={logo} className="img-fluid" alt="logo"
                onClick={() => this.handleRoute('home')} />
            </Navbar.Brand>
            <InputGroup className={styles.appselectfield}>
              <FormControl
                placeholder="Search for anything" />
              <DropdownButton className={styles.appDropdownbtn}
                as={InputGroup.Append}
                variant="outline-default"
                title="Categories"
                id="input-group-dropdown-2"
              >
                <Dropdown.Item href="#">Action</Dropdown.Item>
                <Dropdown.Item href="#">Another action</Dropdown.Item>
                <Dropdown.Item href="#">Something else here</Dropdown.Item>
              </DropdownButton>
            </InputGroup>
            <Navbar.Toggle aria-controls="basic-navbar-nav" className={styles.apphamburgericon} />
            <Navbar.Collapse id="basic-navbar-nav" className={styles.appmenufield}>
              <Nav className="ml-auto">
                <Nav.Link onClick={() => this.handleRoute('add-package')}>Create a Store</Nav.Link>
               
                {!this.state.isLoggedIn && <Nav.Link onClick={() => this.showModal('signInModal')} className={styles.appLogin}>Login</Nav.Link>}              </Nav>
              {!this.state.isLoggedIn && <Button variant="primary" onClick={() => this.showModal('signUpModal')}>Create Account</Button>}
              {this.state.isLoggedIn &&
                <div className={styles.appMyaccount}>
                  <InputGroup className={styles.appselectfield}>
                    <DropdownButton
                      as={InputGroup.Append}
                      variant="outline-default"
                      title="My account"
                      id="input-group-dropdown-2"
                    >
                      <Dropdown.Item onClick={() => this.handleRoute('profile')}
                      >
                        Profile
                     </Dropdown.Item>
                      <Dropdown.Item onClick={this.handleLogOut}>log out</Dropdown.Item>
                    </DropdownButton>
                  </InputGroup>
                </div>
              }
            </Navbar.Collapse>
          </Navbar>
        </Container >

      </div >
    );
  }
}

const mapStateToProps = (state: stateProps) => ({
  error: state.signIn.error,
  message: state.signIn.message,
  isSignInSuccess: state.signIn.isSignInSuccess,
  isLoading: state.signIn.isLoading
});

const mapDispatchToProps: PropsFromDispatch = {
  userSignIn: userSignInAction,
  userSignInFailed: userSignInFailedAction,
  userSignOut: userSignOutAction,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Header);


