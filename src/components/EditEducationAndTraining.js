import React, { useState } from "react";
import AddEducationAndTraining from "./AddEducationAndTraining";

export default function EditEducationAndTraining(props) {
    const {
        handleBack,
        state,
        convertDates,
        handleOnChange,
        handleAddingNewEdu
    } = props;

    const [addEduState, setAddEduState] = useState({
        addEdu: false,
    });

    const handleAddEdu = () => {
        setAddEduState({
            ...addEduState,
            addEdu: true,
        });
    };

    const handleCancelAddingEdu = () => {
        setAddEduState({
            ...addEduState,
            addEdu: false,
        });
    };

    const handleSubmit = (e) => {
        handleAddingNewEdu(e)
        setAddEduState({
            ...addEduState,
            addEdu: false,
        });
    };



    return (
        <div className="edit-page">
            <aside>
                <header><p>CV Maker</p></header>
            </aside>
            <div className="entry-container">
                <h2 className="edit-page-headline">Edit/Add your experience</h2>
                <section className="education-training-edit-container">
                        {state.educations.map(edu => {
                            return (
                                <div key={edu.id} className="degree-info-container">
                                    <div className="degree-info-edit">
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
                </section>
                <div className="navigation-btns-edits">
                    <button onClick={handleBack}>Back</button>
                    <button onClick={handleAddEdu}>Add Education</button>
                </div>
            </div>
            <AddEducationAndTraining
                addEduState={addEduState}
                handleCancel={handleCancelAddingEdu}
                newEduEntryOnChange={handleOnChange}
                handleSubmit={handleSubmit}
            />
        </div>
    );
}