import React, { useState } from "react";
import "../styles/ContactAndName.scss"
import EditContactAndName from "./EditContactAndName";

export default function ContactAndName() {
    let contactInfo;

    const [state, setState] = useState({
        input: false,
        firstName: "Drago",
        lastName: "Hristov",
        email: "dragostin.hristov@gmail.com",
        tel: "+44(0)7565335040",
        country: "Bulgaria",
        city: "Sofia",
        postCode: "1330"
    });

    const [editState, setEditState] = useState({
        firstName: "",
        lastName: "",
        email: "",
        tel: "",
        country: "",
        city: "",
        postCode: "",
    });


    const handleBack = () => {
        setState({
            ...state,
            input: false,
        });
    }

    const handleEdit = (e) => {
        setState({
            ...state,
            input: true,
        });

        setEditState({
            ...editState,
            firstName: state.firstName,
            lastName: state.lastName,
            email: state.email,
            tel: state.tel,
            country: state.country,
            city: state.city,
            postCode: state.postCode,
        })

    };

    const handleEditOnChange = (e) => {
        setEditState({
            ...editState,
            [e.target.name]: e.target.value,
        })
    }

    const handleEditSubmit = (e) => {
        const editedInfo = editState;

        setState({
            ...state,
            ...editedInfo,
            input: false,
        });
    }


    if (state.input) {
        contactInfo =
            <EditContactAndName
                editState={editState}
                handleEditOnChange={handleEditOnChange}
                handleBack={handleBack}
                handleEditSubmit={handleEditSubmit}
            />
    } else {
        contactInfo =
            <div onClick={handleEdit} className="overlay">
                <div className="contact-info">
                    <div className="name-logo">
                        <div className="box">
                            <span>{state.firstName.charAt(0)}</span>
                            <div className="separator"></div>
                            <span>{state.lastName.charAt(0)}</span>
                        </div>
                    </div>
                    <div className="info-container">
                        <div onClick={handleEdit} className="submitted-info">
                            <h1 className="person-name" onClick={handleEdit}>{state.firstName + " " + state.lastName}</h1>
                            <div className="info">
                                <span>{state.email}</span>
                                <span>{state.tel}</span>
                                <span>{state.country + " " + state.postCode + " " + state.city}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    }


    return (
        <section className="contact-and-name-section">{contactInfo}</section>
    )
}
