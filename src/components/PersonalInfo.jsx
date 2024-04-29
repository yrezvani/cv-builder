import React, { useState } from 'react';
import './PersonalInfo.css';

export default function PersonalInfo({ personalInfo, onPersonalInfoChange }) {
    function handleChange(event, stateKey) {
        if (stateKey === 'FName') {
            const newFirstName = event.target.value;
            onPersonalInfoChange({ ...personalInfo, firstName: newFirstName });
        } else if (stateKey === 'LName') {
            const newLastName = event.target.value;
            onPersonalInfoChange({ ...personalInfo, lastName: newLastName });
        } else if (stateKey === 'position') {
            const newPosition = event.target.value;
            onPersonalInfoChange({ ...personalInfo, position: newPosition });
        } else if (stateKey === 'email') {
            const newEmail = event.target.value;
            onPersonalInfoChange({ ...personalInfo, emailAddress: newEmail });
        } else if (stateKey === 'phone') {
            const newPhone = event.target.value;
            onPersonalInfoChange({ ...personalInfo, phoneNumber: newPhone });
        }
    }

    function displayInfo() {}

    return (
        <div className="personal-wrapper">
            <form className="personal-form" action="">
                <h2 className="form-heading">Personal Information</h2>
                <div className="input-group">
                    <label htmlFor="firstName">First name</label>
                    <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        value={personalInfo.firstName}
                        onChange={(event) => handleChange(event, 'FName')}
                    />
                </div>
                <div className="input-group">
                    <label htmlFor="lastName">Last name</label>
                    <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        value={personalInfo.lastName}
                        onChange={(event) => handleChange(event, 'LName')}
                    />
                </div>
                <div className="input-group">
                    <label htmlFor="position">Position</label>
                    <input
                        type="text"
                        id="position"
                        name="position"
                        value={personalInfo.position}
                        onChange={(event) => handleChange(event, 'position')}
                    />
                </div>
                <div className="input-group">
                    <label htmlFor="email">Email Address</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={personalInfo.emailAddress}
                        onChange={(event) => handleChange(event, 'email')}
                    />
                </div>
                <div className="input-group">
                    <label htmlFor="phoneNumber">Phone No</label>
                    <input
                        type="tel"
                        id="phoneNumber"
                        name="phoneNumber"
                        value={personalInfo.phoneNumber}
                        onChange={(event) => handleChange(event, 'phone')}
                    />
                </div>
            </form>
        </div>
    );
}
