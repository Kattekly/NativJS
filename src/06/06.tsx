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
const onNameChanged = () => {
    console.log('name')
}
    return <div> <textarea onChange={onNameChanged}> Myr-myr</textarea>

        <div onClick={deleteUser}>delete</div>
        <div onClick={saveUser}>save</div>
    </div>
}