import React, { useState } from "react";

export default function AddEducationAndTraining(props) {
    let element;

    const {
        handleCancel,
        addEduState,
        newEduEntryOnChange,
        handleSubmit,
    } = props;


    if (addEduState.addEdu) {
        element =
            (
                <div className="add-education-container">
                    <div className="add-education-window">
                        <div className="add-edu-info">
                            <p className="add-education">Add Education</p>
                            <form className="edu-form" onSubmit={handleSubmit} htmlFor="eduForm" action="">
                                <label htmlFor="">
                                    <p>School name</p>
                                    <input onChange={newEduEntryOnChange} required type="text" name="schoolName" id="schoolName" />
                                </label>
                                <label htmlFor="">
                                    <p>Degree</p>
                                    <input onChange={newEduEntryOnChange} type="text" name="degree" id="degree" />
                                </label>
                                <label htmlFor="">
                                    <p>Location</p>
                                    <input onChange={newEduEntryOnChange} type="text" name="schoolLocation" id="schoolLocation" />
                                </label>
                                <label htmlFor="">
                                    <p>Field</p>
                                    <input onChange={newEduEntryOnChange} type="text" name="field" id="field" />
                                </label>
                                <label htmlFor="">
                                    <p>Graduation Date</p>
                                    <input onChange={newEduEntryOnChange} type="date" name="gradDate" id="gradDate" />
                                </label>
                                <label htmlFor="">
                                    <p>I'm still enrolled</p>
                                    <input onChange={newEduEntryOnChange} type="checkbox" name="stillEnrolled" id="stillEnrolled" />
                                </label>
                                <div className="add-education-btn-controls">
                                    <button onClick={handleCancel}>cancel</button>
                                    <label htmlFor="eduForm">
                                        <input type="submit" value={"Save"} />
                                    </label>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            )
    }

    return (element);
}