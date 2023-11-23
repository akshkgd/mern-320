function Users(props){
    return(
        <div className="users">
            <div>{props.name}</div>
            <div>{props.email}</div>

        </div>
    )
}

export default Users;