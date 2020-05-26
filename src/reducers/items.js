// reducers are the one changing the state itself.
const items = (state = [], action) => {
    switch (action.type) {
        case 'ADD_ITEM':
            return [
                ...state,
                {
                    id: action.id,
                    product: action.product,
                    quantity: action.quantity,
                    completed: false
                }
            ];
        case 'REMOVE_ITEM':
            return state.filter(item => item.id !== action.id)
        default:
            return state
    }
};

export default items
