import React from 'react';
import loader from '../../../assets/images/loader.gif';
import styles from "./Loader.module.css";

class Loader extends React.Component<any, any> {

  render() {
    const { message } = this.props;
    return (
      <div className={styles.appLoader}>
        <img alt="loader" className="img-fluid"
          src={loader}
        />
        <span className={styles.appCaption}>{message}</span>
      </div>

    );
  }
}


export default Loader;
