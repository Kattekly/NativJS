import React from 'react';
import {ManType2} from "./destructuring.test";

type PropsType2 = {
    title: string,
    man: ManType2
}

export const ManComponent: React.FC<PropsType2> = (props) => {
    return <div>
        <h1>{props.title}</h1>
        <hr/>
        <div>
            {props.man.name}
        </div>
    </div>
}