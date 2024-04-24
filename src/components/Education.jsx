import React, { useState } from 'react';
import './Education.css';
import { v4 as uuidv4 } from 'uuid';

export default function Education() {
    const [education, setEducation] = useState([]);

    const [newEducation, setNewEducation] = useState({
        school: '',
        degree: '',
        from: '',
        to: '',
    });

    function handleInputChange(field, value) {
        setNewEducation((prev) => ({
            ...prev,
            [field]: value,
        }));
    }

    function addEducation() {
        setEducation((prevEducation) => [...prevEducation, { ...newEducation, id: uuidv4() }]);
        setNewEducation({ school: '', degree: '', from: '', to: '' });
        document.getElementById('school').value = '';
        document.getElementById('degree').value = '';
        document.getElementById('from').value = '';
        document.getElementById('to').value = '';
    }

    function delEducation(id) {
        setEducation((prevEducation) => prevEducation.filter((edu) => edu.id !== id));
    }

    return (
        <div className="education-wrapper">
            <h2 className="form-heading">Education</h2>
            {education.map((edu, index) => (
                <div className="education-entry" key={edu.id}>
                    <div className="school-name">{edu.school}</div>
                    <button
                        className="delete-btn"
                        onClick={(event) => {
                            event.preventDefault();
                            delEducation(edu.id);
                        }}>
                        Delete
                    </button>
                </div>
            ))}
            <form className="education-form" action="">
                <div className="input-group">
                    <label htmlFor="school">School</label>
                    <input
                        type="text"
                        id="school"
                        onChange={(event) => handleInputChange('school', event.target.value)}
                    />
                </div>
                <div className="input-group">
                    <label htmlFor="degree">Degree</label>
                    <input
                        type="text"
                        id="degree"
                        onChange={(event) => handleInputChange('degree', event.target.value)}
                    />
                </div>
                <div className="input-group">
                    <label htmlFor="from">From</label>
                    <input type="date" id="from" onChange={(event) => handleInputChange('from', event.target.value)} />
                </div>
                <div className="input-group">
                    <label htmlFor="to">To</label>
                    <input type="date" id="to" onChange={(event) => handleInputChange('to', event.target.value)} />
                </div>
                <button
                    type="button"
                    onClick={(event) => {
                        event.preventDefault();
                        addEducation();
                    }}>
                    Add Education
                </button>
            </form>

            <div>
                {newEducation.school} {newEducation.degree} {newEducation.from} {newEducation.to}
            </div>
        </div>
    );
}
