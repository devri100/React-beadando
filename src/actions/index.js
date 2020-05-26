let nextItemId = localStorage.getItem("last_id");

if(nextItemId === null){
    nextItemId = 0
}

export const addItem = (product, quantity) => ({
    type: 'ADD_ITEM',
    id: nextItemId++,
    product,
    quantity
});

export const removeItem = id => ({
    type: 'REMOVE_ITEM',
    id
});
