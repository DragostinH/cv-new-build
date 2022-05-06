import React from "react";
import { Component } from "react";
import uniqid from "uniqid"
import "../styles/Skills.scss"

class Skills extends Component {
    constructor(props) {
        super(props);
        this.state = {
            input: false,
            skills: [],
            skill: {
                text: "",
                id: uniqid(),
            }
        }
    }

    handleSubmit = (e) => {
        e.preventDefault();
        if (this.state.skill.text.trim() === "") {
            console.log('please enter skill');
        } else {
            this.setState({
                input: false,
                skills: this.state.skills.concat(this.state.skill),
                skill: {
                    text: "",
                    id: uniqid()
                }
            })

        }
    }

    handleChange = (e) => {
        this.setState({
            skill: {
                text: e.target.value,
                id: this.state.skill.id
            }
        })
    }

    handleAddSkill = (e) => {
        this.setState(st => {
            return st.input = true;
        })
    }

    handleDelete = (e, id) => {
        let skillArr = this.state.skills;
        let filteredArr = skillArr.filter(item => {
            return item.id !== id;
        })
        this.setState(st => {
            return st.skills = filteredArr;

        })
    }


    render() {
        const { skills } = this.state;
        let element;
        if (this.state.input) {
            element =
                <form onSubmit={this.handleSubmit} action="">
                    <input onChange={this.handleChange} type="text" name="skill" id="skill" />
                    <input type="submit" name="submit-skill" id="submit-skill" value={"Submit"} />
                </form>
        } else {
            element = <button onClick={this.handleAddSkill}>Add Skill</button>
        }
        return (
            <div className="skills-container">
                <div className="skills-left">
                    <p>Skills</p>
                </div>
                <div className="skills-right">
                    <div className="skills">
                        <ul >
                            {skills.map(skill => {
                                    return (
                                        <li key={skill.id} >{skill.text}
                                            <button onClick={(e) => this.handleDelete(e, skill.id)} >Delete</button>
                                        </li>
                                    )
                                })
                            }
                            {element}
                        </ul>
                    </div>
                </div>

            </div>
        );
    }
}

export default Skills;