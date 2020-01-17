import React from "react";
import { connect } from 'react-redux';
import { Container, Col, Image, Row, Button } from "react-bootstrap";
import ProfileImage from "../../../assets/images/profile.jpeg";
import ProfilePageIcon from "../../../assets/images/profilePageIcon.svg";
import ArrowImage from "../../../assets/images/rightarrow.svg";
import facebookImg from "../../../assets/images/facebook.svg";
import twitterImg from "../../../assets/images/twitter.svg";
import redditImg from "../../../assets/images/reddit.svg";
import storesIcon from "../../../assets/images/storesIcon.svg";
import historyIcon from "../../../assets/images/historyIcon.svg";
import myOrderIcon from "../../../assets/images/myOrdersIcon.svg";
import reviewsIcon from "../../../assets/images/reviewsIcon.svg";
import whiteBackgroundImage from "../../../assets/images/CircleImg.svg";
import badges from "../../../assets/images/badges.svg";
import Header from "../../Layout/Header";
import Footer from "../../Layout/Footer";
import styles from "./Profile.module.css";
import EditProfile from "./EditProfile";
import {
  fetchUserProfile as fetchUserProfileAction
}
  from '../../../actions/profile.actions';
import Stores from "./Stores";
import Web3 from "web3";
import { Link, Switch, Route } from "react-router-dom";
import StoresGridView from "./Stores/GridView";
import StoresItems from "./Stores/StoresItems";

interface ProfileState {
  email: string,
  id: string,
  username: string;
  displayName: string;
  about: string;
  address: string,
  wallet_token: Array<any>;
  profile_url: string;
  social_media: {
    twitter: string,
    reddit: string,
  }
}


interface stateProps {
  fetchProfile: {
    message: string,
    error: string,
    isFetchProfileSuccess: boolean,
    isLoading: boolean
  }
}

interface PropsFromDispatch {
  fetchUserProfile: typeof fetchUserProfileAction
}


class Profile extends React.Component<any, ProfileState> {
  constructor(props) {
    super(props);

    this.state = {
      id: '',
      email: '',
      username: '',
      displayName: '',
      address: '',
      about: '',
      wallet_token: [],
      profile_url: '',
      social_media: {
        twitter: '',
        reddit: ''
      }
    };
  }

  componentWillReceiveProps(props) {
    if (props.message) {
      this.setState({
        id: props.message.id,
        email: props.message.email,
        username: props.message.username,
        displayName: props.message.display_name,
        about: props.message.about,
        wallet_token: props.message.wallet_tokens,
        profile_url: props.message.profile_url
      });
    }
  }

  async componentDidMount() {
    this.props.fetchUserProfile();
  }

  async loadWeb3() {
    if (window.ethereum) {
      window.web3 = new Web3(window.ethereum);
      await window.ethereum.enable();
    }
    else if (window.web3) {
      window.web3 = new Web3(window.web3.currentProvider);
    }
    else {
      window.alert('Non-Ethereum browser detected. You should consider trying MetaMask!');
    }
  }

  render() {
    const { address } = this.state
    const { username, display_name, about, social_media, profile_image } = this.props.message;
    const location = this.props.location && this.props.location.pathname;
    const { path } = this.props.match;
    return (

      <div className={styles.App}>
        <Header />
        <Container className={styles.appProfilecontainer}>
          <Row>
            <Col sm={3}>
              <div className={styles.appSideBar}>
                <div className={styles.appMainprofilewrapper}>
                  <div className={styles.appProfilefield}>
                    <Image
                      className="img-fluid"
                      src={profile_image}
                      roundedCircle
                    />
                  </div>
                  <h3 className={styles.profileName}>{display_name}</h3>
                  <h4 className={styles.profileId}>{username}</h4>
                  <div className={styles.profileDetailsDiv}>
                    <span className={styles.profileDetails}>{address && address.substring(0, 15)}...</span>
                  </div>
                  <ul className={styles.applistProfile}>
                    <li
                      className=
                      {
                        location === `${path}/stores` ? styles.profilePageNavSelected : ''
                      }
                    >
                      <Link to={`${path}/stores`} className="link">
                        <span className={styles.profilePageNav} >
                          <Image
                            className={styles.profilePageIcon}
                            src={storesIcon}
                            rounded
                          />
                          Stores
                      </span>
                      </Link>
                    </li>

 
                                     
                  </ul>
              </div>
              <div className={styles.sidebarDiv}>
                <ul>
                  <li>
                    {
                      social_media && social_media.other ?
                        <a href={social_media.other} target="_blank">
                          <Image
                            className={styles.socialIconImageFacebook}
                            src={facebookImg}
                            roundedCircle
                          ></Image>
                        </a>
                        :
                        <Link to={'/profile'}>
                          <Image
                            className={styles.whiteBackgroundImage}
                            src={whiteBackgroundImage}
                            roundedCircle
                          ></Image>
                        </Link>
                    }
                  </li>
                  <li>
                    {
                      social_media && social_media.twitter ?
                        <a href={social_media.twitter} target="_blank">
                          <Image
                            className={styles.socialIconImageTwitter}
                            src={twitterImg}
                            roundedCircle
                          ></Image>
                        </a>
                        :
                        <Link to={'/profile'}>
                          <Image
                            className={styles.whiteBackgroundImage}
                            src={whiteBackgroundImage}
                            roundedCircle
                          ></Image>
                        </Link>
                    }
                  </li>
                  <li>
                    {
                      social_media && social_media.reddit ?
                        <a href={social_media.reddit} target="_blank">
                          <Image
                            className={styles.socialIconImageReddit}
                            src={redditImg}
                            roundedCircle
                          ></Image>
                        </a>
                        :
                        <Link to={'/profile'}>
                          <Image
                            className={styles.whiteBackgroundImage}
                            src={whiteBackgroundImage}
                            roundedCircle
                          ></Image>
                        </Link>
                    }
                  </li>
                </ul>
              </div>
              </div>
            </Col>

          <Col sm={9} className={styles.appProfilewrapper}>

            <Row className={styles.myProfileRow}>

              <div className={styles.appThumbnail}>
                <Row>
                  <Col xs={9} className={styles.appLeftprofile}>
                    <div className={styles.appProfileheading}>

                      <h3>My Profile</h3>{" "}
                      <Link to={`${path}/edit-profile`}>
                        <Button
                          variant="outline-primary"
                          className={styles.editProfileButton}
                        >
                          Edit Profile
                        </Button>
                      </Link>
                    </div>
                    <p className={styles.myProfileDetails}>
                      {about}
                    </p>
                  </Col>
                  <Col xs={3} className={styles.appBadgesseller}>
                    <div className={styles.appWell}>
                      <img src={badges} className="img-fluid" />
                      <h5>Top seller</h5>
                    </div>
                  </Col>
                </Row>
              </div>
            </Row>
            <div>
              <Switch>
                <Route path={`${path}/stores`} exact component={Stores} />
                <Route path={`${path}/stores/:store_id`} exact render={(props) =>
                  <StoresItems
                    {...props}
                  />
                } />
                <Route path={`${path}/edit-profile`} component={EditProfile} />
              </Switch>
            </div>
          </Col>

          </Row>

        </Container>
      <Footer />
      </div >
    );
  }
}


const mapStateToProps = (state: stateProps) => ({
  error: state.fetchProfile.error,
  message: state.fetchProfile.message,
  isFetchProfileSuccess: state.fetchProfile.isFetchProfileSuccess,
  isLoading: state.fetchProfile.isLoading
});

const mapDispatchToProps: PropsFromDispatch = {
  fetchUserProfile: fetchUserProfileAction,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Profile); 
