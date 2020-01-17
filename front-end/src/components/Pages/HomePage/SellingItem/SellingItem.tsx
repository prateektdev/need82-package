import React from 'react';
import { connect } from 'react-redux';
import Carousel from 'react-multi-carousel';
import styles from "./SellingItem.module.css";
import rightarrow from '../../../../assets/images/right_arrow.png';
import 'react-multi-carousel/lib/styles.css';
import { StoreState, stateProps, PropsFromDispatch } from './SellingItem.interface';
import {
  fetchAllStoreData as fetchAllStoreDataAction,
}
  from '../../../../actions/store.actions';
import { history } from '../../../../utils/history';

class SellingItem extends React.Component<any, StoreState>  {
  constructor(props) {
    super(props);
    this.state = {
      stores: [],
      pagination: {},
      size: 10,
      lastKey: '',
      showAll: true,
      showSingle: false,
      selectedStore: '',
      title: ''
    };
  }

  componentDidUpdate(prevProps) {
    if (this.props.message !== prevProps.message) {
      this.setState({
        stores: this.props.message.content,
        pagination: this.props.message.metadata
      });
    }
  }

  fetchStoreData() {
    const formData = {
      store_id: this.props.store_id,
      size: this.state.size,
      lastKey: this.state.lastKey
    };
    this.props.fetchAllStoreData(formData);
  }

  fetchMoreStoreData = () => {
    this.setState({
      lastKey: this.state.pagination.nextKey
    },
      () => {
        this.fetchStoreData();
      });
  };

  goToStores = () => {
    history.push("/browse/category/Collectibles", { showItems: true });
  }

  componentDidMount() {
    this.fetchStoreData();
  }

  render() {
    const { stores } = this.state;
    const responsive = {
      superLargeDesktop: {
        breakpoint: { max: 4000, min: 3000 },
        items: 5,
      },
      desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 5,
      },
      tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 3,
      },
      mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
      },
    };
    return (
      <div className={styles.appViewsection}>
        <div className={styles.appMainheadingfield}>
          <h3 className="float-left">Top selling Stores</h3>
          <a className="float-right" onClick={this.goToStores}>See all
       <img src={rightarrow} className="img-fluid" />
          </a>
        </div>
        <Carousel responsive={responsive} arrows={true}>
          {
            stores.map((store, index) => {
              return (<div className={styles.appItemfield} key={index}>
                <img src={store.cover_image} className="img-fluid" />
                <h4>{store.title}</h4>
                <div className={styles.appLabelfiedl}><span>Owner:</span>{store.owner_username}</div>
              </div>);
            })
          }
        </Carousel>
      </div>
    );
  }
}

const mapStateToProps = (state: stateProps) => ({
  error: state.fetchAllStore.error,
  message: state.fetchAllStore.message,
  isFetchAllStoreSuccess: state.fetchAllStore.isFetchAllStoreSuccess,
  isLoading: state.fetchAllStore.isLoading
});

const mapDispatchToProps: PropsFromDispatch = {
  fetchAllStoreData: fetchAllStoreDataAction,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SellingItem); 