import React, { useState } from "react";
import uniqid from "uniqid";
import "../styles/Accomplishments.scss"
import EditAccomplishments from "./EditAccomplishments";

export default function Accomplishments() {
    let element;
    const [state, setState] = useState({
        input: false,
        accomplishments: [],
    });

    const [accomplishment, setAccomplishment] = useState({
        accomplishmentText: "",
        id: uniqid(),
    });

    const handleEdit = () => {
        setState({
            ...state,
            input: true,
        });
    };

    const handleBack = () => {
        setState({
            ...state,
            input: false,
        });
    };

    const handleOnChange = (e) => {
        setAccomplishment({
            ...accomplishment,
            accomplishmentText: e.target.value,
            id: accomplishment.id,
        });
    };

    const handleAddAccomplishment = (e) => {
        e.preventDefault();
        const currInput = accomplishment;

        setState({
            ...state,
            accomplishments: state.accomplishments.concat(currInput),
        });

        setAccomplishment({
            ...accomplishment,
            accomplishmentText: "",
            id: uniqid(),
        })
    };

    const handleDeleteAccomplishment = (e, id) => {
        const currAccomplishments = state.accomplishments;
        const filteredAccomplishments = currAccomplishments.filter(acc => {
             return acc.id !== id;
        });


        setState({
            ...state,
            accomplishments: filteredAccomplishments,
        });
    };

    if (state.input) {
        element =
            <EditAccomplishments
                handleBack={handleBack}
                state={state}
                handleOnChange={handleOnChange}
                handleAddAccomplishment={handleAddAccomplishment}
                accomplishment={accomplishment}
                handleDeleteAccomplishment={handleDeleteAccomplishment}
            />
    } else {
        element = (
            <div onClick={handleEdit} className="overlay">
                <section className="accomplishments-container">
                    <div className="accomplishments-left">
                        <span>Accomplishments</span>
                    </div>
                    <div className="accomplishments-right">
                        <ul>
                            {state.accomplishments.map(acc => {
                                return <li key={acc.id} >{acc.accomplishmentText}</li>
                            })}
                        </ul>
                    </div>
                </section>
            </div>

        )
    }
    return (
        <section className="accomplishments-section">
            {element}
        </section>
    )
}

