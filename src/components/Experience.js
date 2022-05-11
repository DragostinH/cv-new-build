import React from "react";
import uniqid from "uniqid";
import "../styles/Experience.scss"

export default function Experience() {
    let experienceViewToggle;
    let addExperienceWindow;
    let textOrList;
    let test;

    const [state, setState] = React.useState({
        input: false,
        addExp: false,
        textOrList: false,
        experienceList: [
            {
                jobTitle: "Change Manager",
                employer: "Webhelp",
                country: "Bulgaria",
                city: "Glasgow",
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
                country: "Bulgaria",
                city: "Glasgow",
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
        experience: {
            jobTitle: "",
            employer: "",
            country: "",
            city: "",
            startDate: "",
            endDate: "",
            responsibilities: [],
            currentJob: false
        }
    })

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


    const showEditPage = () => {
        setState({
            ...state,
            input: true,
        })
    }

    const textAreaOnChange = (e) => {

        console.log(e.target.value.split(/\r?\n/));
    }

    const areaSelected = (e) =>{
        alert(window.getSelection())
    }

    const handleChecked = (e) => {
        setState({
            ...state,
            textOrList: e.target.checked,
        })
    }

    if (state.addExp) {
        state.textOrList ? test =
            <textarea onChange={textAreaOnChange} onClick={areaSelected} name="responsb" id="responsb" cols="30" rows="10">

            </textarea> :
            test =
            <label htmlFor="">
                <input type="text" name="" id="" />
            </label>;

        addExperienceWindow = (
            <div className="add-experience-container">
                <div className="add-experience-window">
                    <p className="add-experience">Add Experience</p>
                    <form action="">
                        <label htmlFor="">
                            <p>Job Title</p>
                            <input type="text" name="jobTitle" id="jobTitle" />
                        </label>
                        <label htmlFor="">
                            <p>Employer</p>
                            <input type="text" name="employer" id="employer" />
                        </label>
                        <label htmlFor="">
                            <p>Country</p>
                            <input type="text" name="jobCountry" id="jobCountry" />
                        </label>
                        <label htmlFor="">
                            <p>City</p>
                            <input type="text" name="jobCity" id="jobCity" />
                        </label>
                    </form>
                    <div className="resp-form">
                        <p>Add responsibilities</p>
                        <label htmlFor="freeText">
                            Text
                            <input onClick={handleChecked} type="checkbox" name="textAreaRadio" id="freeText" />
                        </label>
                        <form action="">
                            {test}
                        </form>
                    </div >
                    <button onClick={handleCancelAddingExperience}>Cancel</button>
                </div>
            </div>)
    }

    if (state.input) {
        experienceViewToggle =
            <div className="edit-experience-page">
                {addExperienceWindow}
                <aside>
                    <header><p>CV Maker</p></header>
                </aside>
                <div className="experience-entry-container">
                    <h2 className="edit-experience-headline">Edit/Add your experience</h2>
                    {state.experienceList.map(exp => {
                        return (
                            <div key={uniqid()} className="saved-experience-entry">
                                <div className="job-main-info">
                                    <div className="saved-experience-title-entry">
                                        <span>{exp.jobTitle}</span>
                                    </div>
                                    <div className="saved-experience-location-dates">
                                        <span>{exp.city}</span>
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
                                    <span className="job-city">{exp.city}</span>
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

