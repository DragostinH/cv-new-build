import React, { useState } from "react";
import "../styles/CurrentProjects.scss"
import EditProjects from "./EditProjects";

export default function CurrentProjects() {
    let element;
    const [projectsState, setProjectsState] = useState({
        projectOne: "https://github.com/DragostinH?tab=stars",
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



    console.log([projectsState])
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

