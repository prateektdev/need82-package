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
import { filePath } from '../../../../constants/config';
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
        stores: this.props.message,
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

  goToPackages = () => {
    history.push("/packages", { showItems: true });
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
          <h3 className="float-left">Top selling packages</h3>
          <a className="float-right" onClick={this.goToPackages}>See all
       <img src={rightarrow} className="img-fluid" />
          </a>
        </div>
        <Carousel responsive={responsive} arrows={true}>
          {
            stores.map((store, index) => {
              return (<div className={styles.appItemfield} key={index}>
                {store.imageUrl && <img src={filePath + store.imageUrl} alt="img-package" className="img-fluid" />}
                <h4>{store.tourName}</h4>
                <div className={styles.appLabelfiedl}><span>Price:</span>{store.price}</div>
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