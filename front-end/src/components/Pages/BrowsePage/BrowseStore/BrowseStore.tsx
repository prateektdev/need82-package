import React from 'react';
import styles from "./BrowseStore.module.css";
import { Button } from 'react-bootstrap';
import Collapsible from 'react-collapsible';
import Categoryfilter from "../Categoryfilter/Categoryfilter";
import Buyanitem from '../Buyanitem/Buyanitem';
import InfiniteScroll from "react-infinite-scroll-component";
import BrowseItemComponent from '../BrowseItemComponent';
import BrowseStoreComponent from '../BrowseStoreComponent';
import { history } from '../../../../utils/history';

class BrowseStore extends React.Component<any, any> {

  constructor(props: any) {
    super(props);
    this.state = {
      showModal: false
    };
  }

  showBuyanitem = () => {
    this.setState({ showModal: true });
  }

  handleCloseBuyanitem = () => {
    this.setState({ showModal: false });
  }

  goToItemDetails = (category: string, item_id: string) => {
    history.replace(`/browse/category/${category}/item/${item_id}`, { item_id: item_id });
  }

  goToStoreDetails = (category: string, store_id: string) => {
    history.replace(`/browse/category/${category}/store/${store_id}`);
  }

  handleViewItems = (event) => {
    event.preventDefault();
    this.props.viewItems();
  };

  handleViewStores = (event) => {
    event.preventDefault();
    this.props.viewStores();
  };

  render() {
    const { items, stores, pagination, fetchMoreData, showItems, handleCategoryChange,
      selectedCategory, categories } = this.props;
    return (
      <div className={styles.appBrowsstore}>
        <div className='img-thumbnail'>
          {!showItems ? (<span>Browse {stores && stores.length} Stores</span>) :
            (<span>Browse {items && items.length} Items
          </span>)}
          {!showItems ?
            (<Button variant='primary' onClick={(event) => this.handleViewItems(event)}
              className={styles.appViewstore}>View Items
          </Button>) :
            (<Button variant='primary' onClick={(event) => this.handleViewStores(event)}
              className={styles.appViewstore}>View Stores
            </Button>)}
          <div className={styles.appCollapsefield}>
            <Collapsible trigger="Filters" className={styles.appmobmenu}>
              <Categoryfilter categories={categories} handleCategoryChange={handleCategoryChange}
                selectedCategory={selectedCategory} />
            </Collapsible>
          </div>

          {showItems ?
            <div>
              <InfiniteScroll
                dataLength={items && items.length}
                next={fetchMoreData}
                hasMore={!(pagination && pagination.last)}
                loader={<h4></h4>}
              >
                <div className={styles.appViewprofile}>
                  {
                    items && items.map((item, index) => {
                      return (
                        <BrowseItemComponent key={index} item={item}
                          goToItemDetails={this.goToItemDetails}
                          showBuyanitem={this.showBuyanitem}
                          handleCloseBuyanitem={this.handleCloseBuyanitem}
                        />);
                    })
                  }
                </div>
              </InfiniteScroll> </div> :
            <div>
              <InfiniteScroll
                dataLength={stores && stores.length}
                next={fetchMoreData}
                hasMore={!(pagination && pagination.last)}
                loader={<h4></h4>}
              >
                <div className={styles.appViewprofile}>
                  {
                    stores && stores.map((store, index) => {
                      return (
                        <BrowseStoreComponent key={index} store={store}
                          goToStoreDetails={this.goToStoreDetails}
                          showBuyanitem={this.showBuyanitem}
                          handleCloseBuyanitem={this.handleCloseBuyanitem}
                        />);
                    })
                  }
                </div>
              </InfiniteScroll></div>
          }
          <Buyanitem showModal={this.state.showModal} handleCloseBuyanitem={this.handleCloseBuyanitem} />
        </div>
      </div >
    );
  }
}


export default BrowseStore;