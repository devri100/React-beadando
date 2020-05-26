import React from 'react'
import PropTypes from 'prop-types'

const Item = ({onClick, completed, product, quantity}) => (

    <tr
        /*  style={{
              textDecoration: completed ? 'line-through' : 'none'
          }}
          className="list-group-item" */
    >
        <td>{product}</td>
        <td>{quantity}</td>
        <td className="fit">
            <div className="col-4 text-right">
                <button className="btn btn-sm btn-danger" onClick={onClick}>Remove item</button>
            </div>
        </td>
    </tr>

);

// not mandatory element of the application
Item.propTypes = {
    onClick: PropTypes.func.isRequired,
    product: PropTypes.string.isRequired,
    quantity: PropTypes.string.isRequired,
};

export default Item
