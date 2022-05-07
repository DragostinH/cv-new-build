import React, { Component } from "react";
import "../styles/ContactAndName.scss"

class ContactAndName extends Component {
    constructor(props) {
        super(props)
        this.state = {
            contactInfo: {
                input: false,
                firstName: "Drago",
                lastName: "Hristov",
                email: "dragostin.hristov@gmail.com",
                tel: "+44(0)7565335040",
                country: "Bulgaria",
                city: "Sofia",
                postCode: "1330"
            },
        }
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.setState(st => {
            return st.contactInfo.input = false;
        })
    }

    handleChange = (e) => {
        this.setState(st => {
            return st.contactInfo[`${e.target.name}`] = e.target.value
        })
    }

    handleOnClick = () => {
        if (this.state.contactInfo.input) {
            this.setState(st => {
                return st.contactInfo.input = false;
            })
        } else {
            this.setState(st => {
                return st.contactInfo.input = true;
            })
        }
    }


    render() {
        const { input, firstName, lastName, email, tel, country, city, postCode } = this.state.contactInfo;
        let contactInfo;
        input ?
            contactInfo =
            <form className="contactInfo-form" onSubmit={this.handleSubmit} action="#">
                <label htmlFor="firstName">
                    First Name:
                    <input onChange={this.handleChange} value={firstName} type="text" id="firstName" name="firstName" />
                </label>
                <label htmlFor="lastName">
                    Last Name:
                    <input onChange={this.handleChange} value={lastName} type="text" id="lastName" name="lastName" />
                </label>
                <label htmlFor="email">Email:
                    <input onChange={this.handleChange} value={email} type="email" name="email" id="email" />
                </label>
                <label htmlFor="tel">Tel:
                    <input onChange={this.handleChange} value={tel} type="tel" name="tel" id="tel" />
                </label>
                <label htmlFor="country">Country:
                    <input onChange={this.handleChange} value={country} type="text" name="country" id="country" />
                </label>
                <label htmlFor="city">City:
                    <input onChange={this.handleChange} value={city} type="text" name="city" id="city" />
                </label>
                <label htmlFor="postCode">Post code:
                    <input onChange={this.handleChange} value={postCode} type="text" name="postCode" id="postCode" />
                </label>
                <input type="submit" name="submit" id="submit" value={"submit"} />
            </form> :
            contactInfo =
            <div onClick={this.handleOnClick} className="submitted-info">
                <h1 onClick={this.handleOnClick}>{firstName + " " + lastName}</h1>
                <div className="info">
                    <span>{email}</span>
                    <span>{tel}</span>
                    <span>{country + " " + postCode + " " + city}</span>
                </div>
            </div>
        return (
            <div onClick={this.handleOnClick} className="overlay">
                <div className="contact-info">
                    <div className="name-logo">
                        <div className="box">
                            <span>{firstName.charAt(0)}</span>
                            <div className="separator"></div>
                            <span>{lastName.charAt(0)}</span>
                        </div>
                    </div>
                    <div className="info-container">
                        {contactInfo}
                    </div>
                </div>
            </div>
        )
    }
}

export default ContactAndName;