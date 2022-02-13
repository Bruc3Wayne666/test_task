import {Route, Routes} from "react-router";
import React, {useEffect, useState} from "react";
import Main from "./pages/Main";
import Todos from "./pages/Todos";
import Navbar from "./components/Navbar";
import './styles/global.css'
import Paginator from "./components/Paginator";
import {change} from "./utils/paginator";


function App() {
    return (
        <div className='App'>
            <Navbar/>
            <Routes>
                <Route path={'/'} element={<Main/>}/>
                <Route path={'/todos'} element={<Todos/>}/>
            </Routes>
        </div>
    );
}

export default App;
