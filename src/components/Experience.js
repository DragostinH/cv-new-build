import { format } from "date-fns";
import React, { useState } from "react";
import uniqid from "uniqid";
import "../styles/Experience.scss"
import AddExperience from "./AddExperience";
import EditExperience from "./EditExperience";

export default function Experience() {
    let expViewToggle;
    let addExpWindow;
    let editExpWindow;

    const [state, setState] = useState({
        input: false,
        addExp: false,
        experienceList: [],
    });

    const [newExpFormData, setNewExpFormData] = useState({
        jobTitle: "",
        employer: "",
        jobCountry: "",
        jobCity: "",
        startDate: "",
        endDate: "",
        currentJob: false,
        id: uniqid(),
    });

    const [jobResponsibilities, setJobResponsibilities] = useState({
        responsibilities: "",
    });

    const [styleData, setStyle] = useState({
        jobInfoLeft: "0%",
        jobResponsbLeft: "100%",
    });

    const [editState, setEditState] = useState({
        editExp: false,
        editExperienceList: [],
    })

    const [editExpEntry, setEditExpEntry] = useState({
        editExp: false,
        jobTitle: "",
        employer: "",
        jobCountry: "",
        jobCity: "",
        startDate: "",
        endDate: "",
        currentJob: false,
        id: ""
    });

    const [editResponsibilities, setEditResponsibilities] = useState({
        responsibilities: "",
    })

    // TODO: Add feature where you hide more than 3 rbilities and show them by clicking
    // ...see more btn.
    // const seeMoreToggle = () => {
    //     state.experienceList.forEach(exp => {
    //         exp.responsibilities.forEach(resp => {
    //             console.log(resp);
    //         })
    //     })
    // }

    // function toggleBetweenListOrText(state, listOrTextSwitch) {
    //     state.textOrList ?
    //         listOrTextSwitch =
    //         <textarea name="responsb" id="responsb" cols="30" rows="10">

    //         </textarea> :
    //         listOrTextSwitch =
    //         <label htmlFor="">
    //             <input type="text" name="" id="" />
    //         </label>;
    //     return listOrTextSwitch;
    // }

    const handleBack = () => {
        setState({
            ...state,
            input: false,
        });
    };

    const handleOnChange = (e) => {
        setNewExpFormData({
            ...newExpFormData,
            [e.target.id]: e.target.value,
            id: newExpFormData.id
        });
    };

    const handleOnSave = (e) => {
        e.preventDefault();
        let newExperience = newExpFormData;
        newExperience["responsibilities"] = jobResponsibilities.responsibilities;
        setState({
            ...state,
            experienceList: state.experienceList.concat(newExperience),
            addExp: false,
        });

        setEditState({
            ...editState,
            editExperienceList: editState.editExperienceList.concat(newExperience),
        });
    };

    const handleResponsb = (e) => {
        setJobResponsibilities({
            ...jobResponsibilities,
            responsibilities: e.target.value,
        });
    };

    const handleAddingExperience = () => {

        setState({
            ...state,
            addExp: true,
        });

        setNewExpFormData({
            ...newExpFormData,
            jobTitle: "",
            employer: "",
            jobCountry: "",
            jobCity: "",
            startDate: "",
            endDate: "",
            currentJob: false,
            id: uniqid(),
        });

        setStyle({
            ...styleData,
            jobInfoLeft: "0%",
            jobResponsbLeft: "100%",
        });

        setJobResponsibilities({
            ...jobResponsibilities,
            responsibilities: "",
        })
    };

    const handleCancelAddingExp = () => {
        setState({
            ...state,
            addExp: false,
        })

        setStyle({
            ...styleData,
            jobInfoLeft: "0%",
            jobResponsbLeft: "100%",
        })
    };

    const handleEditOnChange = (e) => {
        setEditExpEntry({
            ...editExpEntry,
            [e.target.name]: e.target.value,
        });

    };

    const handleEditOnChangeResponsibilities = (e) => {
        setEditResponsibilities({
            ...editResponsibilities,
            responsibilities: e.target.value,
        })
    }

    const handleEdit = (e, id) => {
        let expToEdit;
        state.experienceList.forEach(item => {
            if (item.id === id) {
                expToEdit = item;
                return;
            };
        });

        setEditExpEntry({
            ...editExpEntry,
            editExp: true,
            jobTitle: expToEdit.jobTitle,
            employer: expToEdit.employer,
            jobCountry: expToEdit.jobCountry,
            jobCity: expToEdit.jobCity,
            startDate: expToEdit.startDate,
            endDate: expToEdit.endDate,
            currentJob: false,
            responsibilities: expToEdit.responsibilities,
            id: expToEdit.id,
        });
    };

    const handleSubmitEdit = (e, expElement) => {
        let tempArr = state.experienceList;
        state.experienceList.forEach(expEntry => {
            if (expEntry.id === expElement.id) {
                let indx = tempArr.indexOf(expEntry);
                tempArr[indx] = editExpEntry;
                return;
            };
        });

        setState({
            ...state,
            experienceList: tempArr,
        });

        setEditExpEntry({
            ...editExpEntry,
            editExp: false,
        });
    };

    const handleCancelEditExp = () => {
        setEditExpEntry({
            ...editExpEntry,
            editExp: false,
        });
    };

    const handleRemoveExp = (e, id) => {

    };




    const showEditPage = () => {
        setState({
            ...state,
            input: true,
        })
    }

    const handleAddExpFormValidation = (e) => {
        if (newExpFormData.jobTitle !== "" &&
            newExpFormData.employer !== "" &&
            newExpFormData.jobCity !== "" &&
            newExpFormData.startDate !== "" &&
            newExpFormData.endDate !== "") {
            return true;
        };
    };



    const convertToBullets = (e) => {
        const currResp = newExpFormData.responsibilities;
        if (!Array.isArray(currResp)) {
            const splitByNewLine = currResp.split(/\r?\n/);

            setState({
                ...state,
                addExp: true,
            })

            setNewExpFormData({
                ...newExpFormData,
                responsibilities: splitByNewLine,
            });
        };
    };

    const convertToText = (e) => {
        let formResp = newExpFormData.responsibilities
        if (Array.isArray(formResp)) {
            setNewExpFormData({
                ...newExpFormData,
                responsibilities: formResp.join("\n"),
            });
        };
    };

    const convertDates = (e) => {
        const dateArr = e.split('-');
        return format(new Date(dateArr[0], dateArr[1] - 1, dateArr[2]), "MMM yyyy");
    }



    if (state.addExp) {
        addExpWindow =
            <AddExperience
                handleOnChange={handleOnChange}
                handleCancelAddingExp={handleCancelAddingExp}
                handleContinue={handleAddExpFormValidation}
                handleOnSave={handleOnSave}
                handleResponsb={handleResponsb}
                newExpFormData={newExpFormData}
                jobInfoLeft={styleData.jobInfoLeft}
                jobResponsbLeft={styleData.jobResponsbLeft}
                convertToBullets={convertToBullets}
                convertToText={convertToText}
                newRespsb={jobResponsibilities.responsibilities}
            />
    };

    if (editExpEntry.editExp) {
        editExpWindow =
            <EditExperience
                handleEdit={handleEdit}
                editExpEntry={editExpEntry}
                handleEditOnChangeResponsibilities={handleEditOnChangeResponsibilities}
                handleEditOnChange={handleEditOnChange}
                handleCancelEditExp={handleCancelEditExp}
                handleSubmitEdit={handleSubmitEdit}
            />
    }


    if (state.input) {
        expViewToggle =
            <div className="edit-page">
                <aside>
                    <header><p>CV Maker</p></header>
                </aside>
                <div className="entry-container">
                    <h2 className="edit-page-headline">Edit/Add your experience</h2>
                    {state.experienceList.map(exp => {
                        return (
                            <div key={uniqid()} className="saved-experience-entry">
                                <div className="job-main-info">
                                    <div className="saved-experience-title-entry">
                                        <span>{exp.jobTitle}</span>
                                    </div>
                                    <div className="saved-experience-location-dates">
                                        <span>{exp.jobCity}</span>
                                        <span>|</span>
                                        <span>{convertDates(exp.startDate)}</span>
                                        <span>-</span>
                                        <span>{convertDates(exp.endDate)}</span>
                                    </div>
                                </div>
                                <div className="job-responsibilities">
                                    <ul>
                                        <li key={uniqid()}>{exp.responsibilities}</li>
                                        <button>...see more</button>
                                    </ul>
                                </div>
                                <div className="edit-add-experience-btns">
                                    <button onClick={(e) => handleEdit(e, exp.id)}>Edit</button>
                                    <button>Remove</button>
                                </div>
                            </div>
                        )
                    })}
                    <div className="navigation-btns-edits">
                        <button onClick={handleBack}>Back</button>
                        <button onClick={handleAddingExperience}>Add more experience</button>
                    </div>
                </div>
                {addExpWindow}
                {editExpWindow}
            </div>
    } else {
        expViewToggle =
            <div onClick={showEditPage} className="overlay">
                <section className="experience-container">
                    <div className="section-title">
                        <span>Experience</span>
                    </div>
                    <section className="entries-container">
                        {state.experienceList.map(exp => {
                            return (
                                <div key={uniqid()} className="experience-entry">
                                    <div className="title-and-period">
                                        <span className="job-title">{exp.jobTitle}</span>
                                        <span>{exp.startDate} - {exp.endDate}</span>
                                    </div>
                                    <span className="job-employer">{exp.employer}</span>
                                    <span>|</span>
                                    <span className="job-city">{exp.jobCity}</span>
                                    <ul>
                                        <li>{exp.responsibilities}</li>
                                    </ul>
                                </div>
                            )
                        })
                        }
                    </section>
                </section>
            </div>



    }
    return (
        <section className="experience-section">
            {expViewToggle}
        </section>
    )

}



