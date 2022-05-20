import React, { useState } from "react";
import "../styles/ContactAndName.scss"


export default function EditContactAndName(props) {


    const {
        editState,
        handleEditOnChange,
        handleBack,
        handleEditSubmit } = props;
    return (
        <div className="edit-page">
            <aside>
                <header><p>CV Maker</p></header>
            </aside>
            <div className="entry-container">
                <div className="name-logo">
                    <div className="box">
                        <span>{editState.firstName.charAt(0)}</span>
                        <div className="separator"></div>
                        <span>{editState.lastName.charAt(0)}</span>
                    </div>
                </div>
                <form className="contactInfo-form" onSubmit={(e) => { e.preventDefault() }} action="#">
                    <label htmlFor="firstName">
                        <p>First Name:</p>
                        <input onChange={handleEditOnChange} value={editState.firstName} type="text" id="firstName" name="firstName" />
                    </label>
                    <label htmlFor="lastName">
                        <p>Last Name:</p>
                        <input onChange={handleEditOnChange} value={editState.lastName} type="text" id="lastName" name="lastName" />
                    </label>
                    <label htmlFor="email">
                        <p>Email:</p>
                        <input onChange={handleEditOnChange} value={editState.email} type="email" name="email" id="email" />
                    </label>
                    <label htmlFor="tel">
                        <p>Tel:</p>
                        <input onChange={handleEditOnChange} value={editState.tel} type="tel" name="tel" id="tel" />
                    </label>
                    <label htmlFor="country">
                        <p>Country:</p>
                        <input onChange={handleEditOnChange} value={editState.country} type="text" name="country" id="country" />
                    </label>
                    <label htmlFor="city">
                        <p>City:</p>
                        <input onChange={handleEditOnChange} value={editState.city} type="text" name="city" id="city" />
                    </label>
                    <label htmlFor="postCode">
                        <p>Post code:</p>
                        <input onChange={handleEditOnChange} value={editState.postCode} type="text" name="postCode" id="postCode" />
                    </label>
                    <div className="navigation-btns-edit">
                        <button onClick={handleBack}>Back</button>
                        <input onClick={handleEditSubmit} type="submit" name="submit" id="submit" value={"submit"} />
                    </div>
                </form>
            </div>
        </div>
    );
}