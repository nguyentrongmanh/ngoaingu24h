import React from 'react';
import "./styles/index.css";
import "./styles/auth.css";
import 'antd/dist/antd.css';
import Routers from './Routers';
import { BrowserRouter } from "react-router-dom"
import { createStore } from "redux"
import appReducer from "./reducers/index"
import { Provider } from "react-redux"

const store = createStore(
	appReducer,
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

function App() {
	return (
		<Provider store={store}>
			<Routers></Routers>
		</Provider>
	);
}

export default App;
