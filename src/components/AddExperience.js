import React from "react";

export default function AddExperience(props) {

    const { handleOnChange, handleBackAddinghExp, handleCancelAddingExp, handleContinue, handleOnSave, handleResponsb, jobInfoLeft, jobResponsbLeft, convertToBullets, convertToText, newRespsb } = props;

    return (
        <div className="add-experience-container">
            <div className="add-experience-window">
                <div style={{ left: jobInfoLeft }} id="jobInfoLeft" className="slide add-job-info">
                    <p className="add-experience">Add Experience</p>
                    <form onSubmit={(e) => e.preventDefault()} htmlFor="expForm" action="">
                        <label htmlFor="">
                            <p>Job Title</p>
                            <input required onChange={handleOnChange} type="text" name="expForm" id="jobTitle" />
                        </label>
                        <label htmlFor="">
                            <p>Employer</p>
                            <input onChange={handleOnChange} type="text" name="employer" id="employer" />
                        </label>
                        <label htmlFor="">
                            <p>Country</p>
                            <input onChange={handleOnChange} type="text" name="jobCountry" id="jobCountry" />
                        </label>
                        <label htmlFor="">
                            <p>City</p>
                            <input onChange={handleOnChange} type="text" name="jobCity" id="jobCity" />
                        </label>
                        <label htmlFor="">
                            <p>Start date</p>
                            <input onChange={handleOnChange} type="date" name="jobStartDate" id="startDate" />
                        </label>
                        <label htmlFor="">
                            <p>End date</p>
                            <input onChange={handleOnChange} type="date" name="jobEndDate" id="endDate" />
                        </label>
                        <div className="add-experience-btn-controls">
                            <button onClick={handleCancelAddingExp}>cancel</button>
                            <label htmlFor="expForm">
                                <input type="submit" onClick={handleContinue} value={"continue"} />
                            </label>
                        </div>
                    </form>
                </div>
                <div style={{ left: jobResponsbLeft }} id="jobResponsbLeft" className="slide add-job-responsibilities">
                    <p>Add job description/responsibilities</p>
                    <form onSubmit={handleOnSave} action="">
                        <div className="job-resp-textarea-container">
                            <div className="textarea-editing-controls">
                                <button onClick={convertToBullets}>Bullet points</button>
                                <button onClick={convertToText}>Text</button>
                            </div>
                            <textarea onChange={handleResponsb} value={newRespsb} name="responsb" id="responsb" cols="50" rows="30">
                            </textarea>
                        </div>
                        <div className="add-experience-btn-controls">
                            <label htmlFor="expForm">
                                <input onClick={handleBackAddinghExp} type="button" name="expForm" id="" value={"back"} />
                            </label>
                            <label htmlFor="expForm">
                                <input type="submit" value={"submit"} />
                            </label>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )

}