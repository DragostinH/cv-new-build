import React, {Component} from "react";
import "../styles/Accomplishments.scss"

class Accomplishments extends Component{
    constructor(props){
        super(props)
        this.state = {}
    }

    render(){
        return(
            <div className="overlay">
                <section className="accomplishments-container">
                    <div className="accomplishments-left">
                        <span>Accomplishments</span>
                    </div>
                </section>
            </div>
        )
    }
}

export default Accomplishments;
