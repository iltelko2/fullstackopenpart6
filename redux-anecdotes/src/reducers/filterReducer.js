
const initialState = { filterText: '' }

const createFilter = (filterText) => {
    return { type: "SET_FILTER", filterText }
}

const filterReducer = (state = initialState, action) => {
    switch (action.type) {
        case "SET_FILTER":
            return { filterText: action.filterText }
        default:
            return state;
    }
}

export { filterReducer, createFilter }