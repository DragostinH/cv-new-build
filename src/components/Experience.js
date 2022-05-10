import React, { Component } from "react";
import "../styles/Experience.scss"

export default function Experience() {
    let element;
    const [state, setState] = React.useState({
        input: false,
        experienceList: [
            {
                jobTitle: "Change Manager",
                employer: "Webhelp",
                country: "Bulgaria",
                city: "Glasgow",
                startDate: "June 2021",
                endDate: "Feb 2022",
                responsibilities: ['Akita', 'Mnogo akita', 'Malko akita'],
                currentJob: false
            }
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

    const showEditPage = () => {
        setState({
            ...state,
            input: true,
        })
    }

    if (state.input) {
        element =
            <div className="edit-experience-page">
                <aside>
                    <header><p>CV Maker</p></header>
                </aside>
                <div className="experience-entry-container">
                    <h2 className="edit-experience-headline">Edit/Add your experience</h2>
                    <div className="saved-experience-entry">
                        <div className="job-main-info">
                            <div className="saved-experience-title-entry">
                                <span>{state.experienceList[0].jobTitle}</span>
                            </div>
                            <div className="saved-experience-location-dates">
                                <span>{state.experienceList[0].city}</span>
                                <span>|</span>
                                <span>{state.experienceList[0].startDate}</span>
                                <span>-</span>
                                <span>{state.experienceList[0].endDate}</span>
                            </div>
                        </div>
                        <div className="job-responsibilities">
                            <ul>
                                {state.experienceList[0].responsibilities.map(resp => {
                                    return <li key={resp} >{resp}</li>
                                })}
                            </ul>
                        </div>

                        <div className="edit-add-experience-btns">
                            <button>Edit</button>
                            <button>Remove</button>
                        </div>
                    </div>
                    <div className="navigation-btns-edit">
                        <button>Back</button>
                        <button>Add more experience</button>
                    </div>
                </div>

            </div>
    } else {
        element =
            <section className="experience-container">
                <div className="experience-left">
                    <span>Experience</span>
                </div>
                <div className="experience-right">
                    <div className="title-and-period">
                        <span className="job-title">Change Manager</span>
                        <span>06/2021 - 02/2022</span>
                    </div>
                    <span>Webhelp</span> <span>|</span> <span>Glasgow</span>
                    <ul>
                        <li>Leveraged prescribed change management tools such as impact analyses, enablement plans and readiness assessments to support updates.</li>
                        <li>Identified success metrics and regularly reported on progress and gaps.</li>
                        <li>Coordinated with staff to clarify information and enforce procedures resulting in effective problem solving and smoother operations.</li>
                        <li>Identified business issues, creating customized solutions for individual problems.</li>
                        <li>Eliminated process discrepancies, implementing continuous improvements for scheduling procedures across multiple client calendars.</li>
                        <li>Presented Cl proposals and strategies to client.</li>
                    </ul>
                </div>
            </section>
    }
    return (
        <div onClick={showEditPage} className="overlay">
            {element}
        </div>
    )

}

