import React, { Component } from "react";
import "../styles/ContactAndName.scss"

export default function ContactAndName() {
    let contactInfo;

    const [state, setState] = React.useState({
        input: false,
        firstName: "Drago",
        lastName: "Hristov",
        email: "dragostin.hristov@gmail.com",
        tel: "+44(0)7565335040",
        country: "Bulgaria",
        city: "Sofia",
        postCode: "1330"
    })


    const handleSubmit = (e) => {
        e.preventDefault();
        setState({
            ...state,
            input: false,
        })
    }

    const handleChange = (e) => {
        setState({
            ...state,
            [`${e.target.name}`]: e.target.value,
        })
    }

    const handleBack = () => {
        setState({
            ...state,
            input: false,
        })
    }

    const handleOnClick = (e) => {
        if (state.input) {
            setState({
                ...state,
                input: false,
            })
        } else {
            setState({
                ...state,
                input: true,
            })
        }
    }


    if (state.input) {
        contactInfo =
            <div className="edit-page">
                <aside>
                    <header><p>CV Maker</p></header>
                </aside>
                <div className="entry-container">
                    <div className="name-logo">
                        <div className="box">
                            <span>{state.firstName.charAt(0)}</span>
                            <div className="separator"></div>
                            <span>{state.lastName.charAt(0)}</span>
                        </div>
                    </div>
                    <form className="contactInfo-form" onSubmit={handleSubmit} action="#">
                        <label htmlFor="firstName">
                            First Name:
                            <input onChange={handleChange} value={state.firstName} type="text" id="firstName" name="firstName" />
                        </label>
                        <label htmlFor="lastName">
                            Last Name:
                            <input onChange={handleChange} value={state.lastName} type="text" id="lastName" name="lastName" />
                        </label>
                        <label htmlFor="email">Email:
                            <input onChange={handleChange} value={state.email} type="email" name="email" id="email" />
                        </label>
                        <label htmlFor="tel">Tel:
                            <input onChange={handleChange} value={state.tel} type="tel" name="tel" id="tel" />
                        </label>
                        <label htmlFor="country">Country:
                            <input onChange={handleChange} value={state.country} type="text" name="country" id="country" />
                        </label>
                        <label htmlFor="city">City:
                            <input onChange={handleChange} value={state.city} type="text" name="city" id="city" />
                        </label>
                        <label htmlFor="postCode">Post code:
                            <input onChange={handleChange} value={state.postCode} type="text" name="postCode" id="postCode" />
                        </label>
                        <input type="submit" name="submit" id="submit" value={"submit"} />
                    </form>
                </div>
                <div className="navigation-btns-edit">
                    <button onClick={handleBack} >Back</button>
                    <button ></button>
                </div>
            </div>
    } else {
        contactInfo =
            <div onClick={handleOnClick} className="overlay">
                <div className="contact-info">
                    <div className="name-logo">
                        <div className="box">
                            <span>{state.firstName.charAt(0)}</span>
                            <div className="separator"></div>
                            <span>{state.lastName.charAt(0)}</span>
                        </div>
                    </div>
                    <div className="info-container">
                        <div onClick={handleOnClick} className="submitted-info">
                            <h1 onClick={handleOnClick}>{state.firstName + " " + state.lastName}</h1>
                            <div className="info">
                                <span>{state.email}</span>
                                <span>{state.tel}</span>
                                <span>{state.country + " " + state.postCode + " " + state.city}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    }


    return (
        <section className="contact-and-name-section">{contactInfo}</section>
    )
}
