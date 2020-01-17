import React from "react";
import { Image, Button } from "react-bootstrap";
import shoppingcart from "../../../../../assets/images/shoppingcart.svg";
import styles from "../Stores.module.css";
import { history } from '../../../../../utils/history';

class ItemStoresEmptyView extends React.Component {

  handleRoute = () => {
    history.push('/listingitem');
  }

  render() {
    return (
      <div className={styles.appEmptyshoppingcart}>
        <Image
          className={styles.vectorImageCreateStore}
          src={shoppingcart}
          roundedCircle
        ></Image>
        <div className={styles.appEmptyStorescontent}>
          <h6>You have no items</h6>
          <p>You need to create a item into store</p>
          <Button variant="primary" onClick={this.handleRoute}>CREATE A ITEM</Button>
        </div>
      </div>
    );
  }
}

export default ItemStoresEmptyView;
