import React from "react";
import GlobalStyles from "./styles/GlobalStyles";
import Home from "./pages/Home";
import Header from "./components/Header";
import { Provider } from "react-redux";
import store from "./redux/store"

const App: React.FC = () =>{

    return( 

        <Provider store={store}>
            <GlobalStyles/>
            <Header/>
            <Home/>
        </Provider>
       
    )
}

export default App;