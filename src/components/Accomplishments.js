import React, {Component} from "react";
import "../styles/Accomplishments.scss"

class Accomplishments extends Component{
    constructor(props){
        super(props)
        this.state = {}
    }

    render(){
        return(
            <section className="accomplishments-container">
                <div className="accomplishments-left">
                    <p>Accomplishments</p>
                </div>
            </section>
        )
    }
}

export default Accomplishments;
