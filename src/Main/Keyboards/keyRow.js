import '../../App.css';
import React, { useEffect } from 'react'; // , useReducer, useState 
import { ButtonGroup } from "@mui/material/";
import Key from './key'
import theme from '../../theme'

const KeyRow = (props) => {
    // const initialState = {
    //     color: true,
    //     animation: 'pulse'
    // };

    // const reducer = (state, newState) => ({ ...state, ...newState });
    // const [state, setState] = useReducer(reducer, initialState);

    useEffect(() => {
        // console.log("KeyRow - useEffect")
        // sendKeyData()
        // return props.data[1] = [];
        // state.color = false
        // setState({color: 'azure'})
        // keyboxes()
        // if(props.value === 'Del') {
        //     props.data[1] = ['Enter']
        // }
        // setBool(true)
    })

    const sendKeyData = (msg) => {
        // console.log("KeyRow - sendKeyData")
        props.getFromChild(msg);
        // setState({animation: ''})
        // props.data[1] = [];
        // setState({ status: false });
    };

    // const checkSpecialKeys = () => {
    //     if(props.data[1].includes("Enter") || props.data[1].includes("Del") ) {
    //         setState({color: true})
    //     }
    //     setState({color: false})
    // }
    // const sendKeyData = (event, reason) => {
    //     props.getFromChild(state.data);

    //     if (reason === "clickaway") {
    //         return;
    //     }
    //     setState({ status: false });
    // };

    const msgFromChild = (msg) => {
        // console.log("In keyRow, msgFromChild", msg[1])

        // console.log(msg)
        // if(msg !== 'Del') {
        //     props.data[1] = [];
        // }
        // console.log(props.data[1])
        // props.data[1] = [];
        sendKeyData(msg[0])
        // setState({animation: msg[1]})
    };

    let index = props.keyRange;
    let length = (index.length);
    
    let row = props.row !== undefined ? props.row : 0
    // console.log(length)
    // animation 을 스테이트로 받고, 그걸 셋 스테이트로 변경해보기 -> 효과 없음
    // 2/ // animation = { length > 0 ? 'pulse' : ''}
    let keyboxes = () => {
        if (props.data[row] !== undefined) {
            return (index.map(idx => (props.data[row].includes(idx) === true ?
                <Key getFromChild={msgFromChild} value={idx} key={idx} pointer={['none', 'dimgrey']} animation={'pulse'} length={length} /> :
                <Key getFromChild={msgFromChild} value={idx} key={idx} pointer={['auto', 'gainsboro']} length={length} />
            )))

        }
        // new sample
        /*
          (index.map(idx => if () {return <Key ... /> } else if () { return <Key .../> } ... )
        */
    };

    // let keyboxes = index.map(idx =>  {

    //     if(props.data[0].includes(idx) === true) {
    //         return <Key getFromChild={msgFromChild} value={idx} key={idx} pointer={['none', 'dimgrey']} animation={animation} length={length} />
    //     }
    //     if (props.data[1].includes(idx) === bool) {
    //         return <Key getFromChild={msgFromChild} value={idx} key={idx} pointer={['auto', 'gainsboro']} animation={animation} length={length} />
    //     }
    //     return <Key getFromChild={msgFromChild} value={idx} key={idx} pointer={['auto', 'gainsboro']} length={length} />
    // });

    let width;

    // if (props.keyRange.length > 5) {
    //     width = '100vw'
    // }
    // else if (props.keyRange.length > 2) {
    //     width = '60vw'
    // }
    // else if (props.keyRange.length === 1) {
    //     if (props.keyRange[0] === "Enter") {
    //         width = '24vw';
    //     }
    //     else {
    //         width = '15vw'
    //     }
    // }

    // console.log("KeyRow - render")
    return (
        <ButtonGroup
            // size="large"
            style={{
                // this box's width/height
                width: '100%',
                height: '50%',

                // border line
                // border: 'solid blue 1px',
                

                // content alignment
                display: 'flex',
                justifyContent: "center",
                alignItems: "center",

                // box space control
                // padding: '0px',
                margin: '0.1rem 0.05rem 0 0.05rem'
            }}
        >{
                keyboxes()
            }

        </ButtonGroup>
        // <div
        //     styles={{
        //         // this box's width/height
        //         width: '100vw',
        //         height: '100%',

        //         // border line
        //         borderStyle: 'solid',
        //         borderColor: 'red',
        //         borderWidth: '1px',

        //         // content alignment
        //         display: "flex",
        //         justifyContent: "center",
        //         alignItems: "center", // vertical

        //         // box space control
        //         // padding: '0px',
        //         // margin: '0px'
        //     }}
        // >
        //     <ButtonGroup
        //         // aria-label="small button group"
        //         style={{
        //             // this box's width/height
        //             width: '100%',
        //             height: '6vh',

        //             // border line
        //             borderStyle: 'solid',
        //             borderColor: 'blue',
        //             borderWidth: '1px',

        //             // content alignment
        //             display: 'flex',
        //             justifyContent: "center",
        //             alignItems: "center",

        //             // box space control
        //             // padding: '0px',
        //             margin: '1px 1px'
        //         }}
        //     >{
        //             keyboxes()
        //         }

        //     </ButtonGroup>
        // </div>
    )
};

export default KeyRow;