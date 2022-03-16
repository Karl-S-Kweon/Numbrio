import '../../App.css';
import React, { } from 'react'; // useReducer 
// import { Snackbar } from "@material-ui/core";
import { List } from "@material-ui/core";
import Block from './Block'

const BlockRow = (props) => {
    
    // block quantity
    let index = [0, 1, 2, 3];

    const sendParentSomeData = () => {
        props.fromChild('');
    };

    const msgFromChild = (msg) => {
        // sendParentSomeData()
    };
    
    // make this under if-else for 'Enter'
    let Blocks = index.map((idx) => (
        <Block value={props.value[idx]} css={props.value[idx] !== undefined ? ['dimgrey', 'pulse'] : ['darkgrey']} key={idx} fromChild={msgFromChild} />
    ));

    return (
        <List
            style={{
                // this box's width/height
                width: '100%',
                height: '11%',
                // rem: equals to the font size of html (most browsers has defualt 16 px)
                // em: functions similar to vw or vh, child inherits its parents size. 
                //     default 16px -> p { 0.75 em } _ 12x -> c { 0.75 em} _ 9 px 
                //      to Keep size, p {0.75 em } => c { 1 em }

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
                marginBottom: props.marginBtm,
            }}
        >
            {Blocks}
        </List>

    )
};

export default BlockRow;