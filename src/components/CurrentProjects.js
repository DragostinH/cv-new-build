import React, { useState } from "react";
import "../styles/CurrentProjects.scss"
import EditProjects from "./EditProjects";
import uniqid from "uniqid";

export default function CurrentProjects() {
    let element;
    let currProjects
    const [projectsState, setProjectsState] = useState({
        projectOne: "https://jjbestporfolio.jj",
        projectTwo: "",
        projectThree: "",
    });

    const [inputState, setInputState] = useState({
        input: false,
    })

    const [editState, setEditState] = useState({
        projectOne: "",
        projectTwo: "",
        projectThree: "",
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        const editedProjects = editState;

        setProjectsState({
            ...projectsState,
            ...editedProjects,
        });
        setInputState({
            ...inputState,
            input: false,
        });
    };

    const handleOnChange = (e) => {
        setEditState({
            ...editState,
            [e.target.name]: e.target.value,
        });
    };

    const handleEditProjects = () => {
        const currProjects = projectsState;

        setInputState({
            ...inputState,
            input: true,
        });

        setEditState({
            ...editState,
            ...currProjects,
        });
    };

    const handleBack = () => {
        setProjectsState({
            ...projectsState,
        });
        setInputState({
            ...inputState,
            input: false,
        });
    };

    currProjects = [projectsState.projectOne, projectsState.projectTwo, projectsState.projectThree];





    if (inputState.input) {
        element = (
            <EditProjects
                handleSubmit={handleSubmit}
                handleOnChange={handleOnChange}
                editState={editState}
                handleBack={handleBack}
            />
        )
    } else {
        element =
            <div onClick={handleEditProjects} className="overlay">
                <div className="current-projects">
                    <div className="left-projects">
                        <span>Current Projects</span>
                    </div>
                    <div className="right-projects">
                        <ul>
                            {currProjects.map(proj => {
                                if (proj !== "") {
                                    return <li key={uniqid()}>{proj}</li>
                                }
                            })}
                        </ul>
                        {element}
                    </div>
                </div>
            </div>

    }
    return (
        <section className="current-projects-section">{element}</section>
    )


}

