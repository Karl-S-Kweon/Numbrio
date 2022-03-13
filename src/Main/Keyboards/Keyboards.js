import '../../App.css';
import React, {  } from 'react';
import KeyRow from './keyRow'

const Keyboards = (props) => {
    // const initialState = {
    //     data: "",
    // };

    // const reducer = (state, newState) => ({ ...state, ...newState });
    // const [state, setState] = useReducer(reducer, initialState);

    const sendKeyData = (msg) => {
        // console.log("keyboards, sendKeyData")
        props.getFromChild(msg);        
    };

    const msgFromChild = (msg) => {
        // console.log("keyboards, msgFromChild")
        // setState({ data: msg });
        // props.data[1] = [];
        // console.log(props.pushToChild[1])
        sendKeyData(msg)
    };
    // console.log("Keyboards - render")
    return (
        <>
            <div style={{
                // box size & space control
                width: '100vw',
                height: '8vh',
                left: '50%',
                top: '91.5%',
                position: 'absolute',
                marginTop: '-8vh', // half of height
                marginLeft: '-50vw', // half of width
                // padding: '0px',

                // content alignment
                justifyContent: "center",
                alignItems: "center",
                textAlign: "center",

                // Border Line
                // border: "solid",
                // borderColor: 'orange',
                // borderWidth: '1px',
            }}
            // Separate Component => [ Enter ][ 7 8 9 0 ][ Del ]
            >
                <KeyRow
                    getFromChild={msgFromChild}
                    keyRange={[1, 2, 3, 4, 5, 6]}
                    data={props.data}
                    row={props.row}
                />
            </div>
            <div style={{
                // box size & space control
                width: '100vw',
                height: '8vh',
                left: '50%',
                top: '99%',
                position: 'absolute',
                marginTop: '-8vh', // half of height
                marginLeft: '-50vw', // half of width
                // padding: '0px 0px',

                // content alignment
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                textAlign: "center",

                // Border Line
                // border: "solid",
                // borderColor: 'orange',
                // borderWidth: '1px',
            }}
            // Separate Component => [ Enter ][ 7 8 9 0 ][ Del ]
            >
                <KeyRow
                    getFromChild={msgFromChild}
                    keyRange={["Enter"]}
                    data={props.data}
                    row={props.row}
                />
                <KeyRow
                    getFromChild={msgFromChild}
                    keyRange={[7, 8, 9, 0]}
                    data={props.data}
                    row={props.row}
                />
                <KeyRow
                    getFromChild={msgFromChild}
                    keyRange={["Del"]}
                    data={props.data}
                    row={props.row}
                />
            </div>
        </>
    )
};

export default Keyboards;