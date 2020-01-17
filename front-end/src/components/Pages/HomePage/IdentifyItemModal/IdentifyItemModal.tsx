import React from 'react';

import styles from "../HomePage.module.css";
import 'react-multi-carousel/lib/styles.css';
import { Modal, Col, Row, Form, Button } from 'react-bootstrap';
import { history } from '../../../../utils/history';

class IdentifyItemModal extends React.Component<any, any> {

  constructor(props) {
    super(props);
    this.state = {
      tokenID: '',
      tokenAddress: ''
    };
  }

  handleChange = (event: any, name: string) => {
    event.preventDefault();
    this.setState({
      [name]: event.target.value
    });
  };

  handleListingItem = (event: any) => {
    event.preventDefault();
    history.push('/listingitem', { tokenID: this.state.tokenID, tokenAddress: this.state.tokenAddress });
  }

  render() {
    const { showModal, handleCloseIdentifyItemModel, showItemModal } = this.props;
    const { tokenID, tokenAddress } = this.state;
    return <Modal show={showModal} onHide={handleCloseIdentifyItemModel} className={styles.appStartmodal}>
      <Modal.Body>
        <h2>IDENTIFY THIS ITEM ON THE BLOCKCHAIN</h2>
        <p>Enter the Token ID and Address of the item on the blockchain</p>
        <Row className={styles.appModalrow}>
          <Col sm={4} className={styles.appSellingpart}>
            <div >
              <Form.Label className={styles.appInfolabel}>Token ID</Form.Label>
              <Form.Control value={tokenID} onChange={(event) => this.handleChange(event, 'tokenID')} type="text" />
            </div>
          </Col>
          <Col sm={8} className={styles.appSellingpart}>
            <div>
              <Form.Label className={styles.appInfolabel}>Token Address</Form.Label>
              <Form.Control value={tokenAddress} onChange={(event) => this.handleChange(event, 'tokenAddress')} type="text" />
            </div>
          </Col>
        </Row>
        <Row>
          <Col sm={6}>

          </Col>
          <Col sm={6}>
            <div className={styles.appSavebtn}>
              <span onClick={showItemModal} className={styles.appCancelbtn}>
                Cancel
                </span>
              <Button variant="primary" onClick={(event) => this.handleListingItem(event)} type="submit">
                Proceed
                </Button>
            </div>
          </Col>
        </Row>
      </Modal.Body>
    </Modal>;
  }
}
export default IdentifyItemModal;
