import React, {useEffect} from 'react';
import './App.css';
import Header from "./features/Header/Header";
import {RoutesConst} from "./Routes/RoutesConst";
import {CircularProgress} from "@mui/material";
import {RootStateType, useAppDispatch, useAppSelector} from "./redux/store";
import {checkAuthMe} from "./features/Auth/auth-reducer";

function App() {
    const dispatch = useAppDispatch()
    const isInitialized = useAppSelector<boolean>(state => state.app.isInitialized)
    const status = useAppSelector<string>(state => state.app.status)

    useEffect(() => {
        dispatch(checkAuthMe())
        document.title = "Cards"

    }, [])
    if (!isInitialized && status == 'loading') {
        return (
            <div
                style={{
                    position: "fixed",
                    top: "30%",
                    textAlign: "center",
                    width: "100%",
                }}
            >
                <CircularProgress/>
            </div>
        );
    }
    return (
        <div className="App">
            <Header/>
            <RoutesConst/>
        </div>
    );
}

export default App;
