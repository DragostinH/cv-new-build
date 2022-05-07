import React, { Component } from "react";
import "../styles/Experience.scss"

class Experience extends Component {
    constructor(props) {
        super(props)
        this.state = {
            experienceList: [],
            experience: {
                jobTitle: "",
                employer: "",
                country: "",
                city: "",
                startDate: "",
                endDate: "",
                currentJob: false
            }
        }
    }

    render() {
        return (
            <section className="experience-container">
                <div className="experience-left">
                    <p>Experience</p>
                </div>
                <div className="experience-right">
                    <div className="title-and-period">
                        <h4>Change Manager</h4>
                        <p>06/2021 - 02/2022</p>
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
                    <button>Add Experience</button>
                </div>
            </section>
        )
    }
}

export default Experience;