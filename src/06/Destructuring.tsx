import React, {useState} from 'react';
import {ManType2} from "./destructuring.test";

type PropsType2 = {
    title: string,
    man: ManType2
    food: Array<string>
    car: {model: string}
}

function useDmState(m: string) {
    return [m, function (){}]
}

export const ManComponent: React.FC<PropsType2> = ({title, man, ...props}) => {

    const [message, setMessage] = useDmState('Hello')

    return <div>
        <h1>{title}</h1>
        <hr/>
        <div>
            {man.name}
        </div>
        <div>
            {props.car.model}
        </div>
    </div>
}