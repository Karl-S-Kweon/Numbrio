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
        <div
            style={{
                width: '100%',
                height: '94%',

                // content alignment
                display: 'flex',
                flexDirection:'column',
                justifyContent: "center",
                alignItems: "center",
                textAlign: "center",
                
                // Border Line
                // border: "solid orange 2px",

                //
                padding :'0.1rem 0',
                margin: '0',
            }}
        >
            < KeyRow
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
        </div>
    )
};

export default Keyboards;