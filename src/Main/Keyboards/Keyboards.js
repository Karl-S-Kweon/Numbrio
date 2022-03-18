import '../../App.css';
import React, { } from 'react';
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


    /// 2022 03-13 : 여기 부터 div 없애고 mui 사용 및 css 따로 적용 시켜 보기
    return (
        <>
            {/* <div style={{
                // box size & space control
                width: '100vw',
                height: '15vh',
                // left: '50%',
                // top: '90%',
                // position: 'absolute',
                // marginTop: '-5vh', // half of height
                // marginLeft: '-50vw', // half of width
                // padding: '0px',

                // content alignment
                // justifyContent: "flex-start",
                // alignItems: "center",
                // textAlign: "center",

                // Border Line
                // border: "solid",
                // borderColor: 'orange',
                // borderWidth: '2px',
            }}
            // Separate Component => [ Enter ][ 7 8 9 0 ][ Del ]
            >
                <KeyRow
                    getFromChild={msgFromChild}
                    keyRange={[1, 2, 3, 4, 5, 'Del']} // '\u2190'
                    data={props.data}
                    row={props.row}
                />
                <KeyRow
                    getFromChild={msgFromChild}
                    keyRange={[6, 7, 8, 9, 0, 'Enter']} // '\u21b5'
                    data={props.data}
                    row={props.row}
                />
            </div> */}
            <KeyRow
                getFromChild={msgFromChild}
                keyRange={[1, 2, 3, 4, 5, 'Del']} // '\u2190'
                data={props.data}
                row={props.row}
            />
            <KeyRow
                getFromChild={msgFromChild}
                keyRange={[6, 7, 8, 9, 0, 'Enter']} // '\u21b5'
                data={props.data}
                row={props.row}
            />
            {/* <div style={{
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
            > */}
            {/* <KeyRow
                    getFromChild={msgFromChild}
                    keyRange={["Enter", 7, 8, 9, 0, "Del"]}
                    data={props.data}
                    row={props.row}
                /> */}
            {/* <KeyRow
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
                /> */}
            {/* </div> */}
        </>
    )
};

export default Keyboards;