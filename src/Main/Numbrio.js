import '../App.css';
import React, { useEffect, useReducer } from 'react';
import { Snackbar } from "@mui/material/";
import { Box, Button } from '@mui/material/';
import Keyboards from './Keyboards/Keyboards';
import MysterioBlocks from './MyterioBlocks/MyterioBlocks';
import HeaderBar from './Header/HeaderBar'
import { fontFamily } from '@mui/system';

// An example of a React Functional Component using JSX syntax
const Numbrio = () => {
    const initialState = {
        data: [
            [],
            [],
            [],
            [],
            [],
            [],
            // [],
            // [],
            // []
        ],
        row: 0,
        msg: '',
        snack: '',
        snackOn: false,
        position: {
            vertical: 'top',
            horizontal: 'center'
        },
        gameOver: false,
    };

    const reducer = (state, newState) => ({ ...state, ...newState });
    const [state, setState] = useReducer(reducer, initialState);

    useEffect(() => {
        // setState({ data: state.data })
        // state.data[1]=[];
    })

    // let gameOver = false

    const msgFromBlock = (msg) => {
        // console.log(msg[0], ' ', msg[1])
        setState({ msg: '', snack: msg[0], snackOn: true, gameOver: msg[1] })
        // gameOver = msg[1]
        state.data.push([])
        state.row++
    }

    const snackbarClose = (event, reason) => {
        if (reason === "clickaway") {
            return;
        }
        setState({ snackOn: false })
    };

    const msgFromKey = (msg) => {
        // console.log("before pop: " + state.data)
        if (msg.toString() === 'Enter') {
            // state.data[1]=[];
            if (state.data[state.row].length > 3) {
                // setState({data: []})
                state.msg = 'Enter'
                // state.data[1].push(msg);
                // console.log("Enter pushed to data[1]")
            }
            msg = ''
            // return
        }
        else if (msg.toString() === 'Del') {
            msg = ''

            if (state.data[state.row].length !== 0) {
                state.data[state.row].pop()
            }
            // return
        }
        else if (state.gameOver !== true && state.data[state.row].length < 4) {
            console.log('gameOver? -->' + state.gameOver)
            if (state.data[state.row].length === 0) {
                setState({ data: state.data })
            }
            state.data[state.row].push(msg)
        }

        // console.log("After pop: " + state.data)
        setState({ data: state.data, row: state.row })
        // msgFromBlock()
    };
    
    let reset = (
        <Button
            style={{
                zIndex: 0,
                // border: 'blue 1px solid',
                borderRadius: '50%',
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: 'crimson',
                animationName: 'breath',
                animationDuration: '1.7s',
                animationIterationCount: 'infinite',
            }}
        // onClick={{}}
        >
            <div
                className="blockFont"
                style={{
                    width: '100%',
                    height: '100%',
                    color: 'white',

                    backgroundColor: 'royalblue',

                    borderStyle: 'solid',
                    borderColor: 'white',
                    borderWidth: '3px',
                    borderRadius: '50%',

                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    fontFamily: 'Unicode Lucida Sans-Serif',
                    // fontFamily: 'Lucida',
                    // fontFamily: '',
        }}
    >&#x21bb;</div>
        </Button >
    );

// console.log(state.data)
// send keyboards the input array, to prevent selecting duplicate key value
return (
    <div
        className="NumbrioDiv"
    >
        <div className='reload'>
            {state.gameOver && reset}
            {/* {reset} */}
        </div>
        <div className="divHeader">
            <HeaderBar />
        </div>
        <div className="divBody">
            <MysterioBlocks data={state.data} row={state.row} message={state.msg} getFromChild={msgFromBlock} />
        </div>
        <div className="divFooter">
            <Keyboards data={state.data} row={state.row} getFromChild={msgFromKey} />
        </div>

        <Snackbar
            sx={{ height: "50%" }}
            anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
            open={state.snackOn}
            message={state.snack}
            autoHideDuration={2200}
            onClose={snackbarClose}
        />
    </div>
);
};
export default Numbrio;