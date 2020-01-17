import React from 'react';
import styles from "./LeftImage.module.css";
import left_img from '../../../assets/images/left_img.svg';
import { Col } from 'react-bootstrap';

class LeftImage extends React.Component {

  render() {
    return (
      <Col sm={4} className={styles.appLeftfield}>
        <h3>
          You’re just a step away from buying and selling digital items to earn some cool cash
        </h3>
        <img src={left_img} className="img-fluid" alt="logo" />
      </Col>
    );
  }
}

export default LeftImage;
