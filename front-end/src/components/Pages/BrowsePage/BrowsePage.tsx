import React from 'react';
import Header from '../../Layout/Header';
import Footer from '../../Layout/Footer';
import { connect } from 'react-redux';
import { Container, Row, Col, Breadcrumb } from 'react-bootstrap';
import Categoryfilter from "./Categoryfilter/Categoryfilter";
import BrowseStore from "./BrowseStore/BrowseStore";
import styles from "./BrowsePage.module.css";
import {
  fetchAllItemData as fetchAllItemDataAction,
  fetchItemCategories as fetchItemCategoriesAction,
  fetchItemCategoriesSuccess as fetchItemCategoriesSuccessAction,
  fetchAllItemDataSuccess as fetchAllItemDataSuccessAction
}
  from '../../../actions/item.actions';
import {
  fetchStoreCategories as fetchStoreCategoriesAction,
  fetchAllStoreData as fetchAllStoreDataAction,
  fetchAllStoreDataSuccess as fetchAllStoreDataSuccessAction
} from '../../../actions/store.actions';
import { BrowsePageState, PropsFromDispatch, stateProps } from './BrowsePage.interface';
import Loader from '../../Layout/Loader';
import { history } from '../../../utils/history';


class BrowsePage extends React.Component<any, BrowsePageState> {

  constructor(props) {
    super(props);
    this.state = {
      items: [],
      stores: [],
      pagination: {},
      size: 3,
      lastKey: '',
      selectedCategory: 'Collectibles',
      showItems: true
    };
  }

  componentDidUpdate(prevProps) {
    if (this.props.items !== prevProps.items) {
      this.setState({
        items: this.props.items.content,
        pagination: this.props.items.metadata
      });
    }
    if (this.props.stores !== prevProps.stores) {
      this.setState({
        stores: this.props.stores.message.content,
        pagination: this.props.stores.message.metadata
      });
    }
    if (this.props.match && this.props.match.params && this.props.match.params.category) {
      if (prevProps.match.params && prevProps.match.params.category) {
        if (prevProps.match.params.category !== this.props.match.params.category) {
          this.setState({ selectedCategory: this.props.match.params.category }, () => {
            if (this.state.showItems) {
              this.fetchAllItemData();
            } else {
              this.fetchAllStoreData();
            }
          });
        }
      } else {
        if (this.state.showItems) {
          this.fetchAllItemData();
        } else {
          this.fetchAllStoreData();
        }
      }
    }
  }

  componentDidMount() {
    if (this.props && this.props.location && this.props.location.state && this.props.location.state.showItems) {
      this.setState({ showItems: !this.props.location.state.showItems }, () => {
        this.fetchAllItemData();
        this.fetchAllStoreData();
      })
    } else if (this.props.match.params.category) {
      this.setState({ selectedCategory: this.props.match.params.category }, () => {
        if (this.state.showItems) {
          this.fetchAllItemData();
        } else {
          this.fetchAllStoreData();
        }
      });
    } else {
      this.fetchAllItemData();
      this.fetchAllStoreData();
    }

    this.props.fetchStoreCategories();
    this.props.fetchItemCategories();
  }


  fetchAllItemData() {
    const formData = {
      size: this.state.size,
      lastKey: this.state.lastKey,
      category: this.state.selectedCategory
    };
    this.props.fetchAllItemData(formData);
  }

  fetchAllStoreData() {
    const formData = {
      size: this.state.size,
      lastKey: this.state.lastKey,
      category: this.state.selectedCategory
    };
    this.props.fetchAllStoreData(formData);
  }

  fetchMoreData = () => {
    this.setState({
      lastKey: this.state.pagination.nextKey
    },
      () => {
        if (this.state.showItems) {
          this.fetchAllItemData();
        } else {
          this.fetchAllStoreData();
        }
      });
  };

  handleCategoryChange = (category: any) => {
    this.setState({ selectedCategory: category }, () => {
      history.replace(`/browse/category/${category}`);
      if (this.state.showItems) {
        this.fetchAllItemData();
      } else {
        this.fetchAllStoreData();
      }
    });
  }

  viewStores = () => {
    this.setState({ showItems: false }, () => {
      this.fetchAllStoreData();
    });
  };
  viewItems = () => {
    this.setState({ showItems: true }, () => {
      this.fetchAllItemData();
    });
  };

  handleHome = () => {
    history.push('home');
  }

  render() {
    const { items, pagination, selectedCategory, showItems, stores } = this.state;
    const { categories, itemcategories } = this.props;
    const filterCategories = showItems ? itemcategories : categories;
    return (
      <div>
        <Header history={this.props.history}></Header>
        <div className={styles.appBrowsewrapper}>
          <Container className={styles.appBrowsecontainer}>
            {(this.props.isLoading || this.props.stores.isLoading) && <Loader />}
            <Row>
              <Col sm={2} className={styles.appleftcategory}>
                <Categoryfilter
                  categories={filterCategories}
                  handleCategoryChange={this.handleCategoryChange}
                  selectedCategory={selectedCategory}
                />
              </Col>
              <Col sm={10} className={styles.appBrowsefield}>
                <Breadcrumb>
                  <Breadcrumb.Item onClick={this.handleHome}>Home</Breadcrumb.Item>
                  <Breadcrumb.Item active>Collectibles</Breadcrumb.Item>
                </Breadcrumb>
                <BrowseStore
                  categories={filterCategories}
                  handleCategoryChange={this.handleCategoryChange}
                  selectedCategory={selectedCategory}
                  items={items}
                  pagination={pagination}
                  showItems={showItems}
                  stores={stores}
                  viewStores={this.viewStores}
                  viewItems={this.viewItems} />
              </Col>
            </Row>
          </Container>
        </div>
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = (state: stateProps) => ({
  error: state.fetchAllItem.error,
  items: state.fetchAllItem.message,
  isLoading: state.fetchAllItem.isLoading,
  isFetchAllItemSuccess: state.fetchAllItem.isFetchAllItemSuccess,
  categories: state.fetchStoreCategories.message,
  itemcategories: state.fetchItemCategories.message,
  stores: state.fetchAllStore
});

const mapDispatchToProps: PropsFromDispatch = {
  fetchStoreCategories: fetchStoreCategoriesAction,
  fetchItemCategories: fetchItemCategoriesAction,
  fetchItemCategoriesSuccess: fetchItemCategoriesSuccessAction,
  fetchAllStoreData: fetchAllStoreDataAction,
  fetchAllStoreDataSuccess: fetchAllStoreDataSuccessAction,
  fetchAllItemData: fetchAllItemDataAction,
  fetchAllItemDataSuccess: fetchAllItemDataSuccessAction,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(BrowsePage);

