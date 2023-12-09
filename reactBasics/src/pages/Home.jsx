let counter = 0;
import { useState } from "react";
function Home(){
    let [counter, updateCounter] = useState(0)
    function incrementHandler(){
        updateCounter(counter + 1)
    }
    return(
        <div className="home-container">
            <h2>Understand the useState hook! {counter} </h2>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatum unde repudiandae culpa!</p>
            <button className="btn" onClick={incrementHandler}>Increment Counter</button>
        </div>
    )
}

export default Home;