import React, { Component } from "react";
import "../styles/EducationAndTraining.scss"


class EducationAndTraining extends Component{
    constructor(props){
        super(props)
        this.state={}
    }

    render(){
        return(
            <section className="education-training-container">
                <div className="left-education-training">
                    <p>Education & Training</p>
                </div>
            </section>
        )
    }
}

export default EducationAndTraining;