const intialData = {
    list: []
}

const hosreducers = (state = intialData, action) => {
    switch (action.type) {
        case "ADD_TODO":
            const { id, data } = action.payload;

            return {
                ...state,
                list: [
                    ...state.list,
                    {
                        id: id,
                        data: data
                    }
                ]
            }
        default: return state;
    }
}
export default hosreducers;