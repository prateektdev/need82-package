import React from 'react';

import styles from "../../../HomePage/HomePage.module.css";
import 'react-multi-carousel/lib/styles.css';
import CreatedStoreImage from '../../../../../assets/images/storeCreated.svg';
import { Modal, Col, Row, Button } from 'react-bootstrap';
import { history } from '../../../../../utils/history';

class StoreCreatedModal extends React.Component<any, any> {

  constructor(props) {
    super(props)
  }

  handleListingItem = (event: any) => {
    event.preventDefault();
    history.push('/listingitem', { tokenID: '0', tokenAddress: '0' });
  }

  render() {
    const { showModal, handleCloseItemModal } = this.props;

    return <Modal show={showModal} onHide={handleCloseItemModal} className={styles.appStartmodal}>
      <Modal.Body>
        <img src={CreatedStoreImage} className="img-fluid" alt="logo" />
        <h2>Store Created successfully</h2>
        <p>Now let's mint your first item</p>
        <Button variant="primary" onClick={this.handleListingItem} type="submit">
          Lets Mint </Button>
      </Modal.Body>
    </Modal>;
  };
}
export default StoreCreatedModal;
