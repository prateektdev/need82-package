import React from 'react';
import styles from "../BrowseStore/BrowseStore.module.css";
import { Media, Row, Col } from 'react-bootstrap';
import badges from "../../../../assets/images/badges.svg";

class BrowseStoreComponent extends React.Component<any, any> {

  constructor(props) {
    super(props);
  }

  render() {
    const { store, goToStoreDetails } = this.props;
    return (

      <Media onClick={() => goToStoreDetails(store.category,store.id)} className={styles.appMediasection}>
        <Col sm={3} className={styles.appMediaimg}><img className="mr-3" src={store && store.cover_image} alt="Generic placeholder" /></Col>
        <Col sm={9}>
          <Media.Body className={styles.appProfilemedia}>
            <h5>
              {store.title}
            </h5>
            <p className={styles.appprodetails}>
              {store.sub_title}
            </p>
            <Row>
              <Col sm={7}>
                <div className={styles.appOwnerfield}>
                  <span>Owner:</span> {store.owner_username}
                </div>
                <div className={styles.appBadgesfield}>
                  <img className="" src={badges} />
                  <p>Top seller</p>
                </div>
                <div className={styles.appStorefield}>
                  <span>Store:</span> {store.title} <b>({store && store.item_count} Items)</b>

                </div>
              </Col>
              <Col sm={5} className={styles.appItemdescription}>
                <span>Item Description</span>
                <p dangerouslySetInnerHTML={{
                  __html: store.description
                }}>
                </p>
              </Col>
            </Row>
          </Media.Body>
        </Col>
      </Media>
    );
  }
}
export default BrowseStoreComponent;
