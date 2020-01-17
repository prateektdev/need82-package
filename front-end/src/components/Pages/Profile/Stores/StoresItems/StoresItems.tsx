import React, { Fragment } from "react";
import { Container, Media, Row, Col } from "react-bootstrap";
import { connect } from 'react-redux';
import storeImg from "../../../../../assets/images/storeImg.png";
import badges from "../../../../../assets/images/badges.svg";
import styles from "../Stores.module.css";
import Loader from "../../../../Layout/Loader";
import { StoresItemsState, stateProps, PropsFromDispatch } from './StoreItems.interface';
import {
  fetchStoreData as fetchStoreDataAction
}
  from '../../../../../actions/store.actions';
import ItemStoresEmptyView from '../EmptyViewItem';
import InfiniteScroll from "react-infinite-scroll-component";
import { history } from "../../../../../utils/history";

class StoresItems extends React.Component<any, StoresItemsState> {
  constructor(props) {
    super(props);
    this.state = {
      store: [],
      pagination: {},
      size: 3,
      lastKey: ''
    };
  }

  componentDidUpdate(prevProps) {
    if (this.props.message !== prevProps.message) {
      this.setState({
        store: [...this.state.store, ...this.props.message.content],
        pagination: this.props.message.metadata
      });
    }
  }

  fetchStoreData() {
    const formData = {
      store_id: this.props.match.params.store_id,
      size: this.state.size,
      lastKey: this.state.lastKey
    };
    this.props.fetchStoreData(formData);
  }

  fetchMoreStoreData = () => {
    this.setState({
      lastKey: this.state.pagination.nextKey
    },
      () => {
        this.fetchStoreData();
      });
  };

  componentDidMount() {
    
    console.log(this.props);
    this.fetchStoreData();
  }

  goToItemDetails = (category: string, item_id: string) => {
    history.replace(`/browse/category/${category}/item/${item_id}`, { item_id: item_id });
  }

  render() {
    const { store, pagination } = this.state;
    return (
      <div>

        <Container>
          {/* {this.props.isLoading && <Loader />} */}
          {store && store.length ? <Fragment>

            <div className={styles.storeListViewHighlight}>
              <Media className={styles.appMediafigure}>
                <img
                  className="mr-3"
                  src={store && store[0].store && store[0].store.cover_image}
                  alt="Generic placeholder"
                />
                <Media.Body className={styles.appMediabody}>
                  <h5>{store && store[0].store.title} <span className={styles.appTotalitem}>({store && store[0].store.item_count} Items)</span></h5>

                  <p dangerouslySetInnerHTML={{
                    __html: store && store[0].description
                  }}>
                  </p>
                  <h6>({store && store[0].store.items_sold} Items sold)</h6>
                </Media.Body>
              </Media>
            </div>
            <div className={styles.appViewprofile}>
              <InfiniteScroll
                dataLength={store.length}
                next={this.fetchMoreStoreData}
                hasMore={!pagination.last}
                loader={<h4>Loading...</h4>}
              >
                {
                  store.map((storeItem, index) => {
                    return (<Media key={index} className={styles.appMediasection} onClick={() => this.goToItemDetails(storeItem.category,storeItem.id)}>
                      <img
                        className="mr-3"
                        src={storeItem.preview_images && storeItem.preview_images[0]}
                        alt="Generic placeholder"
                      />
                      <Media.Body className={styles.appProfilemedia}>
                        <h5>{storeItem.title}</h5>
                        <p>{storeItem.sub_title}</p>
                        <Row>
                          <Col sm={7}>
                            <div className={styles.appOwnerfield}>
                              <span>Owner:</span> {storeItem.bought_by}
                            </div>
                            <div className={styles.appBadgesfield}>
                              <img
                                className=""
                                src={badges}
                              />
                              <p>{storeItem.seller_type} seller</p>
                            </div>
                            <div className={styles.appStorefield}>
                              <span>Store:</span> {storeItem.store && storeItem.store.title}
                              <b>({storeItem.store && storeItem.store.item_count}        Items)</b>
                            </div>
                          </Col>
                          <Col sm={5} className={styles.appItemdescription}>
                            <span>Item Description</span>
                            <p dangerouslySetInnerHTML={{
                              __html: storeItem.description
                            }}>
                            </p>
                          </Col>
                        </Row>
                      </Media.Body>
                    </Media>);
                  })
                }
              </InfiniteScroll>
            </div></Fragment> : <ItemStoresEmptyView />}
        </Container>

      </div>
    );
  }
}

const mapStateToProps = (state: stateProps) => ({
  error: state.fetchStore.error,
  message: state.fetchStore.message,
  isFetchStoreSuccess: state.fetchStore.isFetchStoreSuccess,
  isLoading: state.fetchStore.isLoading
});

const mapDispatchToProps: PropsFromDispatch = {
  fetchStoreData: fetchStoreDataAction,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(StoresItems); 
