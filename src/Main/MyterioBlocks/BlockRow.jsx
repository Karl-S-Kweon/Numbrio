import '../../App.css';
import React, { useReducer, useEffect } from 'react'; // useReducer 
// import { Snackbar } from "@material-ui/core";
import { List, Grow } from "@mui/material/";
import Block from './Block'
// import Answer from '../Answer/AnswerKey'

const BlockRow = (props) => {

    const initialState = {
        borderColor: 'darkgrey',
        animation: '',
        backgroundColor: [],
        _id: '',
        result: {
            strike: 0,
            ball: 0
        },
        msgOn: false,
        transition: false,
    };

    const reducer = (state, newState) => ({ ...state, ...newState });
    const [state, setState] = useReducer(reducer, initialState);
    let i = 0;

    useEffect(() => {
        // console.log('useEffect()')
        getTrialResult();
        // console.log('how many times BlockRow called? ' + i++)
    })

    const handleGrow = () => {
        setState({ transition: (prev) => !prev })
    }

    // block quantity
    let index = [0, 1, 2, 3];

    const sendToParent = (msg) => {
        props.getFromChild([message, gameOver])
        // handleGrow()
    };

    const msgFromChild = (msg) => {
        // sendToParent(msg)
    };

    // console.log(props.message)

    let message = ''
    let gameOver = false
    let backgroundColor = 'pink'

    const getTrialResult = () => {
        let check = props.code
        // console.log(check)
        if (props.data !== undefined && props.data.length === 4 && props.message === 'Enter') {
            // console.log('Check begins')
            let i = 0
            check.map((idx) => {
                if (idx === props.data[i]) {
                    setState({
                        result: {
                            strike: ++state.result.strike,
                            // ball: state.result.ball
                        },
                        // msg: `Result: ${state.result.strike} S, ${state.result.ball} B!`
                    });
                    state.backgroundColor[i] = 'red'
                    // backgroundColor='red'
                }
                else if (check.includes(props.data[i])) {
                    setState({
                        result: {
                            // strike: state.result.strike,
                            ball: ++state.result.ball
                        },
                        // msg: `Result: ${state.result.strike} S, ${state.result.ball} B!`
                        // backgroundColor: 'green'
                    });
                    state.backgroundColor[i] = 'green'
                }
                else {
                    state.backgroundColor[i] = 'darkgrey'
                }

                setState({ _id: 'guideblock', transition: true})

                // if(i === 3) {
                //     setState({_id: 'guideblock'})
                //     state._id = 'guideblock'
                // }
                i++;

                return true
            })
            // console.log(`Result: ${state.result.strike} S, ${state.result.ball} B!`)
            // state.msgOn = true
            setState({
                result: {
                    strike: 0,
                    ball: 0,
                    // _id: 'guideblock'
                },
                msgOn: true,
                // msg: ( state.result.strike === 4 ? `You won this game! The Answer is ${check}!!!` : 
                // (props.row === 7 ? `Oh, bad luck this time! The Answer is ${check}...` : `You got ${state.result.strike} S, ${state.result.ball} B !!`)),
                // gameOver: ((props.row === 7 || state.result.strike === 4) ? true : false )
            })

            message = (state.result.strike === 4 ? `Congratulations! You won the game!` :
                (props.row === 4 ? `Oh, Nooo... The Answer was ${check}...` : `You got ${state.result.strike} S, ${state.result.ball} B !!`))

            gameOver = ((props.row === 4 || state.result.strike === 4) ? true : false)

            sendToParent()
            // setState({ msgOn: true })
        }
    }

    let borderColor = 'darkgrey';
    let animation = '';

    // make this under if-else for 'Enter'
    let Blocks = index.map((idx) => {
        // console.log(state._id)
        if (props.data[idx] !== undefined) {
            // setState({ borderColor: 'dimgrey', animation: 'pulse' })
            borderColor = 'dimgrey'
            animation = 'pulse'
        }
        else {
            // setState({ borderColor: 'darkgrey', animation: '' })
            borderColor = 'darkgrey';
            animation = '';
        }
        return (
            <Grow
                in={true}
                style={{ transformOrigin: '50 50 50' }}
                {...(state._id === 'guideblock' ? { timeout: (idx + 1) * 1600 } : {})}
                key={idx}
                // onChange={handleGrow}
            >
                <div>
                    <Block
                        value={props.data[idx]}
                        backgroundColor={state.backgroundColor[idx]}
                        borderColor={state.backgroundColor[idx] === undefined ? borderColor : state.backgroundColor[idx]}
                        animation={state._id === 'guideblock' ? '' : animation}
                        key={idx}
                        _id={state._id}
                    />
                </div>
            </Grow>
            // fromChild={msgFromChild}
        )
    });

    return (
        <List
            style={{
                // this box's width/height
                width: '100%',
                maxHeight: '7vh',
                height: '11%',
                // rem: equals to the font size of html (most browsers has defualt 16 px)
                // em: functions similar to vw or vh, child inherits its parents size. 
                //     default 16px -> p { 0.75 em } _ 12x -> c { 0.75 em} _ 9 px 
                //      to Keep size, p {0.75 em } => c { 1 em }

                // border line
                // border: 'solid pink 1px',
                
                // content alignment
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                
                // box space control
                paddingBottom: '0',
                marginBottom: props.marginBtm,
            }}

        >
            {/* {classBlocks} */}
            {Blocks}

        </List >

    )
};

export default BlockRow;