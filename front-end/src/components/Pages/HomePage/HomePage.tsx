import React from 'react';
import Header from '../../Layout/Header';
import Footer from '../../Layout/Footer';
import styles from "./HomePage.module.css";
import { Figure, ButtonGroup, Button, Container, Col, Row, Card } from 'react-bootstrap';
import chat_icon from '../../../assets/images/chat_icon.svg';
import sale_img from '../../../assets/images/sale_img.svg';
import ViewItem from "./ViewItem/ViewItem";
import rightarrow from '../../../assets/images/right_arrow.png';
import shop from '../../../assets/images/shop.png';
import SellingItem from "./SellingItem/SellingItem";
import Rectangle from '../../../assets/images/Rectangle.png';
import ItemModal from './ItemModal/ItemModal';
import IdentifyItemModal from './IdentifyItemModal/IdentifyItemModal';

class HomePage extends React.Component<any, any> {

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
      <div>
        <Header
          history={this.props.history}
          showLoginModal={this.props.location &&
            this.props.location.state &&
            this.props.location.state.openLoginModal}></Header>
        <Figure className={styles.appBannerimg}>
          <Figure.Caption>
            <Container className={styles.appContainerFigure}>
              <h2>Create or Buy Package</h2>
              <p>Turn your dreams on <b>Need82</b> to memories</p>
              <ButtonGroup className={styles.appBtnblock}>
                <Button variant="primary" className={styles.appStartbtn} onClick={this.showItemModal}>
                  START Buying
                   </Button>
                <Button variant="primary" className={styles.appStartbtn}>
                  START Selling
                   </Button>
              </ButtonGroup>
              <div className={styles.appJoinbtn}>
                <Button variant="primary">
                  <img src={chat_icon} className="img-fluid" alt="logo" />
                  Join our discord community
                   </Button>
              </div>
            </Container>
          </Figure.Caption>
        </Figure>
        
        <Container className={styles.appCardcontainer}>
          <Row className={styles.appCardsection}>
            <Col sm={6}>
              <Card className={styles.appCardblock}>PLACE YOUR ADVERT HERE</Card>
            </Col>
            <Col sm={6}>
              <Card className={styles.appCardblock}>PLACE YOUR ADVERT HERE</Card>
            </Col>
          </Row>
          {/* <ViewItem /> */}
          <SellingItem />
        </Container>
       
        <Footer></Footer>
      </div>
    );
  }
}


export default HomePage;
