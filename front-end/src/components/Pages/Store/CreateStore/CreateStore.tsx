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
  fetchStoreCategories as fetchStoreCategoriesAction,

} from '../../../../actions/store.actions';
import {
  uploadFileInitiate as uploadFileInitiateAction,
  uploadFile as uploadFileAction,
  verifyFileUpload as verifyFileUploadAction,
  verifyFileUploadSuccess as verifyFileUploadSuccessAction,

} from '../../../../actions/fileUpload.actions';
import Step1 from './Step1';
import Step2 from './Step2';
import { connect } from 'react-redux';
import { change, reduxForm } from 'redux-form';
import { PropsFromDispatch, CreateStoredataState, stateProps } from './CreateStore.interface';
import { EditorState } from 'draft-js';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import StoreCreationModal from './component/StoreCreationModal';
import StoreCreatedModal from './component/StoreCreatedModal';
import { INVALID_IMAGE, INVALID_CATEGORY, INVALID_STORE_DESCRIPTION, NAVIGATION_TIMEOUT } from '../../../../constants/constants';



class CreateStore extends React.Component<any, CreateStoredataState> {

  constructor(props) {
    super(props);
    this.state = {
      page: 0,
      category: '',
      tags: [],
      rows: [{}],
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

  nextPage = () => {
    if (this.handleValidation()) {
      this.setState(
        {
          page: this.state.page + 1
        }
      );
    }
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
    this.props.handleImageChange(event.target.files[0]);
    const fileParts = event.target.files[0].name.split('.');
    const fileType = event.target.files[0].type;
    const filExtension = fileParts[1];
    let reader = new FileReader();
    reader.onloadend = () => {
      this.setState({
        imagePreviewUrl: reader.result
      } as CreateStoredataState, () => { this.handleValidation() });
    };
    reader.readAsDataURL(event.target.files[0]);
    const body = new Blob([event.target.files[0]], { type: fileType });
    const formData = {
      type: 'STORE_IMAGE',
      file: {
        extension: filExtension,
        type: fileType
      },
      fileData: body,
      fileType: fileType
    }
    this.props.uploadFileInitiate(formData);
    this.setState({ filetype: formData.file });
  }

  handleSubmit = (): void => {
    if (this.handleValidation()) {
      this.setState({ showMintOptions: true })
      this.props.handleSubmit();
    }
  }

  handleAddRow = () => {
    this.setState((prevState) => {
      const row = {};
      return { rows: [...prevState.rows, row] };
    });
  };

  handleRemoveRow = () => {
    this.setState((prevState) => {
      return { rows: prevState.rows.slice(1) };
    });
  };

  handleMetadataChange = (event: any, index: number, name: string) => {
    event.preventDefault();
    let { rows } = Object.assign({}, this.state);
    rows[index][name] = event.target.value;
    this.setState({
      rows: rows
    }, () => { this.handleValidation() })
    this.props.handleMetadataChange(rows);
  }

  handleCheckClick = (event: any): void => {
    if (!event.target.checked) {
      this.props.handleMintSize(1);
    }
    this.setState({ enableBatchMinting: !this.state.enableBatchMinting },
      () => { this.handleValidation() });
  }

  handleMintSize = (value) => {
    this.setState({ mintSize: value }, () => { this.handleValidation() })
    this.props.handleMintSize(value);
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

  componentDidMount() {
  }

  componentDidUpdate(prevProps) {
    if (this.props.messageInitiating !== prevProps.messageInitiating) {
      this.props.handleImageChange(this.props.messageInitiating.path);
    }
  }

  render() {

    const { page, errors, tags, category, rows, storeDescription, selectedFile,
      imagePreviewUrl, mintSize, enableBatchMinting, mintOptions, isUpLoaded, showMintOptions } = this.state;

    const { categories, isInitiating, isUpLoading, isVerifying,
      isFileUploadInitiateSuccess, isFileUploadSuccess, isFileUploadVerifiedSuccess,
      messageInitiating, messageUploading, messageVerifying,
      errorInitiating, errorUploading, errorVerifying,
      isLoading, isAddStoreSuccess } = this.props;

    return (
      <div>
        <Header />
        <div>
          <div className={styles.appSmartcontract}>
            <Container className={styles.appSmartcontainer}>
              <Breadcrumb>
                <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
                <Breadcrumb.Item active>Create a Store</Breadcrumb.Item>
              </Breadcrumb>
              <div className={styles.appCustomcontainer}>
                <div className={styles.appSmartcreate}>
                  <img src={homemain} className="img-fluid" />
                  <h3>Create a package  </h3>
                  <p>
                    To start selling your items, you need a store to put these items.
                    so create a store and add your items to list for sale
                 </p>
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
              isInitiating={isInitiating}
              isUpLoading={isUpLoading}
              isVerifying={isVerifying}
              isFileUploadInitiateSuccess={isFileUploadInitiateSuccess}
              isFileUploadSuccess={isFileUploadSuccess}
              isFileUploadVerifiedSuccess={isFileUploadVerifiedSuccess}
              messageInitiating={messageInitiating}
              messageUploading={messageUploading}
              messageVerifying={messageVerifying}
              errorInitiating={errorInitiating}
              errorUploading={errorUploading}
              errorVerifying={errorVerifying}
              category={category}
              tags={tags}
              storeDescription={storeDescription}
              handleEditorStateChange={this.handleEditorStateChange}
              selectedFile={selectedFile}
              imagePreviewUrl={imagePreviewUrl}
              fileChangedHandler={this.fileChangedHandler}
              rows={rows}
              handleAddRow={this.handleAddRow}
              handleRemoveRow={this.handleRemoveRow}
              handleMetadataChange={this.handleMetadataChange}
              mintSize={mintSize}
              mintOptions={mintOptions}
              enableBatchMinting={enableBatchMinting}
              handleCheckClick={this.handleCheckClick}
              handleMintSize={this.handleMintSize}
              onSubmit={this.nextPage}
            />
          }
          {
            page === 1 &&
            <Step2
              errors={errors}
              categories={categories}
              category={category}
              tags={tags}
              storeDescription={storeDescription}
              handleEditorStateChange={this.handleEditorStateChange}
              selectedFile={selectedFile}
              imagePreviewUrl={imagePreviewUrl}
              fileChangedHandler={this.fileChangedHandler}
              previousPage={this.previousPage}
              rows={rows}
              handleAddRow={this.handleAddRow}
              handleRemoveRow={this.handleRemoveRow}
              handleMetadataChange={this.handleMetadataChange}
              mintSize={mintSize}
              mintOptions={mintOptions}
              enableBatchMinting={enableBatchMinting}
              handleMintSize={this.handleMintSize}
              onSubmit={this.handleSubmit}
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
  categories: state.fetchStoreCategories.message,
  isLoading: state.addStore.isLoading,
  isInitiating: state.uploadFileInitiate.isInitiating,
  isUpLoading: state.uploadFileInitiate.isUpLoading,
  isVerifying: state.uploadFileInitiate.isVerifying,
  isFileUploadInitiateSuccess: state.uploadFileInitiate.isFileUploadInitiateSuccess,
  isFileUploadSuccess: state.uploadFileInitiate.isFileUploadSuccess,
  isFileUploadVerifiedSuccess: state.uploadFileInitiate.isFileUploadVerifiedSuccess,
  errorInitiating: state.uploadFileInitiate.errorInitiating,
  errorUploading: state.uploadFileInitiate.errorUploading,
  errorVerifying: state.uploadFileInitiate.errorVerifying,
  messageInitiating: state.uploadFileInitiate.messageInitiating,
  messageUploading: state.uploadFileInitiate.messageUploading,
  messageVerifying: state.uploadFileInitiate.messageVerifying
});

const mapDispatchToProps: PropsFromDispatch = {
  addStore: addStoreAction,
  onSubmit: addStoreAction,
  uploadFileInitiate: uploadFileInitiateAction,
  uploadFile: uploadFileAction,
  verifyFileUpload: verifyFileUploadAction,
  verifyFileUploadSuccess: verifyFileUploadSuccessAction,
  handleImageChange: selectedKey => change('CreateStoreForm', 'image_url', selectedKey),
  handleEditorStateChange: data => change('CreateStoreForm', 'description', data)
}

const formConnected = reduxForm({
  form: 'CreateStoreForm'
})(CreateStore);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(formConnected);
