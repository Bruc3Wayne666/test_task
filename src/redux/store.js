import {applyMiddleware, createStore} from "redux";
import thunk from "redux-thunk";
import {Provider} from "react-redux";
import {rootReducer} from "./reducers";
import {composeWithDevTools} from "redux-devtools-extension";


const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))


export const DataProvider = ({children}) => {
    return (
        <Provider store={store}>
            {children}
        </Provider>
    )
}