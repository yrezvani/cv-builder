import React, { useState } from 'react';

export default function PersonalInfo() {
    const [personalInfo, setPersonalInfo] = useState({
        firstName: '',
        lastName: '',
        position: '',
        emailAddress: '',
        phoneNumber: '',
    });

    function handleChange(event, stateKey) {
        if (stateKey === 'FName') {
            const newFirstName = event.target.value;
            setPersonalInfo({ ...personalInfo, firstName: newFirstName });
        } else if (stateKey === 'LName') {
            const newLastName = event.target.value;
            setPersonalInfo({ ...personalInfo, lastName: newLastName });
        } else if (stateKey === 'position') {
            const newPosition = event.target.value;
            setPersonalInfo({ ...personalInfo, position: newPosition });
        } else if (stateKey === 'email') {
            const newEmail = event.target.value;
            setPersonalInfo({ ...personalInfo, emailAddress: newEmail });
        } else if (stateKey === 'phone') {
            const newPhone = event.target.value;
            setPersonalInfo({ ...personalInfo, phoneNumber: newPhone });
        }
    }

    function handlePhone(event) {}

    return (
        <div className="personal-wrapper">
            <form action="">
                <h2>Personal Information</h2>
                <div>
                    <div>
                        <label htmlFor="first-name">First name</label>
                        <input
                            type="text"
                            id="first-name"
                            value={personalInfo.firstName}
                            onChange={(event) => handleChange(event, 'FName')}
                        />
                    </div>
                    <div>
                        <label htmlFor="last-name">Last name</label>
                        <input
                            type="text"
                            id="last-name"
                            value={personalInfo.lastName}
                            onChange={(event) => handleChange(event, 'LName')}
                        />
                    </div>
                </div>
                <div>
                    <div>
                        <label htmlFor="position">Position</label>
                        <input
                            type="text"
                            id="position"
                            value={personalInfo.position}
                            onChange={(event) => handleChange(event, 'position')}
                        />
                    </div>
                    <div>
                        <label htmlFor="email">Email Address</label>
                        <input
                            type="email"
                            id="email"
                            value={personalInfo.emailAddress}
                            onChange={(event) => handleChange(event, 'email')}
                        />
                    </div>
                    <div>
                        <label htmlFor="phone">Phone No</label>
                        <input
                            type="tel"
                            id="phone"
                            value={personalInfo.phoneNumber}
                            onChange={(event) => handleChange(event, 'phone')}
                        />
                    </div>
                </div>
            </form>
        </div>
    );
}
