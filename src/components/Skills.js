import React from "react";
import { Component } from "react";
import uniqid from "uniqid"
import "../styles/Skills.scss"

export default function Skills() {
    const [state, setState] = React.useState({
        input: false,
        skills: [],
        skill: {
            text: "",
            id: uniqid(),
        }
    })

    let element;



    const handleSubmit = (e) => {
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

    const handleChange = (e) => {
        this.setState({
            skill: {
                text: e.target.value,
                id: this.state.skill.id
            }
        })
    }

    const handleAddSkill = (e) => {
        this.setState(st => {
            return st.input = true;
        })
    }

    const handleDelete = (e, id) => {
        let skillArr = this.state.skills;
        let filteredArr = skillArr.filter(item => {
            return item.id !== id;
        })
        this.setState(st => {
            return st.skills = filteredArr;

        })
    }

    if (state.input) {
        element =
            <form onSubmit={handleSubmit} action="">
                <input onChange={handleChange} type="text" name="skill" id="skill" />
                <input type="submit" name="submit-skill" id="submit-skill" value={"Submit"} />
            </form>
    } else {
        element = <div className="skills-container">
            <div className="skills-left">
                <p>Skills</p>
            </div>
            <div className="skills-right">
                <div className="skills">
                    <ul >
                        {state.skills.map(skill => {
                            return (
                                <li key={skill.id} >{skill.text}
                                    <button onClick={(e) => handleDelete(e, skill.id)} >Delete</button>
                                </li>
                            )
                        })
                        }
                    </ul>
                </div>
            </div>
        </div>
    }
    return (<div className="overlay">{element}</div>)
}
