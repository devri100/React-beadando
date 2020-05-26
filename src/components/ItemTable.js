import React from 'react'
import PropTypes from 'prop-types'
import Item from './Item'

const ItemTable = ({items, removeItem}) => (
    <table className="table table-hovered table-striped">
        <thead className="thead-dark">
            <tr>
                <th>Product's name:</th>
                <th>Quantity:</th>
                <th className="fit">&nbsp;</th>
            </tr>
        </thead>
        <tbody>
        {items.map(todo =>
            <Item
                key={todo.id}
                {...todo}
                onClick={() => removeItem(todo.id)}
            />
        )}
        </tbody>
    </table>
);

ItemTable.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            product: PropTypes.string.isRequired,
            quantity: PropTypes.string.isRequired
        }).isRequired
    ).isRequired,
    removeItem: PropTypes.func.isRequired
};

export default ItemTable
