const orders = (state = [], action) => {
    switch (action.type) {
    case 'ADD_NEW_ORDER':
        return [
            ...state,
            action.order
        ];
    case 'HYDRATE_ORDERS':
        return action.notices;
    default:
        return state;
    }
};

export default orders;
