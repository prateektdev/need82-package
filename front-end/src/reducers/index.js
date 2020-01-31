import { combineReducers } from 'redux';
import { signIn } from './signIn.reducer';
import {
    signUp,
    confirmSignUp,
    resendConfirmSignUp
} from './signup.reducer';
import {
    forgotPassword,
    confirmForgotPassword
} from './forgotPassword.reducer';
import {
    fetchProfile,
    editProfile
} from './profile.reducer';
import {
    fetchStore,
    fetchAllStore,
    addStore,
    fetchCurrentStore,
    fetchUserStore
} from './store/store.reducer';
import { fetchStoreCategories } from './store/storeCategories.reducer';
import { uploadFile } from './fileUpload/uploadFile.reducer';
import { reducer as formReducer } from 'redux-form';
export default combineReducers({

    signIn,

    signUp,
    confirmSignUp,
    resendConfirmSignUp,

    forgotPassword,
    confirmForgotPassword,

    fetchProfile,
    editProfile,

    fetchStore,
    fetchAllStore,
    addStore,
    uploadFile,
    fetchCurrentStore,
    fetchStoreCategories,
    fetchUserStore,

    form: formReducer
});
