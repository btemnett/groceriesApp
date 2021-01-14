import * as listActions from '../actions/ListActions';

export const ListReducer = (state: any, action: any) => {
    switch ( action.type) {
        case listActions.TEST_REDUX_STRING: {
            return {
                ...state,
                testReduxString: action.testReduxString
            }
        }

        default: {
            return {
                ...state
            }
        }
    }
}