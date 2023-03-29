export default function (state = [], action) {
    console.log("reducer");

    switch (action.type) {
        case 'GET_PRODUCTS': return action.payload.data;
        default: return state;
    }
}

