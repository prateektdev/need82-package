import React from "react";
import { Image, Button } from "react-bootstrap";
import shoppingcart from "../../../../../assets/images/shoppingcart.svg";
import styles from "../Stores.module.css";
import { history } from '../../../../../utils/history';

class StoresEmptyView extends React.Component {

  handleRoute = () => {
    history.push('/createstore');
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
          <h6>You have No stores</h6>
          <p>You need to create a store to start selling</p>
          <Button variant="primary" onClick={this.handleRoute}>CREATE A STORE</Button>
        </div>
      </div>
    );
  }
}

export default StoresEmptyView;
