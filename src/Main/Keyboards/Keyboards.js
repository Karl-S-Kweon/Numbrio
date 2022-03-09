import '../../App.css';
import React, { useReducer } from 'react';
import { Snackbar } from "@material-ui/core";
import KeyRow from './keyRow'

const Keyboards = (props) => {
    const initialState = {
        data: "",
        status: false,
    };

    const reducer = (state, newState) => ({ ...state, ...newState });
    const [state, setState] = useReducer(reducer, initialState);

    const sendKeyData = (event, reason) => {
        props.getFromChild(state.data);
        
        if (reason === "clickaway") {
            return;
        }
        setState({ status: false });
    };

    const msgFromChild = (msg) => {
        setState({ data: msg, status: true });
    };

    return (
        <div style={{
            // box size & space control
            width: '100vw',
            height: '18vh',
            left: '50%',
            top: '91%',
            position: 'absolute',           
            marginTop: '-10vh', // half of height
            marginLeft: '-50vw', // half of width
            padding: '0px 0px',
            
            // content alignment
            justifyContent: "center",
            alignItems: "center",
            textAlign:"center",
            
            // Border Line
            // border: "solid",
            // borderColor: 'orange',
            // borderWidth: '1px',
        }}
        >
            <KeyRow
                getFromChild={msgFromChild}
                keyRange={[1, 2, 3, 4, 5, 6]}
            />
            <KeyRow
                getFromChild={msgFromChild}
                keyRange={["Enter", 7, 8, 9, 0, "Del"]}
            />
            <Snackbar
                open={state.status}
                message={state.data}
                autoHideDuration={0}
                onClose={sendKeyData}
            />
        </div>
    )
};

export default Keyboards;