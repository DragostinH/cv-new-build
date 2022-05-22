import React, { useState } from "react";
import "../styles/Summary.scss"
import EditSummary from "./EditSummary";

export default function Summary() {
    let element;

    const [state, setState] = useState(
        {
            input: false,
            summary: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui repellat sint ullam. Pariatur aut accusantium, perferendis minus consequatur incidunt suscipit officiis voluptates sit, nam deleniti debitis ab eos provident facere!",
        }
    );

    const [editState, setEditState] = useState({
        summary: "",
    })


    const handleSubmit = (e) => {
        e.preventDefault();
        setState({
            ...state,
            input: false,
            summary: editState.summary,
        });
    };

    const handleBack = () => {
        setState({
            ...state,
            input: false,
        })
    }

    const handleOnChange = (e) => {
        setEditState({
            ...editState,
            summary: e.target.value,
        });
    };

    const handleEditSummary = () => {
        setState({
            ...state,
            input: true,
        });

        setEditState({
            ...editState,
            summary: state.summary,
        });
    };


    if (state.input) {
        element =
            <EditSummary
                editState={editState}
                handleBack={handleBack}
                handleOnChange={handleOnChange}
                handleSubmit={handleSubmit}
            />
    } else {
        element =
            <div onClick={handleEditSummary} className="overlay">
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