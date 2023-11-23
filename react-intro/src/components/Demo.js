function Demo(props){
    function foodOrderHandler(){
        console.log(props.title)
        if(props.pricing> 199){
            console.log('congratulations!! No delivery charges addded!')
        }
        else{
            console.log('Rs 40 delivery charges addded!')
            console.log('Final Price',  props.pricing + 40)

        }
    }
    return(
        <div className="card" onClick={foodOrderHandler}>
            <div className="card-header">
                <img className="card-img" src={"https://source.unsplash.com/1600x1000/?"+props.img}/>
                <div className={props.ratings > 4.4 ? "best" : "d-none"}>Best Seller</div>
            </div>
            <h3>{props.title}</h3>
            <p className="pricing">₹ <span className="bold">{props.pricing}</span> for two persons</p>
            <p className="desc">{props.desc}</p>
        </div>
    )
}
export default Demo;