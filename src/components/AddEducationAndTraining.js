import React, { useState } from "react";

export default function AddEducationAndTraining(props) {
    let element;

    const {
        handleCancel,
        editEdu
    } = props;


    if (editEdu.addEdu) {
        element =
            (
                <div className="add-education-container">
                    <div className="add-education-window">
                        <div className="add-edu-info">
                            <p className="add-education">Add Education</p>
                            <form className="edu-form" onSubmit={(e) => e.preventDefault()} htmlFor="eduForm" action="">
                                <label htmlFor="">
                                    <p>Job Title</p>
                                    <input required type="text" name="eduForm" id="jobTitle" />
                                </label>
                                <label htmlFor="">
                                    <p>Employer</p>
                                    <input type="text" name="" id="employer" />
                                </label>
                                <label htmlFor="">
                                    <p>Country</p>
                                    <input type="text" name="" id="jobCountry" />
                                </label>
                                <label htmlFor="">
                                    <p>City</p>
                                    <input type="text" name="" id="jobCity" />
                                </label>
                                <label htmlFor="">
                                    <p>Start date</p>
                                    <input type="date" name="" id="startDate" />
                                </label>
                                <label htmlFor="">
                                    <p>End date</p>
                                    <input type="date" name="" id="endDate" />
                                </label>
                                <div className="add-education-btn-controls">
                                    <button onClick={handleCancel}>cancel</button>
                                    <label htmlFor="eduForm">
                                        <input type="submit" value={"continue"} />
                                    </label>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            )
    }

    return (
        <span>{element}</span>
    )
}