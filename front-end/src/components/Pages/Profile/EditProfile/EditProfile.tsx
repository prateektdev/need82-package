import React from "react";
import { connect } from 'react-redux';
import { Container, Image, Button, Form } from "react-bootstrap";
import home from "../../../../assets/images/home.svg";
import dummy from "../../../../assets/images/dummy.svg";
import styles from "../Profile.module.css";

import {
  fetchUserProfile as fetchUserProfileAction,
  editUserProfile as editUserProfileAction
}
  from '../../../../actions/profile.actions';
import {
  uploadFileInitiate as uploadFileInitiateAction,
  uploadFile as uploadFileAction,
  verifyFileUpload as verifyFileUploadAction,
  verifyFileUploadSuccess as verifyFileUploadSuccessAction,
} from '../../../../actions/fileUpload.actions';
import Loader from "../../../Layout/Loader";
import { reduxForm, change } from 'redux-form';
import TextField from '../../../Forms/TextField';
import { validate } from './EditProfileValidation';
import { PropsFromDispatch, EditProfileState, stateProps } from './EditProfile.interface';
import FileUploaderLoader from "../../../Layout/FileUploaderLoader";

class EditProfile extends React.Component<any, EditProfileState> {

  constructor(props) {
    super(props);
    this.state = {
      email: '',
      id: '',
      username: '',
      display_name: '',
      about: '',
      wallet_token: [],
      profile_url: '',
      selectedFile: null,
      imagePreviewUrl: null,
      address: '',
      social_media: {
        twitter: '',
        reddit: '',
        other: '',
      },
    }
  }

  handleChange = (event: any, name: string) => {
    this.setState({
      [name]: event.target.value
    } as EditProfileState)
  }

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
      } as EditProfileState);
    };
    reader.readAsDataURL(event.target.files[0]);
    const body = new Blob([event.target.files[0]], { type: fileType });
    const formData = {
      type: 'PROFILE',
      file: {
        extension: filExtension,
        type: fileType
      },
      fileData: body,
      fileType: fileType
    }
    this.props.uploadFileInitiate(formData);
  }

  handleSocialMediaLinkChange = (event: any, name: string) => {
    const social_media = this.state.social_media
    const updateSocialMedia = social_media;
    updateSocialMedia[name] = event.target.value;
    this.setState({
      social_media: updateSocialMedia
    } as EditProfileState)
  }

  handleSubmit = (event: any): void => {
    event.preventDefault();
    this.props.handleSubmit(event);
  }

  componentDidUpdate(prevProps) {
    if (this.props.messageInitiating !== prevProps.messageInitiating) {
      this.props.handleImageChange(this.props.messageInitiating.path);
    }
  }
  componentDidMount = async () => {
  }

  render() {
    const { imagePreviewUrl, address } = this.state;
    const { isInitiating, isUpLoading, isVerifying } = this.props;
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
      <div className={styles.Editprofilewrapper}>
        <Container className={styles.appeditprofilecontainer}>
          <div className={styles.appThumbnail}>
            <div className={styles.appStoreheading}>
              <img src={home} className="img-fluid" />
              <span>Edit Profile</span>
            </div>
          </div>
          {/* {this.props.isLoading && <Loader />} */}
          <div className={styles.editProfileChangeImageDiv}>
            <Container className={styles.appProfilechangecontainer}>
              <div className={styles.editProfileChangeImage}>
                <div className={styles.appImagepreview}>
                  <div>
                    {imagePreview}
                    {/* <img src={dummy} />
                    <FileUploaderLoader />*/}

                    {(isInitiating || isUpLoading || isVerifying) && <FileUploaderLoader />}

                  </div>
                </div>
              </div>
              <Button variant="link" className={styles.editProfileChangeButton}>
                CHANGE IMAGE
                <input type="file" accept="image/*" name="avatar" onChange={this.fileChangedHandler} />
              </Button>
            </Container>
          </div>
          <Container className={styles.appProfilechangecontainer}>
            <Form onSubmit={(event) => this.handleSubmit(event)} className="col-sm-12">
              <TextField type="text" label="Full Name" name="display_name"
                value={this.props.display_name}
              />
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Wallet Address</Form.Label>
                <Form.Control type="text" value={address} disabled />
              </Form.Group>
              <TextField type="text" label="About" name="about" value={this.props.about} />
              <Form.Label className="text-muted">Social Media</Form.Label>
              <hr />
              <TextField type="text" label="Twitter" name="social_media.twitter"
                placeholder={'twitter'} value={this.props.initialValues.social_media.twitter}
              />
              <TextField type="text" label="Reddit" name="social_media.reddit"
                placeholder={'reddit'} value={this.props.initialValues.social_media.reddit}
              />
              <TextField type="text" label="Other" name="social_media.other"
                placeholder={'other'} value={this.props.initialValues.social_media.other}
              />
              <div className={styles.appSavebtn}>
                <Button variant="primary" type="submit">
                  SAVE CHANGES
                </Button>
              </div>
            </Form>
          </Container>
        </Container>
      </div>
    );
  }
}


const mapStateToProps = (state: stateProps) => {
  return {
    error: state.fetchProfile.error,
    message: state.fetchProfile.message,
    isFetchProfileSuccess: state.fetchProfile.isFetchProfileSuccess,
    isLoading: state.editProfile.isLoading,
    isEditProfileSuccess: state.editProfile.isEditProfileSuccess,
    initialValues: {
      display_name: state.fetchProfile.message.display_name,
      address: 'xfvsd864sd78sd89',
      about: state.fetchProfile.message.about,
      social_media: {
        twitter: (state.fetchProfile.message.social_media &&
          state.fetchProfile.message.social_media.twitter),
        reddit: (state.fetchProfile.message.social_media &&
          state.fetchProfile.message.social_media.reddit),
        other: (state.fetchProfile.message.social_media &&
          state.fetchProfile.message.social_media.other),
      },
    },
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
  }
};

const mapDispatchToProps: PropsFromDispatch = {
  fetchUserProfile: fetchUserProfileAction,
  editUserProfile: editUserProfileAction,
  onSubmit: editUserProfileAction,
  uploadFileInitiate: uploadFileInitiateAction,
  uploadFile: uploadFileAction,
  verifyFileUpload: verifyFileUploadAction,
  verifyFileUploadSuccess: verifyFileUploadSuccessAction,
  handleImageChange: selectedKey => change('EditProfileForm', 'image_key', selectedKey),
}


const formConnected = reduxForm({
  form: 'EditProfileForm',
  validate,
  enableReinitialize: true
})(EditProfile);


export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(formConnected);