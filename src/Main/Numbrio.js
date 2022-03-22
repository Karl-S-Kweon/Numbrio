import '../App.css';
import React, { useEffect, useReducer } from 'react';
import { Snackbar, Button, Typography, Slide } from '@mui/material/';
import Keyboards from './Keyboards/Keyboards';
import MysterioBlocks from './MyterioBlocks/MyterioBlocks';
import HeaderBar from './Header/HeaderBar'
// import { fontFamily } from '@mui/system';

// An example of a React Functional Component using JSX syntax
const Numbrio = () => {
    let px = document.documentElement.style.setProperty('innerheight', `${window.innerHeight / 100}px`);

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
            snackbarClose()
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
            snackbarClose()
        }

        // console.log("After pop: " + state.data)
        setState({ data: state.data, row: state.row, msg: state.msg })
    };

    let reset = (
        <Button
            id="baseball"
            style={{
                zIndex: 1,

                // border: 'crimson 1px solid',
                backgroundColor: 'crimson',
                width: '9vh', // 80 5:16
                height: '9vh', // 85 5:17
                borderRadius: '50%',
                display: "flex",
                justifyContent: "center",
                alignItems: "center",

                animationName: 'breath',
                animationDuration: '1.9s',
                animationIterationCount: 'infinite',
            }}
            onClick={() => { window.location.reload(true) }} // should modify later
        >
            <div

                className="blockFont"
                style={{
                    width: '75%', // 78 3:26
                    height: '75%', // 75 3: 25
                    color: 'white',

                    backgroundColor: 'royalblue',

                    border: 'solid ghostwhite 4px',
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
            >
                <div
                    id="baseball"
                >
                    &#x21bb;
                </div>
            </div>
        </Button >
    );

    const snackbarClose = (event, reason) => {
        if (reason === "clickaway") {
            // setState({ snackOn: false })
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
                // sx={
                //     (state.row < 3 ?
                //         {
                //             top: "70vh",
                //             height: "10vh",
                //             marginLeft: "0vw",
                //             paddingTop: '-50%',
                //             zIndex: 5,
                //             // border: 'solid black 1px',
                //         } : {
                //             top: "11vh",
                //             height: "11vh",
                //             marginLeft: "18%",
                //             zIndex: 5,
                //         })
                // }
                style={
                    !state.gameOver ?
                        {
                            top: "65vh",
                            height: "10vh",
                            marginLeft: "20vw",
                            paddingTop: '-50%',
                            zIndex: 5,
                            width: "60%",
                        } : {
                            top: "65vh",
                            height: "10vh",
                            marginLeft: "20vw",
                            paddingTop: '-50%',
                            zIndex: 5,
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
                                marginLeft: '10%',
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
                                // border: 'solid white 2px',l                         3                3              3    2        3   2              3            3     2           3    
                            }}
                        >
                            {state.snack}
                        </Typography></div>
                }
                autoHideDuration={state.gameOver === false ? 2560 : 6000}
                onClose={snackbarClose}
            />
        </div>
    );
};
export default Numbrio;