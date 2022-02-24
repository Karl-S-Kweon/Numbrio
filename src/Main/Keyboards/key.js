import '../../App.css';
import React from 'react';
import { ListItem } from "@material-ui/core";

const Key = (props) => {
    // console.log(props)

    const senKeyData = () => {
        // console.log(props.value)
        props.getFromChild(props.value);
    };

    // dynamic style values
    var width;
    
    if (typeof (props.value) === typeof (1)) {
        width = "14vw";
    }
    else {
        width = (props.value === "Enter" ? "22%" : "18%");
    }

    return (
        <div
            style={{
                height: '100%',
                width: width,
                
                // Border Line
                borderStyle: 'solid',
                borderColor: 'grey',
                borderRadius: '8%',
                borderWidth: '1px',
                
                // 
                margin: '0px 3px'
            }}
        >
            <div
                className="keyFont"
                onClick={senKeyData}
            >
                {props.value}
            </div>
        </div>
    )
};
export default Key;