import React, { useState } from "react";

export default function EditProjects(props) {

    const {
        editState,
        handleSubmit,
        handleOnChange,
        handleBack, } = props;

    return (
        <div className="edit-page">
            <aside>
                <header><p>CV Maker</p></header>
            </aside>
            <div className="entry-container">
                <form className="project-form" onSubmit={handleSubmit} action="">
                    <label htmlFor="projectOne"> <p>Project Link One</p>
                        <input onChange={handleOnChange} value={editState.projectOne}
                            placeholder={editState.projectOne} className="projects projectOne" type="text" name="projectOne" id="projectOne" />
                    </label>
                    <label htmlFor="projectTwo"> <p>Project Link Two</p>
                        <input onChange={handleOnChange} value={editState.projectTwo} className="projects projectTwo" type="text" name="projectTwo" id="projectTwo" />
                    </label>
                    <label htmlFor="projectThree"> <p>Project Link Three</p>
                        <input onChange={handleOnChange} value={editState.projectThree} className="projects projectThree" type="text" name="projectThree" id="projectThree" />
                    </label>
                    <div className="navigation-btns-edit">
                        <button onClick={handleBack} >Back</button>
                        <input type="submit" name="submit" id="submit" value={"submit"} />
                    </div>
                </form>
            </div>
        </div>
    );
}