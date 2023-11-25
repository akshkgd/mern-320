function Item(props){
    return(
        <div className={props.status== true ? "completed" : "card"}>
            <h4>{props.title}</h4>
            <p>{props.desc}</p>
        </div>
    )
}

export default Item;

// conditional rend: depending on a condition we can decide what and how will be visible