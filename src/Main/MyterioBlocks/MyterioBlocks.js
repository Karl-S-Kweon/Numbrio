import '../../App.css';
import React, { useReducer, useEffect } from 'react';
import { List } from "@material-ui/core";
import BlockRow from './BlockRow'
import Answer from '../Answer/AnswerKey'
// import { Snackbar } from "@material-ui/core";

let color = 'color: crimson'

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
        msg: ''
    };

    const reducer = (state, newState) => ({ ...state, ...newState });
    const [state, setState] = useReducer(reducer, initialState);

    useEffect(() => {
        // console.log('%cAnswer: ' + Answer, color)
        // console.log(props.data[props.row].length)
        // console.log('Key input: ' + props.message)
        getTrialResult()
    })

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
            })
            // console.log(`Result: ${state.result.strike} S, ${state.result.ball} B!`)
            // state.msgOn = true
            setState({
                result: {
                    strike: 0,
                    ball: 0
                },
                msgOn: true,
                msg: `Result: ${state.result.strike} S, ${state.result.ball} B !!`
            })            
            props.getFromChild(`Result: ${state.result.strike} S, ${state.result.ball} B !!`)
            // setState({ msgOn: true })
        }
    }

    const msgFromChild = (msg) => {

    }


    let index = [0, 1, 2, 3, 4, 5, 6];
    // console.log(props.row)
    let row = props.row


    // let BlockRows = index.map((idx) => (
    //     idx === row ?
    //         (<BlockRow value={props.data[row]} key={idx} row={row} />)
    //         : (<BlockRow value={[]} key={idx} row={row} />)
    // ));
    // console.log(Answer)    
    let BlockRows = index.map((idx) => (
        (<BlockRow value={props.data[idx]} key={idx} row={row} fromChild={msgFromChild} />)
    ));

    return (
        <div
            style={{
                // box size & space control
                width: '100%',
                height: '60%',
                left: '50%',
                top: '45%',
                position: 'absolute',
                marginTop: '-66%', // half of height
                marginLeft: '-50%', // half of width
                // padding: '0px 0px',

                // content alignment
                justifyContent: "center",
                alignItems: "center",
                textAlign: "center",

                // Border Line
                // border: "solid",
                // borderColor: 'red',
                // borderWidth: '1px',
            }}
        >
            <List
                style={{
                    // this box's width/height
                    width: '99vw',
                    height: '97%',

                    // border line
                    // borderStyle: 'solid',
                    // borderColor: 'blue',
                    // borderWidth: '1px',

                    // content alignment
                    display: "inline-block",
                    justifyContent: "center",
                    alignItems: "center",

                    // box space control
                    // padding: '0px',
                    // margin: '1px'
                }}
            >
                {BlockRows}
            </List>
            {/* {<Snackbar
                open={state.msgOn}
                message={state.msg}
                autoHideDuration={1}
                onClose={snackbarClose}
            />} */}
        </div>
    )
};

export default MysterioBox;
