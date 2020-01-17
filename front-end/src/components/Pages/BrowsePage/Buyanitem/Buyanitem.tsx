import React from 'react';

import styles from "../Buyanitem/Buyanitem.module.css";
import { Modal, Row, Col, Button } from 'react-bootstrap';

import storeImg from '../../../../assets/images/storeImg.png';
import Paymentoption from '../Paymentoption/Paymentoption';


class Buyanitem extends React.Component<any, any>  {
  constructor(props: any) {
    super(props);
    this.state = {
      isOpen: false
    };
  }

  handleChange = () => {
    if(!this.state.isOpen) {
      this.props.handleCloseBuyanitem();
    }

    this.setState({ isOpen: !this.state.isOpen });
  }

  render() {
    const { showModal, handleCloseBuyanitem } = this.props;
    return (
      <div>
        <Modal show={showModal} onHide={handleCloseBuyanitem} className={styles.appStartmodal}>
          <Modal.Body>
            <Row className={styles.appBuyitemwrapper}>
              <Col sm={9}>
                <h3>Item Checkout</h3>
                <Row>
                  <Col sm={4} className={styles.appItemblockfield}>
                    <img src={storeImg} />
                    <div className={styles.appItemname}>
                      <label>Item name</label>
                      <p>Game of thrones soundtrack playlist</p>
                    </div>
                  </Col>
                  <Col sm={8} className={styles.appCheckoutdetails}>
                    <Row className={styles.appCheckoutrow}>
                      <Col sm={3} xs={6}>
                        <label>Token ID</label>
                        <span>09851</span>
                      </Col>
                      <Col sm={3} xs={6}>
                        <label>Owner</label>
                        <span>Lakeside11</span>
                      </Col>
                      <Col sm={3} xs={6}>
                        <label>Price</label>
                        <span>$300</span>
                      </Col>
                      <Col sm={3} xs={6}>
                        <label>Seller Repulation</label>
                        <span>89%</span>
                      </Col>
                    </Row>
                  </Col>
                </Row>
              </Col>
              <Col sm={3} className={styles.appOrdersummary}>
                <h4>Order Summary</h4>
                <div>
                  <label>
                    Sub - Total
            </label>
                  <b>
                    $300
            </b>
                </div>
                <div>
                  <label>
                    Pay for item via
            </label>
                  <b>
                    Metamask
            </b>
                </div>
                <Button className={styles.appProceedpay} onClick={this.handleChange}>PROCEED TO PAY</Button>
              </Col>
            </Row>
          </Modal.Body>
        </Modal>
        <Paymentoption isOpen={this.state.isOpen} />
      </div>
    );
  }
}

export default Buyanitem;
