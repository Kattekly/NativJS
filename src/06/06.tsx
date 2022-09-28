import React, {ChangeEvent, MouseEvent} from 'react';

/*const callback = () => {
    alert('hey')
}

setTimeout(callback, 1000)*/


export const User = () => {
    const deleteUser = (event: MouseEvent<HTMLButtonElement>) => {

        alert(event.currentTarget.name)
    }

    const saveUser = () => {
        alert('save')
    }
    const onNameChanged = () => {
        console.log('name')
    }
    const focusLocsHandler = () => {
        console.log('focys')
    }

    const onAgeChanged = (event: ChangeEvent<HTMLInputElement>) => {
        console.log('age ' + event.currentTarget.value)
    }

    return <div>
        <textarea onChange={onNameChanged}
                  onBlur={focusLocsHandler}>
            Myr-myr</textarea>
        <input onChange={onAgeChanged} type={'number'}/>
        <button name='del' onClick={deleteUser}>x</button>
        <button name='sss' onClick={deleteUser}>x</button>
    </div>
}