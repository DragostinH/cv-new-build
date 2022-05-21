import React, { useState } from "react";
import AddEducationAndTraining from "./AddEducationAndTraining";

export default function EditEducationAndTraining(props) {
    const [editEdu, setEditEdu] = useState({
        addEdu: false,
    });

    const handleAddEdu = () => {
        console.log('add')
        setEditEdu({
            ...editEdu,
            addEdu: true,
        });
    };

    const handleCancelAddingEdu = () => {
        console.log('cancel')
        setEditEdu({
            ...editEdu,
            addEdu: false,
        })
    }

    const {
        handleBack,
        latestEntries,
        convertDates,
    } = props;

    return (
        <div className="edit-page">
            <aside>
                <header><p>CV Maker</p></header>
            </aside>
            <div className="entry-container">
                <h2 className="edit-page-headline">Edit/Add your experience</h2>
                <section className="education-training-container">
                    <div className="left-education-training">
                        <span>Education & Training</span>
                    </div>
                    <div className="right-education-training">
                        {latestEntries.educations.map(edu => {
                            return (
                                <div className="degree-info-container">
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
                <div className="navigation-btns-edits">
                    <button onClick={handleBack}>Back</button>
                    <button onClick={handleAddEdu}>Add Education</button>
                </div>
            </div>
            <AddEducationAndTraining
                editEdu={editEdu}
                handleCancel={handleCancelAddingEdu}
            />
        </div>
    );
}