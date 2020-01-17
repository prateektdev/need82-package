import React from "react";
import { Row } from "react-bootstrap";
import { connect } from 'react-redux';
import home from "../../../../assets/images/home.svg";
import styles from "./Stores.module.css";
import GridView from "./GridView";
import StoresItems from "./StoresItems";
import {

  fetchUserStoreData as fetchUserStoreDataAction,
  fetchUserStoreDataSuccess as fetchUserStoreDataSuccessAction,
}
  from '../../../../actions/store.actions';
import { StoreState, stateProps, PropsFromDispatch } from './Stores.interface';
import DataLoader from "../../../Layout/DataLoader";
import { history } from "../../../../utils/history";

class Stores extends React.Component<any, StoreState> {
  constructor(props) {
    super(props);
    this.state = {
      stores: [],
      pagination: {},
      size: 50,
      lastKey: '',
      showAll: true,
      showSingle: false,
      selectedStore: '',
      title: ''
    };
  }

  handleClick = (store_id) => {
    history.push(`stores/${store_id}`)
    // this.setState({
    //   showSingle: true,
    //   showAll: false,
    //   selectedStore: store_id
    // });
  }

  componentDidUpdate(prevProps) {
    if (this.props.message !== prevProps.message) {
      this.setState({
        stores: [...this.props.message.content],
        pagination: this.props.message.metadata
      });
    }
  };

  fetchStoreData() {
    const formData = {
      size: this.state.size,
      lastKey: this.state.lastKey
    };
    if (this.state.title.length >= 3) {
      formData['title'] = this.state.title
    }
    this.props.fetchUserStoreData(formData);
  };

  fetchMoreStoreData = () => {
    this.setState({
      lastKey: this.state.pagination.nextKey
    },
      () => {
        this.fetchStoreData();
      });
  };

  componentDidMount() {
    this.fetchStoreData();
  };

  onKeyUp = (event: any) => {
    this.setState({ title: event.target.value }, () => {
      this.fetchStoreData()
    });
  };

  render() {
    return (
      <div>

        <Row className={styles.myProfileRow}>
          <div className={styles.appThumbnail}>
            <div className={styles.appStoreheading}>
              <img src={home} className="img-fluid" />
              <span>Stores</span>
            </div>
            {
              this.state.showAll &&
              <GridView stores={this.state.stores}
                fetchMoreStoreData={this.fetchMoreStoreData}
                pagination={this.state.pagination}
                handleClick={this.handleClick}
                onKeyUp={this.onKeyUp}
                isLoading={this.props.isLoading}
                title={this.state.title}
              />

            }
            {/* {this.state.showSingle && <EmptyView />} */}
            {this.state.showSingle && <StoresItems store_id={this.state.selectedStore} />}
          </div>
        </Row>
      </div>
    );
  }
}

const mapStateToProps = (state: stateProps) => ({
  error: state.fetchUserStore.error,
  message: state.fetchUserStore.message,
  isLoading: state.fetchUserStore.isLoading,
});

const mapDispatchToProps: PropsFromDispatch = {
  fetchUserStoreData: fetchUserStoreDataAction,
  fetchUserStoreDataSuccess: fetchUserStoreDataSuccessAction,
};
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Stores); 