import '../../App.css';
import React, { } from 'react'; // useReducer 
// import { Snackbar } from "@material-ui/core";
import { List } from "@material-ui/core";
import Block from './Block'

const BlockRow = (props) => {
    // const initialState = {
    //     data: "",
    //     status: false,
    // };

    // const reducer = (state, newState) => ({ ...state, ...newState });
    // const [state, setState] = useReducer(reducer, initialState);

    // const sendKeyData = (event, reason) => {

    //     props.getFromChild(state.data);

    //     if (reason === "clickaway") {
    //         return;
    //     }
    //     setState({ status: false });
    // };

    // const msgFromChild = (msg) => {
    //     setState({ data: msg, status: true });
    //     // console.log(state.data)
    // };

    let index = [0, 1, 2, 3];

    // let css = {
    //     borderColor: 'grey',
    //     borderWidth: '1px'
    // }

    const sendParentSomeData = () => {
        props.fromChild('');
    };

    const msgFromChild = (msg) => {
        // console.log("In keyRow, msgFromChild", msg[1])

        // console.log(msg)
        // if(msg !== 'Del') {
        //     props.data[1] = [];
        // }
        // console.log(props.data[1])
        // props.data[1] = [];
        sendParentSomeData()
        // setState({animation: msg[1]})
    };

    // console.log(props.value)
    // make this under if-else for 'Enter'
    let Blocks = index.map((idx) => (
        <Block value={props.value[idx]} css={props.value[idx] !== undefined ? ['dimgrey', 'pulse'] : ['darkgrey']} key={idx} fromChild={msgFromChild} />
        // : <Block value={props.value[idx]} css={['darkgrey']} key={idx} />
        // getFromChild={msgFromChild}
    ));
        
    return (
        <List
            style={{
                // this box's width/height
                width: '100%',
                height: '5rem',

                // border line
                // borderStyle: 'solid',
                // borderColor: 'pink',
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
        // <div
        //     style={{
        //         // this box's width/height
        //         width: '100vw',
        //         height: '16%',

        //         // border line
        //         // borderStyle: 'solid',
        //         // borderColor: 'red',
        //         // borderWidth: '1px',

        //         // content alignment
        //         display: "flex",
        //         justifyContent: "center",
        //         alignItems: "center",

        //         // box space control
        //         // padding: '0px',
        //         margin: '1px 0px'
        //     }}
        // >

        //     {/* <Snackbar
        //         open={state.status}
        //         message={state.data}
        //         autoHideDuration={1}
        //         onClose={sendKeyData}
        //     /> */}
        // </div>
    )
};

export default BlockRow;