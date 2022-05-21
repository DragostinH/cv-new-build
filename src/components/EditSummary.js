import React from "react";

export default function EditSummary(props) {

    const {
        handleBack,
        editState,
        handleOnChange,
        handleSubmit, } = props;

    return (
        <div className="edit-page">
            <aside>
                <header><p>CV Maker</p></header>
            </aside>
            <div className="entry-container">
                <h2>Edit summary</h2>
                <form className="summary-form" onSubmit={handleSubmit} action="">
                    <label htmlFor="">
                        <p>Summary</p>
                        <textarea onChange={handleOnChange} value={editState.summary} name="" id="summary-textarea" cols="30" rows="10"></textarea>
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