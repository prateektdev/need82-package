import React from 'react';
import Header from '../../../Layout/Header';
import Footer from '../../../Layout/Footer';
import styles from "./CreateStore.module.css";
import homemain from '../../../../assets/images/homemain.svg';
import "react-step-progress-bar/styles.css";
import { Container, Breadcrumb } from 'react-bootstrap';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import {
  addStore as addStoreAction,
} from '../../../../actions/store.actions';
import {
  uploadFile as uploadFileAction,
} from '../../../../actions/fileUpload.actions';
import Step1 from './Step1';
import Step2 from './Step2';
import { connect } from 'react-redux';
import { change, reduxForm } from 'redux-form';
import { PropsFromDispatch, CreateStoredataState, stateProps } from './CreateStore.interface';
import { EditorState } from 'draft-js';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import { INVALID_IMAGE, INVALID_CATEGORY, INVALID_STORE_DESCRIPTION, NAVIGATION_TIMEOUT } from '../../../../constants/constants';



class AddPackage extends React.Component<any, CreateStoredataState> {

  constructor(props) {
    super(props);
    this.state = {
      page: 0,
      details: [{}],
      isUpLoading: false,
      isLoading: false,
      filetype: null,
      isFileUploadVerifyMessage: '',
      isFileUploadVerifiedSuccess: false,
      isUpLoaded: false,
      isFileUploadSuccess: false,
      editorState: EditorState.createEmpty(),
      selectedFile: null,
      imagePreviewUrl: null,
      enableBatchMinting: false,
      mintSize: 1,
      mintOptions: [{ amount: 100, size: 20 }, { amount: 200, size: 40 }],
      storeDescription: '',
      showModal: false,
      showMintOptions: false,
      errors: {
        avatar: INVALID_IMAGE,
        category: INVALID_CATEGORY,
        validate: false,
        submitted: false
      }
    };
  }

  handleDetails = (event) => {
    let rows = [];
    for (var k = 0; k < event.target.value; k++) {
      rows.push({});
    }
    this.setState(
      {
        details: rows
      }
    );
  }

  nextPage = () => {
    // if (this.handleValidation()) {
    this.setState(
      {
        page: this.state.page + 1
      }
    );
    // }
  };

  previousPage = () => {
    this.setState(
      {
        page: this.state.page - 1,
      }
    );
  };

  handleEditorStateChange: Function = (data) => {
    this.setState({
      storeDescription: data
    }, () => { this.handleValidation() });
    this.props.handleEditorStateChange(data);
  };

  fileChangedHandler = event => {
    this.setState({
      selectedFile: event.target.files[0]
    });
    const fileType = event.target.files[0].type;
    let reader = new FileReader();
    reader.onloadend = () => {
      this.setState({
        imagePreviewUrl: reader.result
      } as CreateStoredataState, () => { this.handleValidation() });
    };
    reader.readAsDataURL(event.target.files[0]);
    const formData = new FormData();
    formData.append('file', event.target.files[0])
    // const formData = {
    //   file: form,
    //   fileType: fileType
    // }
    this.props.uploadFile(formData);
  }

  handleSubmit = (): void => {
    this.props.handleSubmit();
  }

  handleDetailsChange = (event: any, index: number, name: string) => {
    event.preventDefault();
    let details = Object.assign([], this.state.details);
    details[index][name] = event.target.value;
    this.setState({
      details: details
    }, () => { this.handleValidation() })
    this.props.handleMetadataChange(details);
  }

  handleValidation = () => {
    const { errors } = this.state;
    let isValid = true;
    if (this.state.imagePreviewUrl && this.state.imagePreviewUrl.length > 1) {
      errors.avatar = ''
    } else {
      errors.avatar = INVALID_IMAGE;
      isValid = false;
    }
    if (this.state.storeDescription && this.state.storeDescription.length > 1) {
      errors.storeDescription = ''
    } else {
      errors.storeDescription = INVALID_STORE_DESCRIPTION;
      isValid = false;
    }
    this.setState({
      errors: {
        ...errors,
        submitted: true,
        validate: isValid
      }
    })
    return isValid;
  }

  componentDidUpdate(prevProps) {
    console.log('this.props.upload : ',this.props.upload)
    if (this.props.upload !== prevProps.upload) {
        this.props.handleImageChange(this.props.upload.message.message);
    }
  }

  render() {

    const { page, errors, details, storeDescription, selectedFile, imagePreviewUrl } = this.state;
    const { categories, isUpLoading,

    } = this.props;

    return (
      <div>
        <Header />
        <div>
          <div className={styles.appSmartcontract}>
            <Container className={styles.appSmartcontainer}>
              <Breadcrumb>
                <Breadcrumb.Item href="/home">Home</Breadcrumb.Item>
                <Breadcrumb.Item active>Create a Package</Breadcrumb.Item>
              </Breadcrumb>
              <div className={styles.appCustomcontainer}>
                <div className={styles.appSmartcreate}>
                  <img src={homemain} className="img-fluid" />
                  <h3>Create a package  </h3>
                </div>
                <div className={styles.appProgressbar}>
                  <ul className={styles.progressBar}>
                    <li className={styles.progressActive}></li>
                    <li className={page === 1 ? styles.progressActive : ''}></li>
                  </ul>
                </div>
              </div>
            </Container>
          </div>
        </div>
        <div>
          {
            page === 0 &&
            <Step1
              errors={errors}
              categories={categories}
              isUpLoading={isUpLoading}
              storeDescription={storeDescription}
              handleEditorStateChange={this.handleEditorStateChange}
              selectedFile={selectedFile}
              imagePreviewUrl={imagePreviewUrl}
              fileChangedHandler={this.fileChangedHandler}
              details={details}
              onSubmit={this.nextPage}
              handleDetails={this.handleDetails}
            />
          }
          {
            page === 1 &&
            <Step2
              errors={errors}
              categories={categories}
              storeDescription={storeDescription}
              handleEditorStateChange={this.handleEditorStateChange}
              selectedFile={selectedFile}
              imagePreviewUrl={imagePreviewUrl}
              fileChangedHandler={this.fileChangedHandler}
              previousPage={this.previousPage}
              details={details}
              onSubmit={this.handleSubmit}
              handleDetailsChange={this.handleDetailsChange}
            />
          }
        </div>
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = (state: stateProps) => ({
  error: state.addStore.error,
  message: state.addStore.message,
  isAddStoreSuccess: state.addStore.isAddStoreSuccess,
  isLoading: state.addStore.isLoading,
  upload: state.uploadFile,
});

const mapDispatchToProps: PropsFromDispatch = {
  addStore: addStoreAction,
  onSubmit: addStoreAction,
  uploadFile: uploadFileAction,
  handleImageChange: selectedKey => change('CreatePackageForm', 'imageUrl', selectedKey),
  handleEditorStateChange: data => change('CreatePackageForm', 'description', data),
  handleMetadataChange: details => change('CreatePackageForm', 'details', details),
}

const formConnected = reduxForm({
  form: 'CreatePackageForm'
})(AddPackage);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(formConnected);
