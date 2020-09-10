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
            <Col sm={2}>
              <img src={logo} className="img-fluid" alt="logo" />
              <span>Need82</span>
              
            </Col>
          </Row>
        </Container >
      </div >
    );
  }
}


export default Footer;
