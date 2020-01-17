import React from 'react';

import styles from "../Paymentoption/Paymentoption.module.css";
import metamask from "../../../../assets/images/metamask.svg";
import nftg from "../../../../assets/images/Nftg.svg";
import { Modal, Row, Col } from 'react-bootstrap';


class Paymentoption extends React.Component<any, any> {
  render() {
    const { isOpen } = this.props;

    return (<Modal show={isOpen} className={styles.appPaymentoption}>
      <Modal.Body>

        <h3>Select how to pay for item</h3>
        <p>Please click either to select as payment option</p>
        <Row className={styles.apppaymentsection}>
          <Col xs={6}>
            <div className={styles.appimagefield}><a href="#" className='rounded-circle'><img src={metamask} /></a></div>
          </Col>
          <Col xs={6}>
            <div className={styles.appimagefield}><a href="#" className='rounded-circle'><img src={nftg} /></a></div>
          </Col>
        </Row>
      </Modal.Body>
    </Modal>);
  }
}

export default Paymentoption;
