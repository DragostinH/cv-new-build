import React from "react";

export default function EditAccomplishments(props) {
    const {
        handleBack,
        state,
        handleOnChange,
        handleAddAccomplishment,
        accomplishment,
        handleDeleteAccomplishment } = props;

    return (
        <div className="edit-page">
            <aside>
                <header><p>CV Maker</p></header>
            </aside>
            <div className="entry-container">
                <h2>Add/remove accomplishments</h2>
                <form className="accomplishments-form" onSubmit={handleAddAccomplishment} action="">
                    <label htmlFor="">
                        <input onChange={handleOnChange} value={accomplishment.accomplishmentText} type="text" name="" id="accomplishments-input" />
                    </label>
                    <label htmlFor="">
                        <input type="submit" name="" id="add-accomplishment" value={"Add"} />
                    </label>
                </form>
                <section className="accomplishments-container">
                    <div className="accomplishments-left">
                        <span>Accomplishments</span>
                    </div>
                    <div className="accomplishments-right">
                        <ul className="accomplishments-ul">
                            {state.accomplishments.map(acc => {
                                return <li className="accomplishment-li" key={acc.id} >{acc.accomplishmentText}
                                    <button onClick={(e) => handleDeleteAccomplishment(e, acc.id)}>Delete</button>
                                </li>
                            })}
                        </ul>
                    </div>
                </section>
                <div className="navigation-btns-edit">
                    <button onClick={handleBack} >Back</button>
                </div>
            </div>
        </div>
    );
}