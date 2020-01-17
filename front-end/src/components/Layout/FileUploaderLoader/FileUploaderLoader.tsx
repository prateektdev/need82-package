import React from 'react';
import loader from '../../../assets/images/FileUploader.gif';
import styles from "./Loader.module.css";

class FileUploaderLoader extends React.Component { 

  render() {
    return (
      <div className={styles.appLoader}>
      <img alt="loader" className="img-fluid" 
      src={loader}
      />
      </div>
    );
  }
}


export default FileUploaderLoader;
