
function Users(){
    return(
        <>
        <div className="input-container">
        <input ref={nameInput} type="text" placeholder='Enter the name' />
        <input ref={emailInput} type="text" placeholder='Enter the email' />

        <button className="btn" onClick={submitHandler}>Split the bill</button>
      </div>
        </>
    )
}

export default Users;