import React from "react";
import uniqid from "uniqid";
import "../styles/Skills.scss";
import { Slice } from "react-lodash";
export default function Skills() {
    let element;
    const [state, setState] = React.useState({
        input: false,
        skills: [],
        skill: {
            text: "",
            id: uniqid(),
        }
    })





    const handleSubmit = (e) => {
        e.preventDefault();
        if (state.skill.text.trim() === "") {
            console.log('please enter skill');
        } else {
            setState({
                ...state,
                skills: state.skills.concat(state.skill),
                skill: {
                    text: "",
                    id: uniqid()
                }
            })

        }
    }

    const handleOnClick = () => {
        setState({
            ...state,
            input: true,
        })
    }

    const handleCancel = () => {
        setState({ ...state, input: false, });
    }

    const handleChange = (e) => {
        setState({
            ...state,
            skill: {
                text: e.target.value,
                id: state.skill.id
            }
        })
    }

    const handleAddSkill = (e) => {
        setState({
            ...state,
            input: true,
        })
    }


    let { firstListArr, secondListArr } = splitSkill(state);
    function splitSkill(state) {
        let index;
        let firstListArr = [];
        let secondListArr = [];
        if (state.skills.length === 1) {
            console.log(state.skills.length);
            firstListArr = state.skills;
            return { firstListArr, secondListArr };
        }
        if (state.skills.length % 2 === 0) {
            index = state.skills.length / 2;
        } else {
            index = (state.skills.length + 1) / 2;
        }
        firstListArr = state.skills.slice(0, index);
        secondListArr = state.skills.slice(index, state.skills.length);
        return { firstListArr, secondListArr };
    }


    const handleDelete = (e, id) => {
        let skillArr = state.skills;
        let filteredArr = skillArr.filter(item => {
            return item.id !== id;
        })
        setState({
            ...state,
            skills: filteredArr,

        })
    }

    if (state.input) {
        element =
            <div className="edit-page">
                <aside>
                    <header><p>CV Maker</p></header>
                </aside>
                <div className="entry-container-skills">
                    <h2 className="edit-page-headline">Edit/Add your skills</h2>
                    <div className="skills-form-container">
                        <form onSubmit={handleSubmit} action="">
                            <input onChange={handleChange} type="text" name="skill" id="skill" value={state.skill.text}/>
                            <input type="submit" name="submit-skill" id="submit-skill" value={"Submit"} />
                            <button onClick={handleCancel}>cancel</button>
                        </form>
                        <div className="skills-container">
                            <div className="skills-left">
                                <span>Skills</span>
                            </div>
                            <div className="skills-right">
                                <div className="skills">
                                    <ul >
                                        {firstListArr.map(skill => {
                                            return (
                                                <li key={skill.id} >{skill.text}
                                                    <button onClick={(e) => handleDelete(e, skill.id)} >Delete</button>
                                                </li>
                                            )
                                        })
                                        }

                                    </ul>
                                    <ul >
                                        {secondListArr.map(skill => {
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
                    </div>
                </div>
            </div>
    } else {
        element =
            <div onClick={handleOnClick} className="overlay">
                <div className="skills-container">
                    <div className="skills-left">
                        <span>Skills</span>
                    </div>
                    <div className="skills-right">
                        <div className="skills">
                            <ul >
                                {firstListArr.map(skill => {
                                    return (
                                        <li key={skill.id} >{skill.text}
                                        </li>
                                    )
                                })
                                }

                            </ul>
                            <ul >
                                {secondListArr.map(skill => {
                                    return (
                                        <li key={skill.id} >{skill.text}
                                        </li>
                                    )
                                })
                                }
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

    }
    return (
        <section className="skills-section">{element}</section>
    )
}


