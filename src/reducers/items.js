// reducers are the one changing the state itself.
const items = (state = JSON.parse(localStorage.getItem("items")), action) => {
    let result;
    if (state === null) {
        state = []
    }
    switch (action.type) {
        case 'ADD_ITEM':
            localStorage.setItem("last_id", action.id + 1)
            result = [
                ...state,
                {
                    id: action.id,
                    product: action.product,
                    quantity: action.quantity
                }
            ];
            break;
        case 'REMOVE_ITEM':
            result = state.filter(item => item.id !== action.id)
            break;
        default:
            return state
    }

    localStorage.setItem("items", JSON.stringify(result));

    return result
};

export default items
