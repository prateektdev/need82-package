import React, { Fragment } from 'react';
import styles from "../CreateStore.module.css";
import { Row, Col } from 'react-bootstrap';

export const MintBox = ({ size, amount, selected, handleMintSize }) => {
  return (<div className={selected ? styles.appBatchmintSelected : 'img-thumbnail'} onClick={(event) => handleMintSize(size)}>
    <span>Batch mint</span>
    <h2>{size}</h2>
    <p>Tokens</p>
    <div className={styles.appFreetext}>${amount}</div>
  </div>)
}

export class BatchMintComponent extends React.Component<any, any>{
  constructor(props) {
    super(props)
    this.state = {
      enableBatchMinting: false,
      mintSize: 0
    }
  }

  render() {
    const { data, handleCheckClick, handleMintSize, enableBatchMinting, mintSize } = this.props;
    return <Fragment>
      <div className={styles.appCustomcheck}>
        <p className='float-right'>Increase Batch Minting</p>
        <div className='float-left'>
          <input className={styles.appCheckboxfield}
            type="checkbox"
            checked={enableBatchMinting}
            onChange={handleCheckClick} />
          <label className={styles.appCheckmark}></label>
        </div>
      </div>
      {enableBatchMinting && <div className={styles.appMetadata}>
        <div className={styles.appBatchmint}>
          <Row>
            {
              data.map((mint, index) => {
                return <Col key={index} sm={3} xs={6} className={styles.appBlockfield}>
                  <MintBox size={mint.size} amount={mint.amount} handleMintSize={handleMintSize} selected={mintSize === mint.size} />
                </Col>
              })
            }
          </Row>
        </div>
      </div>}
    </Fragment>
  }
}