import React from "react";
import { useState } from "react";

export default function EditExperience(props) {
    const [slidePositions, setSlidePositions] = useState({
        left: "0%",
        right: "100%",
    });

    const handleSlideMovementRight = (e) => {
        setSlidePositions({
            ...slidePositions,
            left: "-100%",
            right: "0%"
        });
    };

    const handleSlideMovementLeft = (e) => {
        setSlidePositions({
            ...slidePositions,
            left: "0%",
            right: "100%",
        });
    };

    const {
        handleEditOnChange,
        editExpEntry,
        // editResponsibilities,
        editRespb,
        handleEditOnChangeResponsb,
        handleEditOnChangeResponsibilities,
        handleCancelEditExp,
        convertToBullets,
        convertToText,
        handleSubmitEdit,
    } = props;

    return (
        <div className="edit-experience-container">
            <div className="add-experience-window">
                <div style={{ left: slidePositions.left }} id="jobInfoLeft" className="slide add-job-info">
                    <p className="add-experience">Edit Experience</p>
                    <form onSubmit={(e) => e.preventDefault()} htmlFor="expForm" action="">
                        <label htmlFor="">
                            <p>Job Title</p>
                            <input required onChange={handleEditOnChange}
                                value={editExpEntry.jobTitle} type="text" name="jobTitle" id="jobTitle" />
                        </label>
                        <label htmlFor="">
                            <p>Employer</p>
                            <input onChange={handleEditOnChange} value={editExpEntry.employer} type="text" name="employer" id="employer" />
                        </label>
                        <label htmlFor="">
                            <p>Country</p>
                            <input onChange={handleEditOnChange} value={editExpEntry.jobCountry} type="text" name="jobCountry" id="jobCountry" />
                        </label>
                        <label htmlFor="">
                            <p>City</p>
                            <input onChange={handleEditOnChange} value={editExpEntry.jobCity} type="text" name="jobCity" id="jobCity" />
                        </label>
                        <label htmlFor="">
                            <p>Start date</p>
                            <input onChange={handleEditOnChange} value={editExpEntry.startDate} type="date" name="jobStartDate" id="startDate" />
                        </label>
                        <label htmlFor="">
                            <p>End date</p>
                            <input onChange={handleEditOnChange} value={editExpEntry.endDate} type="date" name="jobEndDate" id="endDate" />
                        </label>
                        <div className="add-experience-btn-controls">
                            <button onClick={handleCancelEditExp} >cancel</button>
                            <label htmlFor="expForm">
                                <input type="submit" onClick={handleSlideMovementRight} value={"continue"} />
                            </label>
                        </div>
                    </form>
                </div>
                <div style={{ left: slidePositions.right }} id="jobResponsbLeft" className="slide add-job-responsibilities">
                    <p>Edit job description/responsibilities</p>
                    <form onSubmit={(e) => e.preventDefault()} action="">
                        <div className="job-resp-textarea-container">
                            <div className="textarea-editing-controls">
                                <button onClick={convertToBullets}>Bullet points</button>
                                <button onClick={convertToText}>Text</button>
                            </div>
                            <textarea onChange={handleEditOnChange} value={editExpEntry.responsibilities} id="responsb" name="responsibilities" cols="50" rows="30">
                            </textarea>
                        </div>
                        <div className="add-experience-btn-controls">
                            <label htmlFor="expForm">
                                <input onClick={handleSlideMovementLeft} type="button" name="expForm" id="" value={"back"} />
                            </label>
                            <label htmlFor="expForm">
                                <input onClick={(e) => handleSubmitEdit(e, editExpEntry)} type="submit" value={"Save"} />
                            </label>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )

}