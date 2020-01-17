import React from 'react';
import styles from "./Footer.module.css";
import { Container, Col, Row } from 'react-bootstrap';
import logo from '../../../assets/images/logo.png';
import discord from '../../../assets/images/discord.svg';
import reddit from '../../../assets/images/reddit-blue.svg';
import twitter from '../../../assets/images/twitter-blue.svg';
import { Link } from 'react-router-dom';
import ItemModal from '../../Pages/HomePage/ItemModal/ItemModal';
import IdentifyItemModal from '../../Pages/HomePage/IdentifyItemModal/IdentifyItemModal';

class Footer extends React.Component<any, any> {

  constructor(props: any) {
    super(props);
    this.state = {
      showModal: false,
      showIdentifyModal: false
    };
  }

  showItemModal = () => {
    this.setState({ showModal: true, showIdentifyModal: false });
  }

  handleCloseItemModal = () => {
    this.setState({ showModal: false });
  }

  handleIdentifyItemModel = () => {
    this.setState({ showModal: false, showIdentifyModal: true });
  }

  handleCloseIdentifyItemModel = () => {
    this.setState({ showIdentifyModal: false });
  }
  render() {
    return (
      <div className={styles.appFooterwrapper}>
        <Container className={styles.appFootercontainer}>
          <Row className={styles.appFooterrow}>
            <Col sm={10}>
              
              <Col className={styles.appHeadingfooter}>
                <ul className={styles.appFootersublink}>
                  <li><Link to="profile">My Profile</Link></li>
                  <li><Link to="browse">Browse</Link></li>
                </ul>
              </Col>
              <Col className={styles.appHeadingfooter}>
                <h3>Need Help?</h3>
                <ul>
                  <li><Link to="faq">FAQ</Link></li>
                  <li><Link to="guide">Mintable guide</Link></li>
                </ul>
              </Col>
              <Col className={styles.appHeadingfooter}>
                <h3>Buy an Item</h3>
                <ul>
                  <li><Link to="digitalitems">Digital Items</Link></li>
                  <li><Link to="store">Stores</Link></li>
                </ul>
              </Col>
              <Col className={styles.appHeadingfooter}>
                <h3>Legal</h3>
                <ul>
                  <li><Link to="privacypolicy">Privacy Policy</Link></li>
                  <li><Link to="termsofuse">Terms of use</Link></li>
                </ul>
              </Col>
            </Col>
            <Col sm={2}>
              <img src={logo} className="img-fluid" alt="logo" />
              <span>Need82</span>
              <div className={styles.appJoincommunity}>
                Join our community
            <ul>
                  <li><Link to="#"><img src={discord} className="img-fluid" alt="logo" /></Link></li>
                  <li><Link to="#"><img src={reddit} className="img-fluid img-circle" alt="logo" /></Link></li>
                  <li><Link to="#"><img src={twitter} className="img-fluid" alt="logo" /></Link></li>
                </ul>
              </div>
            </Col>
          </Row>
        </Container >
      </div >
    );
  }
}


export default Footer;
