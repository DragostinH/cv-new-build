import React, { Component } from "react";
import "../styles/Summary.scss"

class Summary extends Component {
    constructor(props) {
        super(props)
        this.state = {
            summary: "Motivated Front-end programmer seeking to build upon my current skillset and gain hands-on experience in the field. Recognized for outstanding achievements in leadership, customer relations and time management.",
            input: false
        }
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.setState(st => {
            return st.input = false;
        })
    }

    handleOnChange = (e) => {
        this.setState(st => {
            return st.summary = e.target.value
        });
    }

    handleOnClick = () => {
        this.setState(st => {
            return st.input = true;
        })
    }


    render() {
        let element;
        if (this.state.input) {
            element =
                <div className="edit-summary-page">
                    <form onSubmit={this.handleSubmit} action="">
                        <textarea onChange={this.handleOnChange} name="summary" value={this.state.summary} maxLength={350} id="summary" cols="30" rows="10"></textarea>
                        <input type="submit" name="submit-summary" id="submit-summary" />
                    </form>
                </div>
        } else {
            element =
                <div className="summary">
                    <div className="right-summary">
                        <span>{this.state.summary}</span>
                    </div>
                </div>
        }

        return (
            <div onClick={this.handleOnClick} className="overlay">
                <div className="summary-container">
                    <div className="left-summary">
                        <span>Summary</span>
                    </div>
                    {element}
                </div>
            </div>
        )
    }
}
export default Summary;