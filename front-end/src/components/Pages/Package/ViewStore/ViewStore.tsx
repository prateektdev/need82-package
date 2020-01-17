import React from 'react';
import Header from '../../../Layout/Header';
import Footer from '../../../Layout/Footer';
import { connect } from 'react-redux';
import styles from './ViewStore.module.css';
import { Container, Row, Breadcrumb, Col, Media, Button } from 'react-bootstrap';
import dummy from "../../../../assets/images/dummy.svg";
import badges from "../../../../assets/images/badges.svg";
import startrating from "../../../../assets/images/startrating.svg";
import Downarrow from "../../../../assets/images/Downarrow.svg";
import BrowseStore from "../../BrowsePage/BrowseStore/BrowseStore";
import {
  fetchAllItemData as fetchAllItemDataAction,
  fetchAllItemDataSuccess as fetchAllItemDataSuccessAction
}
  from '../../../../actions/item.actions';
import {

  fetchStoreData as fetchStoreDataAction,
  fetchStoreDataSuccess as fetchStoreDataSuccessAction,
  fetchStoreDetails as fetchStoreDetailsAction,
  fetchStoreDetailsSuccess as fetchStoreDetailsSuccessAction
}
  from '../../../../actions/store.actions';
import { ViewStoreState, stateProps, PropsFromDispatch } from './ViewStore.interface';
import InfiniteScroll from 'react-infinite-scroll-component';
import BrowseItemComponent from '../../BrowsePage/BrowseItemComponent';
import { history } from '../../../../utils/history';

class ViewStore extends React.Component<any, ViewStoreState> {

  constructor(props) {
    super(props);
    this.state = {
      store: {},
      items: [],
      pagination: {},
      size: 3,
      lastKey: '',
      selectedCategory: 'Collectibles'
    }
  }
  componentDidUpdate(prevProps) {
    console.log('this.props : ', this.props)
    if (this.props.fetchStore != prevProps.fetchStore) {
      this.setState({
        items: this.props.fetchStore.message.content,
        pagination: this.props.fetchStore.message.metadata
      });
    }
    if (this.props.fetchStoreDetail != prevProps.fetchStoreDetail) {
      console.log('here : ', this.props.fetchStoreDetail);
      this.setState({
        store: this.props.fetchStoreDetail.message
      });
    }
  }

  fetchStoreDetail() {
    const formData = {
      store_id: this.props.store_id,
      size: this.state.size,
      lastKey: this.state.lastKey
    };
    this.props.fetchStoreDetails(formData);
  }

  fetchMoreStoreData = () => {
    this.setState({
      lastKey: this.state.pagination.nextKey
    },
      () => {
        this.fetchStoreDetail();
      });
  };

  componentDidMount() {
    if (this.props.match && this.props.match.params && this.props.match.params.store_id) {
      let formData = {
        size: this.state.size,
        store_id: this.props.match.params.store_id
      };
      this.props.fetchStoreDetails(formData);
      this.fetchAllItemData();
    }
  }


  fetchAllItemData() {
    const formData = {
      size: this.state.size,
      lastKey: this.state.lastKey,
      store_id: this.props.match.params.store_id
    };
    this.props.fetchStoreData(formData);
  }

  fetchMoreItemData = () => {
    this.setState({
      lastKey: this.state.pagination.nextKey
    },
      () => {
        this.fetchAllItemData();
      });
  };

  goToItemDetails = (category: string, item_id: string) => {
    history.replace(`/browse/category/${category}/item/${item_id}`, { item_id: item_id });
  }


  handleStoreCategory = (category: string) => {
    history.push('/');
    history.push(`browse/category/${category}`);
  }

  handleHome = () => {
    history.push('/');
    history.push('home');
  }

