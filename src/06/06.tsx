import React, {MouseEvent} from 'react';

/*const callback = () => {
    alert('hey')
}

setTimeout(callback, 1000)*/


export const User = () => {
    const deleteUser = (event: MouseEvent<HTMLButtonElement>) => {
        alert('delete')

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

    return <div>
        <textarea onChange={onNameChanged}
                  onBlur={focusLocsHandler}>
            Myr-myr</textarea>
        <input/>
        <button onClick={deleteUser}>delete</button>
        <button onClick={saveUser}>save</button>
    </div>
}