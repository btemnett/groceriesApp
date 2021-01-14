export const TEST_REDUX_STRING = 'TEST_REDUX_STRING';

export const updateTestReduxString = (testReduxString: string) => ({
    type: TEST_REDUX_STRING,
    testReduxString
})