  render() {
    const { items, pagination, store } = this.state;
    return (
      <div>
        <Header />
        <Container className={styles.appViewstorecontainer}>
          <Row>
            <Col sm={3} />
            <Col sm={9}>
              <div className={styles.appBreadcrum}>
                <Breadcrumb>
                  <Breadcrumb.Item onClick={this.handleHome}>Home</Breadcrumb.Item>
                  <Breadcrumb.Item onClick={() => this.handleStoreCategory(store.category)}>{store.category}</Breadcrumb.Item>
                  <Breadcrumb.Item active>{store.title}</Breadcrumb.Item>
                </Breadcrumb>
              </div>
            </Col>
          </Row>
          <Row>
            <Col sm={3} className={styles.appLeftimgfield}>
              <img src={store.cover_image} />
            </Col>
            <Col sm={9} className={styles.appRightfield}>
              <div className='img-thumbnail d-flex'>
                <div className={styles.appdescStoreblock}>
                  <div className={styles.appStoredetails}>
                    <h2>{store.title} <span>({store.item_count} Items)</span></h2>
                    <p>{store.sub_title}</p>
                    <label>({store.items_sold} Items sold)</label>
                  </div>
                  <div className={styles.appbadgefield}>
                    <img src={badges} />
                    <span>Top Seller</span>
                  </div>
                </div>
                <div className={styles.appReputatingrating}>
                  <div className={styles.appTokenlabel}><p>Owner:</p> {store.owner_username}</div>
                  <div className={styles.appStarrating}><div><p>Seller reputation rating</p><img src={startrating} /></div><div className={styles.appSeereview}><b>(See 5000 Reviews)</b></div></div>
                </div>
                <div className={styles.appItemdescription}>
                  <h3>Store Description</h3>
                  <p dangerouslySetInnerHTML={{
                    __html: store.description
                  }}>
                  </p>
                  <a href='#'>More <img src={Downarrow} /></a>
                </div>
              </div>
            </Col>
            <div className={styles.appItemmore}>
              <h3>All reviews</h3>
            </div>
            <div className={styles.appReviewwrapper}>
              <ul className="list-unstyled">
                <Media as="li">
                  <Media.Body>
                    <h5>Fantastic seller with some good stuffs</h5>
                    <small>
                      by <b>Jonathan Lolvik</b>
                    </small>
                    <img src={startrating} className="img-fluid" />
                    <span>June 28, 2019</span>
                    <p>
                      For the lovers of game of thrones, this items holds a zip
                      file containing 20 of the most popular soundtrack from the
                      series king. enjoy constant playtime and never miss out on
                      hat interesting iron throne tune
                    </p>
                  </Media.Body>
                </Media>
              </ul>
              <div className={styles.appSeereviewfield}>
                <a href='#' className={styles.appViewmore}>View More <img src={Downarrow} /></a>
                <Button>
                  See all reviews
                  </Button>
              </div>
            </div>
            <div className={styles.appItemstore}>
              <div className={styles.appItemmore}>
                <h3>Items in this store</h3>
              </div>
              <InfiniteScroll
                dataLength={items && items.length}
                next={this.fetchMoreItemData}
                hasMore={!(pagination && pagination.last)}
                loader={<h4></h4>}
              >
                <div className={styles.appViewprofile}>
                  {
                    items && items.map((item, index) => {
                      return (
                        <BrowseItemComponent key={index} item={item}
                          goToItemDetails={this.goToItemDetails}
                        />);
                    })
                  }
                </div>
              </InfiniteScroll>
            </div>

          </Row>
        </Container>

        <Footer />
      </div>
    );
  }
}

const mapStateToProps = (state: stateProps) => ({
  fetchStoreDetail: state.fetchStoreDetails,
  fetchStore: state.fetchStore
});

const mapDispatchToProps: PropsFromDispatch = {
  fetchAllItemData: fetchAllItemDataAction,
  fetchStoreData: fetchStoreDataAction,
  fetchStoreDataSuccess: fetchStoreDataSuccessAction,
  fetchStoreDetails: fetchStoreDetailsAction,
  fetchStoreDetailsSuccess: fetchStoreDetailsSuccessAction,
  fetchAllItemDataSuccess: fetchAllItemDataSuccessAction,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ViewStore);


