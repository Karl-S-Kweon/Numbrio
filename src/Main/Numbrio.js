import '../App.css';
import React, { useEffect, useReducer } from 'react';
import { Snackbar, Button, Typography, Slide } from '@mui/material/';
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
        rowChanged: false,
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
        if (!state.rowChanged) {
            state.row++
            state.rowChanged = true;
        }
    }

    const msgFromKey = (msg) => {
        // console.log("before pop: " + state.data)
        if (msg.toString() === 'Enter') {
            // state.data[1]=[];
            if (state.data[state.row].length > 3) {
                // console.log('Enter recognized')
                // setState({data: []})
                state.msg = 'Enter'
                // setState({ msg: 'Enter' })
                // state.data[1].push(msg);
                // console.log("Enter pushed to data[1]")
            }
            else {
                if (!state.gameOver) {
                    setState({ snackOn: true, snack: 'Not enough numbers!' })
                }
            }

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
            // console.log('gameOver? -->' + state.gameOver)
            // if (state.data[state.row].length === 0) {
            //     console.log('Do you need this?')

            //     setState({ data: state.data })       
            //     console.log('Yeah, I need this for, ' + state.data)         
            // }
            state.rowChanged = false;
            state.data[state.row].push(msg)
        }

        // console.log("After pop: " + state.data)
        setState({ data: state.data, row: state.row, msg: state.msg })
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
                animationDuration: '1.9s',
                animationIterationCount: 'infinite',
            }}
            onClick={() => { window.location.reload(true) }} // should modify later
        >
            <div
                className="blockFont"
                style={{
                    width: '100%',
                    height: '100%',
                    color: 'white',

                    backgroundColor: 'royalblue',

                    border: 'solid white 5px',
                    // borderColor: 'white',
                    // borderWidth: '5px',
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

    const snackbarClose = (event, reason) => {
        if (reason === "clickaway") {
            return;
        }
        setState({ snackOn: false })
    };

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
                // className='snack'
                sx={
                    (state.row < 4 ?
                        {
                            height: "140vh",
                            marginLeft: "25%",
                            zIndex: 0,
                        } : {
                            height: "28vh",
                            marginLeft: "25%",
                            zIndex: 0,
                        })
                }
                style={
                    !state.gameOver ?
                    {
                        width: "50%",
                    } : {
                        width: "96%",
                        marginLeft: "0%",
                    }
                }
                anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
                open={state.snackOn}
                TransitionComponent={
                    function (props) {
                        return <Slide {...props} direction="left" />;
                    }
                }
                message={
                    <div
                        style={
                            !state.gameOver ? {
                                width: '100%',
                                height: '100%',
                                marginLeft: '11%'
                            } : {
                                width: '100%',
                                height: '100%',
                                marginLeft: '0'
                            }
                        }
                    >
                        <Typography
                            style={{
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                margin: 'auto',
                                textAlign: 'center',
                                alignContent: 'center',
                                alignSelf: 'center',
                                // border: 'solid white 2px',
                            }}
                        >
                            {state.snack}
                        </Typography></div>
                }
                autoHideDuration={state.gameOver === false ? 1250 : 9000}
                onClose={snackbarClose}
            />
        </div>
    );
};
export default Numbrio;