export default function reducer(state, action) {
    // eslint-disable-next-line default-case
    switch (action.type) {
        case 'LOGIN':
            localStorage.setItem('user', JSON.stringify(action.payload));

            return {
                ...state,
                user: action.payload
            }

        case 'LOGOUT':
            localStorage.removeItem('user');

            return {
                ...state,
                user: null
            }
    }
}