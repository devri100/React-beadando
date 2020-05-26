let nextTodoId = 0;

export const addItem = (product, quantity) => ({
    type: 'ADD_ITEM',
    id: nextTodoId++,
    product,
    quantity
});

export const removeItem = id => ({
    type: 'REMOVE_ITEM',
    id
});
