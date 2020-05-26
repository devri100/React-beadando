import {connect} from 'react-redux'
import {removeItem} from '../actions'
import ItemTable from '../components/ItemTable'

const mapStateToProps = state => ({
    items: state.items
});

const mapDispatchToProps = dispatch => ({
    removeItem: id => dispatch(removeItem(id))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ItemTable)
