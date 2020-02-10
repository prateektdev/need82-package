import React from 'react';
import styles from "./CreateStore.module.css";
import { Container, Form, Button, Row, Col } from 'react-bootstrap';
import info from '../../../../assets/images/info.svg';
import "react-step-progress-bar/styles.css";
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import TextField from '../../../Forms/CreatestoreField';
import { reduxForm } from 'redux-form';
import { validate } from './CreateStoreValidation';
import CKEditor from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import FileUploaderLoader from '../../../Layout/FileUploaderLoader';

class Step1 extends React.Component<any, any> {

  handleSubmit = (event: any) => {
    event.preventDefault();
    this.props.handleSubmit(event);
  };

  render() {
    const { imagePreviewUrl, storeDescription, handleEditorStateChange, fileChangedHandler,
      isInitiating, isUpLoading, isVerifying,handleDetails } = this.props;

    let imagePreview;
    if (imagePreviewUrl) {
      imagePreview =
        (
          <div className={styles.appImagecontainer} >
            <img src={imagePreviewUrl} alt="icon" className='img-fluid' />
          </div>
        );
    }
    return (
      <div>
        <div className={styles.appSmartcontract}>
          <Container className={styles.appSmartcontainer}>
            <div className={styles.appCustomcontainer}>
              <h3>Basic Information</h3>
              <h5>What kind of package are you making?</h5>
              <div className={styles.appContarctform}>
                <Form onSubmit={this.handleSubmit}>
                  <TextField type="text" name="tourName" label="Package Name"
                    placeholder="Enter a title for your store" />
                  <TextField type="number" name="noOfDays" onChange={handleDetails} label="Number of days"
                    placeholder="Enter number of days in the package" />
                  <TextField type="number" name="noOfNights" label="Number of nights"
                    placeholder="Enter number of nights in the package" />
                  <TextField type="number" name="price" label="Price"
                    placeholder="Enter price of the package" />
                  <br />
                  <Form.Group controlId="formBasicEmail">
                    <Form.Label className={styles.appFormlabel}>
                      Upload cover photo for Package <img src={info} className="img-fluid" />
                    </Form.Label>
                    <Form.Text className="text-muted">
                      <img src={info} className="img-fluid" />
                      Upload preview image for your package
                    </Form.Text>
                  </Form.Group>
                  <div>
                    <div className={styles.appChoosephotoblock}>
                      <div className={styles.appImageuploader}>
                        <Button>Choose PHOTO</Button>
                        <span>No photo chosen</span>
                        <input type="file" accept="image/*,video/*,.pdf," name="avatar"
                          onChange={fileChangedHandler} />
                      </div>
                    </div>
                    <div className={styles.appImagepreview}>
                      <div>
                        {imagePreview}
                        <div className={styles.appimgloader}>
                          {(isInitiating || isUpLoading || isVerifying) && <FileUploaderLoader />}
                        </div>
                      </div>
                    </div>

                  </div>
                  <Form.Group controlId="formBasicEmail">
                    <div className={styles.appMetadata}>
                      <p>Package description</p>

                      <CKEditor
                        editor={ClassicEditor}
                        data={storeDescription}
                        config={{
                          toolbar: ['bold', 'italic', 'bulletedList', 'numberedList']
                        }}
                        onChange={(event, editor) => {
                          handleEditorStateChange(editor.getData())
                        }}

                      />
                    </div>
                  </Form.Group>


                  <div className={styles.appBtnfield}>
                    <Button variant="primary" type="submit" className={styles.appNextbtn}>
                      Next
                    </Button>
                  </div>
                </Form>
              </div>
            </div>
          </Container>
        </div>
      </div>
    );
  }
}

export default reduxForm<any, any>({
  form: 'CreatePackageForm',
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true,
  validate,
  initialValues: {
    tags: []
  }
})(Step1)