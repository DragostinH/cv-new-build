import React from "react";
import uniqid from "uniqid";
import "../styles/Skills.scss";
export default function Skills() {
    let element;
    const [state, setState] = React.useState({
        input: false,
        skills: [
            {
                text: "Can code without any input device",
                id: uniqid(),
            },
            {
                text: "Knows how to center a <div>",
                id: uniqid(),
            },
            {
                text: "Experience with C+++",
                id: uniqid(),
            },
            {
                text: "Experience with PythonScript",
                id: uniqid(),
            },
        ],
        skill: {
            text: "",
            id: uniqid(),
        }
    })



    const handleBack = () => {
        setState({
            ...state,
            input: false,
        })
    }
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

    const handleChange = (e) => {
        setState({
            ...state,
            skill: {
                text: e.target.value,
                id: state.skill.id
            }
        })
    }

    let { firstListArr, secondListArr } = splitSkill(state);
    function splitSkill(state) {
        let index;
        let firstListArr = [];
        let secondListArr = [];
        if (state.skills.length === 1) {
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
                <div className="entry-container">
                    <h2 className="edit-page-headline">Add/remove skills</h2>
                    <form className="add-skill-form" onSubmit={handleSubmit} action="">
                        <input onChange={handleChange} type="text" name="skill" id="skill-input" value={state.skill.text} />
                        <input type="submit" name="submit-skill" id="submit-skill" value={"Submit"} />
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
                                            <li className="li-skill-entry" key={skill.id} >{skill.text}
                                                <button onClick={(e) => handleDelete(e, skill.id)} >Delete</button>
                                            </li>
                                        )
                                    })
                                    }

                                </ul>
                                <ul >
                                    {secondListArr.map(skill => {
                                        return (
                                            <li className="li-skill-entry" key={skill.id} >{skill.text}
                                                <button onClick={(e) => handleDelete(e, skill.id)} >Delete</button>
                                            </li>
                                        )
                                    })
                                    }
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="navigation-btns-edit">
                        <button className="edit-page-back-btn" onClick={handleBack}>Back</button>
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


