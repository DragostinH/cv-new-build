import React from "react";
import { useState } from "react";
import uniqid from "uniqid";
import "../styles/Experience.scss"

export default function Experience() {
    let experienceViewToggle;
    let addExperienceWindow;
    // let listOrTextSwitch;

    const [state, setState] = useState({
        input: false,
        addExp: false,
        textOrList: false,
        experienceList: [
            {
                jobTitle: "Change Manager",
                employer: "Webhelp",
                jobCountry: "Bulgaria",
                jobCity: "Glasgow",
                startDate: "June 2021",
                endDate: "Feb 2022",
                responsibilities: [
                    'Leveraged prescribed change management tools such as impact analyses, enablement plans and readiness assessments to support updates.',
                    'Identified success metrics and regularly reported on progress and gaps.',
                    'Coordinated with staff to clarify information and enforce procedures resulting in effective problem solving and smoother operations.',
                    'Identified business issues, creating customized solutions for individual problems.',
                    'Eliminated process discrepancies, implementing continuous improvements for scheduling procedures across multiple client calendars.',
                    'Presented Cl proposals and strategies to client.'
                ],
                currentJob: false
            },
            {
                jobTitle: "Change Manager",
                employer: "Webhelp",
                jobCountry: "Bulgaria",
                jobCity: "Glasgow",
                startDate: "June 2021",
                endDate: "Feb 2022",
                responsibilities: [
                    'Leveraged prescribed change management tools such as impact analyses, enablement plans and readiness assessments to support updates.',
                    'Identified success metrics and regularly reported on progress and gaps.',
                    'Coordinated with staff to clarify information and enforce procedures resulting in effective problem solving and smoother operations.',
                    'Identified business issues, creating customized solutions for individual problems.',
                    'Eliminated process discrepancies, implementing continuous improvements for scheduling procedures across multiple client calendars.',
                    'Presented Cl proposals and strategies to client.'
                ],
                currentJob: false
            },
        ],
    })

    const [newExperienceFormData, setFormData] = useState({
        text: "",
        jobTitle: "",
        employer: "",
        jobCountry: "",
        jobCity: "",
        startDate: "",
        endDate: "",
        responsibilities: [],
        currentJob: false

    });

    const [styleData, setStyle] = useState({
        jobInfoLeft: "0%",
        jobResponsbLeft: "100%",
    })


    // const Form = () => {
    //     const [formData, setFormData] = useState({
    //         jobTitle: "",
    //         employer: "",
    //         jobCountry: "",
    //         jobCity: "",
    //         startDate: "",
    //         endDate: "",
    //     })
    //     const [jobTitle, setTitle] = useState("");

    // }

    const handleBack = () => {
        setState({
            ...state,
            input: false,
        });
    }

    const handleAddingExperience = () => {
        setState({
            ...state,
            addExp: true,
        })
    }
    const handleCancelAddingExperience = () => {
        setState({
            ...state,
            addExp: false,
        })

        setStyle({
            ...styleData,
            jobInfoLeft: "0%",
            jobResponsbLeft: "100%",
        })
    }

    const handleOnChange = (e) => {
        setFormData({
            ...newExperienceFormData,
            [e.target.id]: e.target.value,

        })
    }

    const handleOnSave = (e) => {
        let newExperience = newExperienceFormData;
        setState({
            ...state,
            addExp: false,
            experienceList: state.experienceList.concat(newExperience),
        })
    }



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


    const showEditPage = () => {
        setState({
            ...state,
            input: true,
        })
    }

    const handleContinue = (e) => {
        setStyle({
            ...styleData,
            jobInfoLeft: "-100%",
            jobResponsbLeft: "0%",
        })
    }

    const testStyle = (e) => {
        setStyle({
            ...styleData,
            [e.target.id]: 100,
        })
    }

    // const textAreaOnChange = (e) => {

    //     console.log(e.target.value.split(/\r?\n/));
    // }

    // const areaSelected = (e) => {
    //     alert(window.getSelection())
    // }

    // const handleChecked = (e) => {
    //     setState({
    //         ...state,
    //         textOrList: e.target.checked,
    //     })
    // }

    // <div className="resp-form">
    //     <p>Add responsibilities</p>
    //     <label htmlFor="freeText">
    //         Text
    //         <input onClick={handleChecked} type="checkbox" name="textAreaRadio" id="freeText" />
    //     </label>
    //     <form action="">
    //         {listOrTextSwitch}
    //         <input type="submit" name="" id="" />
    //     </form>
    // </div >

    // {(e) => setState({...state, experiencebody: e.target.value})} 
    /* <input type="submit" name="expForm" id="exp-submit-btn" /> */

    if (state.addExp) {
        // listOrTextSwitch = toggleBetweenListOrText(state, listOrTextSwitch);

        addExperienceWindow = (
            <div className="add-experience-container">
                <div className="add-experience-window">
                    <div style={{ left: styleData.jobInfoLeft }} id="jobInfoLeft" className="slide add-job-info">
                        <p className="add-experience">Add Experience</p>
                        <form onSubmit={handleOnSave} htmlFor="expForm" action="">
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
                        </form>
                    </div>
                    <div style={{ left: styleData.jobResponsbLeft }} id="jobResponsbLeft" className="slide add-job-responsibilities">
                        <textarea name="responsb" id="responsb" cols="30" rows="10">
                        </textarea>
                    </div>
                </div>
                <div className="add-experience-btn-controls" htmlFor="">
                    <button onClick={handleCancelAddingExperience}>cancel</button>
                    <button onClick={handleContinue}>continue</button>
                </div>
            </div>)
    }

    if (state.input) {
        experienceViewToggle =
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
                                        <span>{exp.startDate}</span>
                                        <span>-</span>
                                        <span>{exp.endDate}</span>
                                    </div>
                                </div>
                                <div className="job-responsibilities">
                                    <ul>
                                        {exp.responsibilities.map(resp => {
                                            return (
                                                <li key={uniqid()}>{resp}</li>
                                            )
                                        })}
                                        <button>...see more</button>
                                    </ul>
                                </div>
                                <div className="edit-add-experience-btns">
                                    <button>Edit</button>
                                    <button>Remove</button>
                                </div>
                            </div>
                        )
                    })}
                </div>
                <div className="navigation-btns-edit">
                    <button onClick={handleBack}>Back</button>
                    <button onClick={handleAddingExperience}>Add more experience</button>
                </div>
                {addExperienceWindow}

            </div>
    } else {
        experienceViewToggle =
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
                                        {exp.responsibilities.map(re => {
                                            return <li key={uniqid()}>{re}</li>
                                        })}
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
            {experienceViewToggle}
        </section>
    )

}



