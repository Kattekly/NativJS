/*const callback = () => {
    alert('hey')
}

setTimeout(callback, 1000)*/


export const User = () => {
    const deleteUser = () => {
        alert('delete')
    }

    const saveUser = () => {
        alert('save')
    }

    return <div>Myr-myr
        <button onClick={deleteUser}>delete</button>
        <button onClick={saveUser}>save</button>
    </div>
}