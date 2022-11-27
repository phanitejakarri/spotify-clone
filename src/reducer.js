export const initialState ={
    user: null,
    playlists: [],
    playing: false,
    item: null,
    token: true
    // "BQALNyj5hgerngiovr+e6gg1eg6r1h5rshet9h8",  
 
};

function reducer(state, action) {
    console.log(action);

    switch (action.type) {
        case "SET_USER":
            return {
                ...state,
                user: action.user,
            };
        case "SET_TOKEN":
            return {
                ...state,
                _token: action.token,
            };

        case 'SET_PLAYLISTS':
            return {
                ...state,
                playlists: action.playlists,
            };

        case "DISCOVER_WEEKLY":
            return {
                ...state,
                discover_weekly: action.discover_weekly,
            };


        default:
            return state;
    }
} 

export default reducer;