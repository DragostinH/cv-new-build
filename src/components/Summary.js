import React from "react";
import "../styles/Summary.scss"

export default function Summary() {
    let element;

    const [state, setState] = React.useState(
        {
            input: false,
            summary: "Motivated Front-end programmer seeking to build upon my current skillset and gain hands-on experience in the field. Recognized for outstanding achievements in leadership, customer relations and time management.",
        }

    )


    const handleSubmit = (e) => {
        e.preventDefault();
        setState({
            ...state,
            input: false,
        })
    }

    const handleOnChange = (e) => {
        setState({
            ...state,
            summary: e.target.value,
        });
    }

    const handleOnClick = () => {
        setState({
            ...state,
            input: true,
        })
    }


    if (state.input) {
        element =
            <div className="edit-summary-page">
                <form onSubmit={handleSubmit} action="">
                    <textarea onChange={handleOnChange} name="summary" value={state.summary} maxLength={350} id="summary" cols="30" rows="10">
                    </textarea>
                    <input type="submit" name="submit-summary" id="submit-summary" />
                </form>
            </div>

    } else {
        element =
            <div onClick={handleOnClick} className="overlay">
                <div className="summary-container">
                    <div className="left-summary">
                        <span>Summary</span>
                    </div>
                    <div className="summary">
                        <div className="right-summary">
                            <span>{state.summary}</span>
                        </div>
                    </div>
                </div>
            </div>

    }
    return (
        <section className="summary-section">{element}</section>
    )
}