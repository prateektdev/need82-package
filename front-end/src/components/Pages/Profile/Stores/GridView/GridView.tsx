import React from "react";
import { Col, Row, FormControl, FormGroup, Form, Container } from "react-bootstrap";
import styles from "../Stores.module.css";
import StoresEmptyView from '../EmptyView';
import StoreImg from '../../../../../assets/images/storeImg.png'
import InfiniteScroll from "react-infinite-scroll-component";
import DataLoader from "../../../../Layout/DataLoader";

interface StoresGridViewState {
  store_id: string,
  title: string
}


class StoresGridView extends React.Component<any, StoresGridViewState> {

  constructor(props: any) {
    super(props);
    this.state = {
      store_id: '',
      title: ''
    };
  }

  selectStore = (id) => {
    this.setState({ store_id: id }, () => {
      this.props.handleClick(id);
    });
  }

  render() {
    const { stores, onKeyUp, title, fetchMoreStoreData, pagination, isLoading } = this.props;
    return (
      <div>
        {!title.length && isLoading && <div className={styles.demo}></div>}
        {stores && stores.length > 0 || title.length != 0 ?
          (<div>
            <div className={styles.appSearchblock}>
              <Form>
                <FormGroup className={styles.appSearchinput}>
                  <FormControl type="text" name="title" placeholder="Search for a store"
                    className={styles.appSearchinputfield} value={title}
                    autoComplete="off"
                    onChange={onKeyUp}
                  >
                  </FormControl>
                </FormGroup>
              </Form>
            </div>
            <div className={styles.appStoressearch}>
              <Container className={styles.appStorescontainer}>

                <InfiniteScroll
                  dataLength={stores.length}
                  next={fetchMoreStoreData}
                  hasMore={!pagination.last}
                  loader={<h4>Loading...</h4>}
                >
                  <div className="d-flex flex-wrap">
                    {stores.map((store, index) => {
                      return (<Col key={index} sm={4} className={styles.appDataItem} onClick={() => this.selectStore(store.id)}>
                        <div className={styles.appItemfield}>
                          <img src={store.cover_image} className="img-fluid" />
                          <div className={styles.appLabelfiedl}><span>{store.item_count}
                            Items</span>{store.title}</div>
                        </div>
                      </Col>);
                    })}
                  </div>
                </InfiniteScroll>
              </Container>
            </div>
          </div>) :
          <StoresEmptyView />
        }
      </div>
    );
  }
}

export default StoresGridView;