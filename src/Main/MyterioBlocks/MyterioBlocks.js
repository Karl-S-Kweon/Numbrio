import '../../App.css';
import React, { useReducer, useEffect } from 'react';
import { List } from "@material-ui/core";
import BlockRow from './BlockRow'
import Answer from '../Answer/AnswerKey'
// import { Snackbar } from "@material-ui/core";

// let color = 'color: crimson'

const MysterioBox = (props) => {

    const initialState = {
        data: "",
        blockState: {
            backgroundColor: 'silver',
        },
        result: {
            strike: 0,
            ball: 0
        },
        msgOn: false,
        // msg: '',
        // gameOver: false
    };

    const reducer = (state, newState) => ({ ...state, ...newState });
    const [state, setState] = useReducer(reducer, initialState);

    useEffect(() => {
        // console.log('%cAnswer: ' + Answer, color)
        // console.log(props.data[props.row].length)
        // console.log('Key input: ' + props.message)
        getTrialResult()
    })
    let message = ''
    let gameOver = false
    const getTrialResult = () => {
        let check = Answer


        if (props.data[props.row].length === 4 && props.message === 'Enter') {
            // console.log('Check begins')
            let i = 0
            check.map((idx) => {

                if (idx === props.data[props.row][i]) {
                    setState({
                        result: {
                            strike: ++state.result.strike,
                            // ball: state.result.ball
                        },
                        // msg: `Result: ${state.result.strike} S, ${state.result.ball} B!`
                    });
                }
                else if (Answer.includes(props.data[props.row][i])) {
                    setState({
                        result: {
                            // strike: state.result.strike,
                            ball: ++state.result.ball
                        },
                        // msg: `Result: ${state.result.strike} S, ${state.result.ball} B!`
                    });
                }
                i++;
                return true
            })
            // console.log(`Result: ${state.result.strike} S, ${state.result.ball} B!`)
            // state.msgOn = true
            setState({
                result: {
                    strike: 0,
                    ball: 0
                },
                msgOn: true,
                // msg: ( state.result.strike === 4 ? `You won this game! The Answer is ${check}!!!` : 
                // (props.row === 7 ? `Oh, bad luck this time! The Answer is ${check}...` : `You got ${state.result.strike} S, ${state.result.ball} B !!`)),
                // gameOver: ((props.row === 7 || state.result.strike === 4) ? true : false )
            })
            message = (state.result.strike === 4 ? `You won the game! The Answer is ${check}!!!` :
                (props.row === 5 ? `Oh, bad luck this time...The Answer was ${check}...` : `You got ${state.result.strike} S, ${state.result.ball} B !!`))

            gameOver = ((props.row === 5 || state.result.strike === 4) ? true : false)

            sendToParent()
            // setState({ msgOn: true })
        }
    }

    const sendToParent = () => {
        props.getFromChild([message, gameOver])
    }

    const msgFromChild = (msg) => {

    }

    let index = [0, 1, 2, 3, 4, 5]; // , 6, 7, 8
    // console.log(props.row)
    let row = props.row
    let height = index.length * 16
    
    // let BlockRows = index.map((idx) => (
    //     idx === row ?
    //         (<BlockRow value={props.data[row]} key={idx} row={row} />)
    //         : (<BlockRow value={[]} key={idx} row={row} />)
    // ));
    // console.log(Answer)    
    let BlockRows = index.map((idx) => (
        (<BlockRow value={props.data[idx]} key={idx} row={row} fromChild={msgFromChild} />)
    ));

    return (<>
        <List
            style={{
                // this box's width/height
                width: '100vw',
                height: '100%',

                // border line
                // borderStyle: 'solid',
                // borderColor: 'orange',
                // borderWidth: '3px',

                // content alignment
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-start",
                alignItems: "center",

                // box space control
                // padding: '0px',
                // margin: '1px'
            }}
        >
            {BlockRows}

        </List>
        {/* <Snackbar
            open={state.msgOn}
            message={state.msg}
            autoHideDuration={1}
            onClose={snackbarClose}
        /> */}
    </>
    )
};

export default MysterioBox;
