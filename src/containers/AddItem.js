import React from 'react'
import {connect} from 'react-redux'
import {addItem} from '../actions'

const AddItem = ({dispatch}) => {

    // we will store the input field itself here.
    let productInput;
    let quantityInput;

    return (
        <div>
            <form onSubmit={e => {
                // no reload at all
                e.preventDefault();

                // check
                if (!(productInput.value.trim() && quantityInput.value.trim())) {
                    return
                }

                dispatch(addItem(productInput.value, quantityInput.value));

                productInput.value = "";
                quantityInput.value = "1";
            }}>
                <div className="form-group row">
                    <div className="col">
                        <label htmlFor="product" className="col-form-label text-right ">Product Name:</label>
                        <br/>
                        <input name="product" id="product" className="form-control" ref={node => productInput = node}/>
                    </div>

                    <div className="col-auto">
                        <label htmlFor="quantity" className="col-form-label text-right ">Quantity:</label>
                        <br/>
                        <input type="number" name="quantity" id="quantity" min="1" defaultValue="1" className="form-control" ref={node => quantityInput = node}/>
                    </div>

                    <div className="col-auto">
                        <label htmlFor="quantity" className="col-form-label text-right ">&nbsp;</label>
                        <br/>
                        <button type="submit" className="btn btn-primary">
                            Add Item
                        </button>
                    </div>
                </div>
            </form>
        </div>
    )
};

export default connect()(AddItem)
