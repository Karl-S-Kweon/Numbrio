import '../../App.css';
import React, { useReducer } from 'react';
import { Snackbar } from "@material-ui/core";
import { List } from "@material-ui/core";
import Key from './key'

const KeyRow = (props) => {
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
        props.data[1] = []
        // console.log(state.data)
    };

    let index = props.keyRange;

    // console.log(props.data[1].includes('Del'));

    let keyboxes = index.map( idx => ( props.data[0].includes(idx) === true ?
        <Key getFromChild={msgFromChild} value={idx} key={idx} pointer={['none', 'dimgrey', 'pulse']} /> :
        ( props.data[1].includes(idx) === true ? 
        <Key getFromChild={msgFromChild} value={idx} key={idx} pointer={['auto', 'white', 'pulse']}/>: 
        <Key getFromChild={msgFromChild} value={idx} key={idx} pointer={['auto', 'white']}/>)
    ));
    
    return (
        <div
            style={{
                // this box's width/height
                width: '99vw',
                height: '8vh',

                // border line
                // borderStyle: 'solid',
                // borderColor: 'red',
                // borderWidth: '1px',

                // content alignment
                display: "flex",
                justifyContent: "center",
                alignItems: "center",

                // box space control
                // padding: '0px',
                margin: '5px 0px'
            }}
        >
            <List
                style={{
                    // this box's width/height
                    width: '100vw',
                    height: '7.5vh',

                    // border line
                    // borderStyle: 'solid',
                    // borderColor: 'blue',
                    // borderWidth: '1px',

                    // content alignment
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    
                    // box space control
                    // padding: '0px',
                    // margin: '5px 0px'
                }}
            >{keyboxes}</List>
            <Snackbar
                open={state.status}
                message={state.data}
                autoHideDuration={0}
                onClose={sendKeyData}
            />
        </div>
    )
};

export default KeyRow;