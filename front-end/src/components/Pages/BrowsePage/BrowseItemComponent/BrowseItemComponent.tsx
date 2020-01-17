import React from 'react';
import styles from "../BrowseStore/BrowseStore.module.css";
import { Button, Media, Row, Col } from 'react-bootstrap';
import badges from "../../../../assets/images/badges.svg";

class BrowseItemComponent extends React.Component<any, any> {

  constructor(props) {
    super(props);
  }

  render() {
    const { item, showBuyanitem, goToItemDetails } = this.props;
    return (

      <Media onClick={() => goToItemDetails(item.category,item.id)} className={styles.appMediasection}>
        <Col sm={3} className={styles.appMediaimg}>
          <img className="mr-3" src={item && item.preview_images && item.preview_images[0]}
            alt="Generic placeholder" />
        </Col>
        <Col sm={9}>
          <Media.Body className={styles.appProfilemedia}>
            <h5>
              {item.title}
            </h5>
            <p className={styles.appprodetails}>
              {item.sub_title}
            </p>
            <Row>
              <Col sm={7}>
                <div className={styles.appOwnerfield}>
                  <span>Owner:</span> {item.store.owner_username}
                </div>
                <div className={styles.appBadgesfield}>
                  <img className="" src={badges} />
                  <p>Top seller</p>
                </div>
                <div className={styles.appStorefield}>
                  <span>Store:</span> {item.store.title}
                  <b>({item.store && item.store.item_count} Items)
                  </b>

                </div>
              </Col>
              <Col sm={5} className={styles.appItemdescription}>
                <span>Item Description</span>

                <p dangerouslySetInnerHTML={{
                  __html: item.description
                }}>
                </p>

              </Col>
            </Row>
            <div className={styles.appStorefield}>
              <Button variant="outline-primary" onClick={showBuyanitem}>
                {item.currency === 'USD' ? '$' : item.currency} {item.item_price}
              </Button>
            </div>
          </Media.Body>
        </Col>
      </Media>
    );
  }
}
export default BrowseItemComponent;
