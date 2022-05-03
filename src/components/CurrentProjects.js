import React, { Component } from "react";
import "../styles/CurrentProjects.scss"

class CurrentProjects extends Component {
    constructor(props) {
        super(props)
        this.state = {
            input: false,
            projects: ["https://github.com/DragostinH?tab=stars"],
            text: "",
            addBtn: false,
        }
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.setState({
            projects: this.state.projects.concat(this.state.text),
            text: "",
            addBtn: false
        })
    }

    handleOnChange = (e) => {
        this.setState({
            text: e.target.value
        })
    }

    removeProject = (e, project) => {
        let arr = Array.from(this.state.projects).filter(item => {
            return item !== project
        });
        this.setState({
            projects: arr
        })
    }


    handleAddProject = () => {
        if (this.state.addBtn) {
            this.setState(st => {
                return st.addBtn = false;
            })
        } else {
            this.setState(st => {
                return st.addBtn = true;
            })
        }
    }

    render() {
        const { projects, addBtn } = this.state;
        let info;
        let addProject;

        if (addBtn) {
            addProject = (
                <form onSubmit={this.handleSubmit} action="">
                    <input onChange={this.handleOnChange} type="text" name="project" id="project" />
                    <input type="submit" name="submit" id="submit" />
                </form>
            )
        } else {
            addProject =
                <button onClick={this.handleAddProject}>Add Project</button>
        }

        return (
            <div className="current-projects">
                <div className="left-projects">
                    <p>Current Projects</p>
                </div>
                <ul>
                    {projects.map(project => {
                        return <li key={project.toString()} >{project}
                            <button onClick={(e) => this.removeProject(e, project.toString())}>Delete</button></li>
                    })}
                    {addProject}
                </ul>

            </div>
        )

    }
}

export default CurrentProjects;