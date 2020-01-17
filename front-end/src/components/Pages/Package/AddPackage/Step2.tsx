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
    return (
      <div>
        <div className={styles.appSmartcontract}>
          <Container className={styles.appSmartcontainer}>
            <div className={styles.appCustomcontainer}>
              <h3>Information Preview</h3>
              <h5>Store Category</h5>
              <div className={styles.appContarctform}>
                <Form onSubmit={(formData) => this.handleSubmit(formData)}>
                  <Category category={category} categories={categories} handleCategoryChange={(selectedKey) => handleCategoryChange(selectedKey)} />
                  <Form.Group controlId="formBasicEmail">
                    <Form.Label className={styles.appFormlabel}
                    >
                      Store title <img src={info} className="img-fluid" />
                    </Form.Label>
                    <TextField type="text" name="title" disabled
                      placeholder="Enter a title for your store" />
                  </Form.Group>
                  <Form.Group controlId="formBasicEmail">
                    <Form.Label className={styles.appFormlabel}
                    >
                      Store sub-title <img src={info} className="img-fluid" />
                    </Form.Label>
                    <TextField type="text" name="sub_title" disabled
                      placeholder="Enter a subtitle for your store" />
                  </Form.Group>
                  <Form.Group controlId="formBasicEmail">
                    <Form.Label className={styles.appFormlabel}>
                      Upload cover photo for store <img src={info} className="img-fluid" />
                    </Form.Label>
                    <Form.Text className="text-muted">
                      <img src={info} className="img-fluid" />
                      Upload preview image for your store
                    </Form.Text>
                  </Form.Group>
                  <div>
                    <Row>
                      <Col className={styles.appChoosephotoblock}>
                        <div className={styles.appImageuploader}>
                          <Button>Choose PHOTO</Button>
                          <span>No photo chosen</span>
                          <input type="file" disabled accept="image/*,video/*,.pdf," name="avatar"
                            onChange={fileChangedHandler} />
                        </div>
                      </Col>
                      <Col className={styles.appImagepreview}>
                        {imagePreview}
                      </Col>
                    </Row>
                  </div>
                  <Form.Group controlId="formBasicEmail">
                    <div className={styles.appMetadata}>
                      <h2>Other Metadata</h2>
                      <span>Add extra data on your token (maximun of 3 data allowed)</span>
                      <MetaDataComponent rows={rows} disabled={true} handleAddRow={handleAddRow} handleMetadataChange={handleMetadataChange} handleRemoveRow={handleRemoveRow} />

                      <BatchMintComponent data={mintOptions}
                        mintSize={mintSize}
                        enableBatchMinting={enableBatchMinting}
                        handleCheckClick={handleCheckClick}
                        handleMintSize={handleMintSize} />
                    </div>
                  </Form.Group>
                  <p>Store description</p>
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
  form: 'CreateStoreForm',
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true
})(Step2);
