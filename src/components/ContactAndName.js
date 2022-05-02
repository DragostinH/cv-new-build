import React, { Component } from "react";
import "./ContactAndName.scss"

class ContactAndName extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        const { handleName, lastName } = this.props
        console.log(this.props);
        return (
            <div className="contact-info">
                <div className="name-logo">
                    <div className="box">
                        <span>D</span>
                        <div className="separator"></div>
                        <span>H</span>
                    </div>
                </div>
                <div className="info-container">
                    if(){
                    // <h1 onClick={handleName}>dragostin hristov</h1>
                    // <div className="info">
                    //     <span>dragostin.hristov@gmail.com</span>
                    //     <span>+44(0)75635335040</span>
                    //     <span>Bulgaria, 1330 Sofia</span>
                    // </div>

                    }
                </div>
            </div>
        )
    }
}

export default ContactAndName;