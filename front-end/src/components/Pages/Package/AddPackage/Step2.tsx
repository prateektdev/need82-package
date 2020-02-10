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
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from 'react-accessible-accordion';

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
    const { imagePreviewUrl, details, previousPage, fileChangedHandler, handleDetailsChange } = this.props;
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
              <h3>Add Details to Package</h3>
              <h5>{this.props.initialValues}</h5>
              <div className={styles.appContarctform}>
                <Form onSubmit={(formData) => this.handleSubmit(formData)}>
                  <TextField type="text" name="tourName" label="Package Name"
                    placeholder="Enter a title for your store" />
                  {
                    details.map((detail, index) => {

                      return <Accordion allowMultipleExpanded={true} allowZeroExpanded={true} key={index} >
                        <AccordionItem> <AccordionItemHeading>
                          <AccordionItemButton>
                            <strong>Day {index + 1}</strong>
                          </AccordionItemButton>
                        </AccordionItemHeading>
                          <AccordionItemPanel>
                            <div>
                              <br />
                              <div className="row">
                                <Form.Group as={Row}>
                                  <Form.Label>Itenary</Form.Label>
                                  <Form.Control type="text" value={detail.itenary} name="itenary" onChange={handleDetailsChange}></Form.Control>
                                </Form.Group>
                                <Form.Group as={Row}>
                                  <Form.Label>Description</Form.Label>
                                  <Form.Control type="text" value={detail.description} name="description" onChange={handleDetailsChange}></Form.Control>
                                </Form.Group>
                                <Form.Group as={Row}>
                                  <Form.Label>Day</Form.Label>
                                  <Form.Control type="number" value={detail.day} name="day" onChange={handleDetailsChange}></Form.Control>
                                </Form.Group>
                                <Form.Group as={Row}>
                                  <Form.Label>Price</Form.Label>
                                  <Form.Control type="number" value={detail.price} name="price" onChange={handleDetailsChange} ></Form.Control>
                                </Form.Group>

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
                                  {/* <div className={styles.appImagepreview}>
                                    <div>
                                      {imagePreview}

                                    </div>
                                  </div> */}

                                </div>
                              </div></div>
                          </AccordionItemPanel>
                        </AccordionItem>
                      </Accordion>
                    })

                  }

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
