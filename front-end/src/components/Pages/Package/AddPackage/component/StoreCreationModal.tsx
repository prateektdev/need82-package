import React from 'react';

import styles from "../../../HomePage/HomePage.module.css";
import 'react-multi-carousel/lib/styles.css';
import CreateStoreImage from '../../../../../assets/images/storeCreate.svg';
import { Modal, Col, Row } from 'react-bootstrap';

class StoreCreationModal extends React.Component<any, any> {

  constructor(props) {
    super(props)
  }

  handleListingItem = (event: any) => {
    event.preventDefault();
    this.props.history.push('/listingitem', { tokenID: '0', tokenAddress: '0' });
  }

  render() {
    const { showModal, handleCloseItemModal } = this.props;

    return <Modal show={showModal} onHide={handleCloseItemModal} className={styles.appStartmodal}>
      <Modal.Body>
        <img src={CreateStoreImage} className="img-fluid" alt="logo" />
        <h2>Creating your store</h2>
        <p>Please wait a few seconds while we create your store</p>
      </Modal.Body>
    </Modal>;
  };
}
export default StoreCreationModal ;
