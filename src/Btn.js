import React from 'react';

import './Btn.scss';

function Btn(props) {
    return (
        <span className='btn btn-reset' onClick={props.resetBtn}>
            {props.title}
        </span>
    );
}

export default Btn;