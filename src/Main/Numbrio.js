import React, { useEffect, useReducer } from 'react';
import { Snackbar } from "@material-ui/core";
import '../App.css';
import Keyboards from './Keyboards/Keyboards';
import MysterioBlocks from './MyterioBlocks/MyterioBlocks';

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
            []
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

    // console.log(state.data)
    // send keyboards the input array, to prevent selecting duplicate key value
    return <>

        <MysterioBlocks data={state.data} row={state.row} message={state.msg} getFromChild={msgFromBlock} />
        <Keyboards data={state.data} row={state.row} getFromChild={msgFromKey} />
        {<Snackbar
            sx={{ height: "50%" }}
            anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
            open={state.snackOn}
            message={state.snack}
            autoHideDuration={2200}
            onClose={snackbarClose}
            // key={'top' + 'center'}
        />}
    </>;
};
export default Numbrio;