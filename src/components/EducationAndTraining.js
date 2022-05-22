import { format } from "date-fns"
import uniqid from "uniqid";
import React, { useState } from "react";
import "../styles/EducationAndTraining.scss"
import EditEducationAndTraining from "./EditEducationAndTraining.js";


export default function EducationAndTraining() {
    let element;
    const [state, setState] = useState({
        input: false,
        educations: [
            {
                schoolName: "Glasgow Caledonian University",
                schoolLocation: "Glasgow",
                degree: "Bachelor Of Computer Science",
                field: "Programming",
                gradDate: "2015-02-29",
                stillEnrolled: false,
                id: uniqid(),
            },

        ],
    });

    const [editState, setEditState] = useState({
        schoolName: "",
        schoolLocation: "",
        degree: "",
        field: "",
        gradDate: "",
        stillEnrolled: false,
        id: uniqid(),

    });

    const [newEdu, setNewEdu] = useState({
        schoolName: "",
        schoolLocation: "",
        degree: "",
        field: "",
        gradDate: "",
        stillEnrolled: false,
        id: uniqid(),
    });

    const handleOnChange = (e) => {
        setNewEdu({
            ...newEdu,
            [e.target.name]: e.target.value,
            id: uniqid(),
        });
    };

    const handleAddingNewEdu = (e) => {
        e.preventDefault();
        setState({
            ...state,
            educations: state.educations.concat(newEdu),
        })
    }
    const handleBack = (e) => {
        setState({
            ...state,
            input: false,
        });
    };

    const viewEducationAndTraining = (e) => {
        setState({
            ...state,
            input: true,
        });
    };

    const convertDates = (e) => {
        const dateArr = e.split('-');
        return format(new Date(dateArr[0], dateArr[1] - 1, dateArr[2]), "MMM yyyy");
    }

    if (state.input) {
        element =
            <EditEducationAndTraining
                handleBack={handleBack}
                state={state}
                convertDates={convertDates}
                handleOnChange={handleOnChange}
                handleAddingNewEdu={handleAddingNewEdu}
            />
    } else {
        element =
            (<div onClick={viewEducationAndTraining} className="overlay">
                <section className="education-training-container">
                    <div className="left-education-training">
                        <span>Education & Training</span>
                    </div>
                    <div className="right-education-training">
                        {state.educations.map(edu => {
                            return (
                                <div key={uniqid()} className="education-training-entry">
                                    <div className="degree-info">
                                        <h4 className="degree-name">{edu.degree}</h4>
                                        <div className="uni-name-location-container">
                                            <span className="uni-name">{edu.schoolName}</span>
                                            <span>|</span>
                                            <span className="uni-location">{edu.schoolLocation}</span>
                                        </div>
                                    </div>
                                    <div className="graduation-info-container">
                                        <span>{convertDates(edu.gradDate)}</span>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </section>
            </div>)
    }


    return (
        <section className="education-and-training-section">
            {element}
        </section>
    )

}
