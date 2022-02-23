import '../../../../App.css';
import React from 'react';

const Key = ({ value }) => {
    if (!value) {
        return <button className="keybox" >/</button>;
    }

    return <button
        className="keybox" onClick={() => value}>{value}</button>;
};
export default Key;