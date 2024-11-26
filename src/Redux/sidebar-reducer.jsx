let initialState = {
    friendsOnline: [
        {id: 1, name: 'Богдан'},
        {id: 2, name: 'Артем'},
        {id: 3, name: 'Спанч Боб'},
    ]
}

const sidebarReducer = (state = initialState, action) => {
    return state;
}

export default sidebarReducer;