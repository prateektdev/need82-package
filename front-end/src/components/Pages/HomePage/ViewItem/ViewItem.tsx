import React from 'react';
import { connect } from 'react-redux';
import Carousel from 'react-multi-carousel';
import styles from "./ViewItem.module.css";
import rightarrow from '../../../../assets/images/right_arrow.png';
import 'react-multi-carousel/lib/styles.css';
import {
  fetchListingData as fetchListingDataDataAction,
}
  from '../../../../actions/home.actions';
import {
  FetchListingState,
  stateProps,
  PropsFromDispatch
} from './viewlisting.interface';
import { history } from '../../../../utils/history';

class ViewItem extends React.Component<any, FetchListingState> {

  constructor(props) {
    super(props);
    this.state = {
      items: [],
      pagination: {},
      size: 10,
      lastKey: ''
    };
  }

  goToItems = () => {
    history.push("/browse/category/Collectibles", {showItems: true });
  }

  goToItemDetails = (item_id: string) => {
    history.push('/viewanitem', { item_id: item_id });
  }

  componentDidUpdate(prevProps) {
    if (this.props.message !== prevProps.message) {
      this.setState({
        items: this.props.message.content,
        pagination: this.props.message.metadata
      });
    }
  }

  componentDidMount() {
    this.fetchListingData();
  }

  fetchListingData() {
    const formData = {
      size: this.state.size,
      lastKey: this.state.lastKey
    };
    this.props.fetchListingData(formData);
  }

  render() {
    const { items } = this.state;
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
          <h3 className="float-left">Most viewed items</h3>
          <a className="float-right" onClick={this.goToItems}>See all
            <img src={rightarrow} className="img-fluid" />
          </a>
        </div>
        <Carousel responsive={responsive} arrows={true}>
          {
            items.map((item, index) => {
              return (<div className={styles.appItemfield}  onClick={() => this.goToItemDetails(item.id)} key={index}>
                <img
                  src={item.preview_images[0]}
                  className="img-fluid"
                />
                <h4>{item.title}</h4>
                <div className={styles.appLabelfiedl}><span>Owner:</span>{item.store.owner_username}</div>
                <h3>$ {item.item_price}</h3>
              </div>);
            })
          }
        </Carousel>
      </div>
    );
  }
}

const mapStateToProps = (state: stateProps) => ({
});

const mapDispatchToProps: PropsFromDispatch = {
  fetchListingData: fetchListingDataDataAction,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ViewItem);