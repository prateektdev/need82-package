import React from 'react';
import styles from "./CreateStore.module.css";
import { Container, Form, Button, Row, Col } from 'react-bootstrap';
import info from '../../../../assets/images/info.svg';
import "react-step-progress-bar/styles.css";
import { EditorState } from 'draft-js';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import TextField from '../../../Forms/TextField';
import { CreateStoreStepState } from './CreateStore.interface';
import { reduxForm } from 'redux-form';
import Category from './component/Category';
import 'react-tagsinput/react-tagsinput.css';
import { BatchMintComponent } from './component/BatchMint';
import { MetaDataComponent } from './component/MetaData';
import CKEditor from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

class Step2 extends React.Component<any, CreateStoreStepState> {

  constructor(props) {
    super(props);
    this.state = {
      editorState: EditorState.createEmpty(),
      selectedFile: null,
      imagePreviewUrl: null,
    };
  }

  handleSubmit = (event: any) => {
    event.preventDefault();
    this.props.handleSubmit(event);
  };

  render() {
    const { category, categories, imagePreviewUrl, rows, handleAddRow, handleCategoryChange, mintSize, fileChangedHandler, enableBatchMinting, previousPage,
      handleCheckClick, handleMintSize, handleMetadataChange, handleRemoveRow, mintOptions,
      storeDescription, handleEditorStateChange } = this.props;
    let imagePreview;
    if (imagePreviewUrl) {
      imagePreview =
        (
          <div className={styles.appImagecontainer} >
            <img src={imagePreviewUrl} alt="icon" className='img-fluid' />
          </div>
        );
    }
    console.log(this.props)
    return (
      <div>
        <div className={styles.appSmartcontract}>
          <Container className={styles.appSmartcontainer}>
            <div className={styles.appCustomcontainer}>
              <h3>Add Details to Package</h3>
              <h5>{this.props.initialValues}</h5>
              <div className={styles.appContarctform}>
                <Form onSubmit={(formData) => this.handleSubmit(formData)}>
                  <TextField type="text" name="tourName" label="Package Name"
                    placeholder="Enter a title for your store" />
                  <TextField type="number" name="noOfDays" label="Number of days"
                    placeholder="Enter number of days in the package" />
                  <TextField type="number" name="noOfNights" label="Number of nights"
                    placeholder="Enter number of nights in the package" />
                  <TextField type="text" name="price" label="Price"
                    placeholder="Enter price of the package" />
                  <Form.Group controlId="formBasicEmail">
                    <div className={styles.appMetadata}>
                      <h2>Other Metadata</h2>
                      <span>Add extra data on your token (maximun of 3 data allowed)</span>
                      <MetaDataComponent
                        rows={rows}
                        disabled={false}
                        handleAddRow={handleAddRow}
                        handleMetadataChange={handleMetadataChange}
                        handleRemoveRow={handleRemoveRow}
                      />

                    </div>
                  </Form.Group>
                  <p>Package description</p>
                  <CKEditor
                    editor={ClassicEditor}
                    disabled={true}
                    config={{
                      toolbar: ['bold', 'italic', 'bulletedList', 'numberedList']
                    }}
                    data={storeDescription}
                    onChange={(event, editor) => {
                      handleEditorStateChange(editor.getData())
                    }}

                  />
                  <div className={styles.appBtnfield}>
                    <Button type="button" variant="primary" className={styles.appprevbtn}
                      onClick={previousPage}>
                      EDIT
                  </Button>
                    <Button type="submit" variant="primary" className={styles.appNextbtn}>
                      PROCEED
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
  forceUnregisterOnUnmount: true
})(Step2);
