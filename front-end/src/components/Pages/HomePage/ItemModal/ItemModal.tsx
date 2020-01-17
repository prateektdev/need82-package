import React from 'react';

import styles from "../HomePage.module.css";
import 'react-multi-carousel/lib/styles.css';
import itemLive from '../../../../assets/images/itemLive.svg';
import createnewitem from '../../../../assets/images/createnewitem.svg';
import { Modal, Col, Row } from 'react-bootstrap';
import { history } from '../../../../utils/history';

class ItemModal extends React.Component<any, any> {

  handleListingItem = (event: any) => {
    event.preventDefault();
    history.push('/listingitem', { tokenID: '0', tokenAddress: '0' });
  }

  render() {
    const { showModal, handleCloseItemModal } = this.props;

    return <Modal show={showModal} onHide={handleCloseItemModal} className={styles.appStartmodal}>
      <Modal.Body>
        <h2>WHATS THE NATURE OF THE ITEM YOU ARE SELLING</h2>
        <p>Please click to confirm if the item is live on the blockchain or its a new item you want to make</p>
        <Row className={styles.appModalrow}>
        {/* onClick={handleIdentifyItemModel} */}
          <Col sm={6} >
            <div >
              <img src={itemLive} />
              <span>Item is live on the blockchain</span>
            </div>
          </Col>
          <Col sm={6} onClick={(event) => this.handleListingItem(event)} className={styles.appSellingpart}>
            <div className={styles.appImgthumbnail}>
              <img src={createnewitem} />
              <span>I want to create a new item </span>
            </div>
          </Col>
        </Row>
      </Modal.Body>
    </Modal>;
  }
}
export default ItemModal;
