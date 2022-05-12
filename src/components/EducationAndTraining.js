import React from "react";
import "../styles/EducationAndTraining.scss"


export default function EducationAndTraining() {

    const [state, setState] = React.useState({
        input: false,
        educations: [{}],
        education: {
            schoolName: "",
            schoolLocation: "",
            degree: "",
            field: "",
            gradDate: "",
            stillEnrolled: false,
        }
    });



    return (
        <div className="overlay">
            <section className="education-training-container">
                <div className="left-education-training">
                    <span>Education & Training</span>
                </div>
                <div className="right-education-training">
                    <div className="degree-info-container">
                        <div className="degree-info">
                            <h4 className="degree-name">Bachelor Of Computer Science</h4>
                            <div className="uni-name-location-container">
                                <span className="uni-name">Glasgow Caledonian University</span>
                                <span>|</span>
                                <span className="uni-location">Glasgow</span>
                            </div>
                        </div>
                        <div className="graduation-info-container">
                            <span>01/09/2014</span>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )

}
