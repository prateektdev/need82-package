import React from 'react';
import styles from "../CreateStore.module.css";
import { Form, InputGroup, FormControl } from 'react-bootstrap';

export class MetaDataComponent extends React.Component<any, any>{

  render() {
    const { handleAddRow, handleRemoveRow,disabled,handleMetadataChange, rows } = this.props;
    return (<div>
      {
        rows && rows.map((row, index) => (<div  key={index}><Form.Group controlId="formBasicEmail">
          <Form.Label className={styles.appFormlabel}>Name of your data</Form.Label>
          <FormControl
            placeholder="Enter a name for data here"
            type='text'
            disabled={disabled}
            value={row.key}
            onChange={(event)=>handleMetadataChange(event,index,'key')}
          />
        </Form.Group>
          <Form.Group controlId="formBasicEmail">
            <Form.Label className={styles.appFormlabel}>Value of your data</Form.Label>
            <InputGroup className="mb-3" key={index}>
              <FormControl
                placeholder="Recipient's username"
                aria-label="Amount (to the nearest dollar)"
                type='text'
                value={row.value}
                disabled={disabled}
                onChange={(event)=>handleMetadataChange(event,index,'value')}
              />
              {index < 2 && index + 1 === rows.length && (<InputGroup.Append>
                <InputGroup.Text className={styles.appPlusfield}
                  onClick={handleAddRow}>
                  +
                </InputGroup.Text>
              </InputGroup.Append>)}
              {index >= 1 && index + 1 === rows.length && (
                <InputGroup.Append>
                  <InputGroup.Text className={styles.appPlusfield}
                    onClick={handleRemoveRow}>
                    -
               </InputGroup.Text>
                </InputGroup.Append>
              )}
            </InputGroup>
          </Form.Group>
        </div>))
      }</div>
    )
  }
}