import '../../App.css';
import React, { useReducer } from 'react';
import { Snackbar } from "@material-ui/core";
import { List } from "@material-ui/core";
import Block from './Block'

const BlockRow = (props) => {
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
        // console.log(state.data)
    };

    let index = [0, 1, 2, 3];
    
    let css = {
        borderColor: 'grey',
        borderWidth: '1px'
    }

    // make this under if-else for 'Enter'
    let Blocks = index.map((idx) => (
        <Block value={props.value[idx]} css={props.value[idx] !== undefined ? ['dimgrey', 'pulse'] : ['darkgrey']} key={idx} />
        // getFromChild={msgFromChild}
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
                    height: '5vh',

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
            >{Blocks}</List>
            {/* <Snackbar
                open={state.status}
                message={state.data}
                autoHideDuration={1}
                onClose={sendKeyData}
            /> */}
        </div>
    )
};

export default BlockRow;