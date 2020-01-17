import React from 'react';
import styles from "./Categoryfilter.module.css";
import { Form } from 'react-bootstrap';


class Categoryfilter extends React.Component<any, any> {


  render() {
    const { categories, selectedCategory, handleCategoryChange } = this.props;
    return (
      <div className={styles.appFilterblock}>
        <Form>
          <div className={styles.appBlockcategory}>
            <h3>Categories </h3>
            {categories && categories.map((category, index) => {
              return (<Form.Group controlId="formBasicCheckbox" key={index} className={styles.appFormgroup}>
                <div className={styles.appCustomcheck}>
                  <input className={styles.appCheckboxfield} checked={selectedCategory === category} onClick={() => handleCategoryChange(category)} type="checkbox"></input>
                  <label className={styles.appCheckmark}></label>
                </div>
                <p>
                  {category}
                </p>
              </Form.Group>);
            })}

            {!categories &&
              <Form.Group controlId="formBasicCheckbox" className={styles.appFormgroup}>
                <div className={styles.appCustomcheck}>
                  <input className={styles.appCheckboxfield} type="checkbox"></input>
                  <label className={styles.appCheckmark}></label>
                </div>
                <p>
                  ....Loading
                </p>
              </Form.Group>}
          </div>
          <div className={styles.appBlockcategory}>
            <h3>Seller  reputation</h3>
            <Form.Group controlId="formBasicCheckbox" className={styles.appFormgroup}>
              <div className={styles.appCustomcheck}>
                <input className={styles.appCheckboxfield} type="checkbox" disabled></input>
                <label className={styles.appCheckmark}></label>
              </div>
              <p>
                Top seller
                  </p>
            </Form.Group>
            <Form.Group controlId="formBasicCheckbox" className={styles.appFormgroup}>
              <div className={styles.appCustomcheck}>
                <input className={styles.appCheckboxfield} disabled type="checkbox"></input>
                <label className={styles.appCheckmark}></label>
              </div>
              <p>
                Average seller
                  </p>
            </Form.Group>
            <Form.Group controlId="formBasicCheckbox" className={styles.appFormgroup}>
              <div className={styles.appCustomcheck}>
                <input className={styles.appCheckboxfield} disabled type="checkbox"></input>
                <label className={styles.appCheckmark}></label>
              </div>
              <p>
                Bad seller
                  </p>
            </Form.Group>
          </div>
          <div className={styles.appBlockcategory}>
            <h3>Sort by</h3>
            <Form.Group controlId="formBasicCheckbox" className={styles.appFormgroup}>
              <div className={styles.appCustomcheck}>
                <input className={styles.appCheckboxfield} disabled type="checkbox"></input>
                <label className={styles.appCheckmark}></label>
              </div>
              <p>
                Oldest
                    </p>
            </Form.Group>
            <Form.Group controlId="formBasicCheckbox" className={styles.appFormgroup}>
              <div className={styles.appCustomcheck}>
                <input className={styles.appCheckboxfield} disabled type="checkbox"></input>
                <label className={styles.appCheckmark}></label>
              </div>
              <p>
                Price - Low to high
                    </p>
            </Form.Group>
            <Form.Group controlId="formBasicCheckbox" className={styles.appFormgroup}>
              <div className={styles.appCustomcheck}>
                <input className={styles.appCheckboxfield} disabled type="checkbox"></input>
                <label className={styles.appCheckmark}></label>
              </div>
              <p>
                Price - High to low
                    </p>
            </Form.Group>
          </div>
          <div className={styles.appBlockcategory}>
            <h3>Price</h3>
            <Form.Group controlId="formBasicCheckbox" className={styles.appFormgroup}>
              <div className={styles.appCustomcheck}>
                <input className={styles.appCheckboxfield} disabled type="checkbox"></input>
                <label className={styles.appCheckmark}></label>
              </div>
              <p>
                $ 1,000 - $ 2,000
                      </p>
            </Form.Group>
            <Form.Group controlId="formBasicCheckbox" className={styles.appFormgroup}>
              <div className={styles.appCustomcheck}>
                <input className={styles.appCheckboxfield} disabled type="checkbox"></input>
                <label className={styles.appCheckmark}></label>
              </div>
              <p>
                $ 2,000 - $ 3,000
                      </p>
            </Form.Group>
            <Form.Group controlId="formBasicCheckbox" className={styles.appFormgroup}>
              <div className={styles.appCustomcheck}>
                <input className={styles.appCheckboxfield} disabled type="checkbox"></input>
                <label className={styles.appCheckmark}></label>
              </div>
              <p>
                $ 3,000 - $ 4,000
                      </p>
            </Form.Group>
            <Form.Group controlId="formBasicCheckbox" className={styles.appFormgroup}>
              <div className={styles.appCustomcheck}>
                <input className={styles.appCheckboxfield} disabled type="checkbox"></input>
                <label className={styles.appCheckmark}></label>
              </div>
              <p>
                $ 4,000 - $ 5,000
                      </p>
            </Form.Group>
            <Form.Group controlId="formBasicCheckbox" className={styles.appFormgroup}>
              <div className={styles.appCustomcheck}>
                <input className={styles.appCheckboxfield} disabled type="checkbox"></input>
                <label className={styles.appCheckmark}></label>
              </div>
              <p>
                $ 6,000 - $ 7,000
                      </p>
            </Form.Group>
          </div>
        </Form>

      </div>
    );
  }
}


export default Categoryfilter;