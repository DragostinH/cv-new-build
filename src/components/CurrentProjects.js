import React, { Component } from "react";
import "../styles/CurrentProjects.scss"

export default function CurrentProjects() {
    const [state, setState] = React.useState({
        input: false,
        projectOne: "https://github.com/DragostinH?tab=stars",
        projectTwo: "",
        projectThree: "",
    })
    let element;
    let arr = [state.projectOne, state.projectTwo, state.projectThree]

    const handleSubmit = (e) => {
        e.preventDefault();
        if (state.projectOne.trim() !== "") {
            setState({
                ...state,
                input: false,
                projectOne: state.projectOne,
                projectTwo: state.projectTwo,
                projectThree: state.projectThree,
            })

        } else {
            setState({
                ...state,
                input: false,
            })
        }
    }

    const handleOnChange = (e) => {
        setState({
            ...state,
            [`${e.target.name}`]: e.target.value,
        });
    }

    const handleEditProjects = () => {
        setState({
            ...state,
            input: true,
        })
    }



    if (state.input) {
        element = (
            <div className="edit-projects-page">
                <form className="project-form" onSubmit={handleSubmit} action="">
                    <label htmlFor="projectOne"> <p>Project Link One</p>
                        <input onChange={handleOnChange} value={state.projectOne}
                            placeholder={state.projectOne} className="projects projectOne" type="text" name="projectOne" id="projectOne" />
                    </label>
                    <label htmlFor="projectTwo"> <p>Project Link Two</p>
                        <input onChange={handleOnChange} value={state.projectTwo} className="projects projectTwo" type="text" name="projectTwo" id="projectTwo" />
                    </label>
                    <label htmlFor="projectThree"> <p>Project Link Three</p>
                        <input onChange={handleOnChange} value={state.projectThree} className="projects projectThree" type="text" name="projectThree" id="projectThree" />
                    </label>
                    <input type="submit" name="submitProjects" id="submitProjects" value={"Submit"} />
                </form>
            </div >
        )
    } else {
        element =
            <div className="current-projects">
                <div className="left-projects">
                    <span>Current Projects</span>
                </div>
                <div className="right-projects">
                    <ul>
                        <li>{state.projectOne}</li>
                        <li>{state.projectTwo}</li>
                        <li>{state.projectThree}</li>
                    </ul>
                    {element}
                </div>
            </div>
    }
    return (
        <div onClick={handleEditProjects} className="overlay">
            {element}
        </div>)



}

