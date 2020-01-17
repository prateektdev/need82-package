import React from 'react';
import styles from "../CreateStore.module.css";
import { Nav } from 'react-bootstrap';


class Category extends React.Component<any, any> {

  render() {
    const { category, categories, handleCategoryChange } = this.props;
    return (
      <div>
        <Nav
          activeKey="#"
          onSelect={(selectedKey) => handleCategoryChange(selectedKey)}
          className={styles.appListinglink} >
          {
            categories && categories.map((categoryName, index) => {
              return <Nav.Item key={index}>
                <Nav.Link eventKey={categoryName}
                  className={category === categoryName ? styles.appactive : ''}>
                  {categoryName}
                </Nav.Link>
              </Nav.Item>
            })

          }
          {!categories && (<p>Fetching Categories...........</p>)}
        </Nav>
      </div>
    );
  }
}

export default Category;