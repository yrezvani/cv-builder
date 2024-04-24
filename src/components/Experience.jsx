import React, { useState } from 'react';
import './Experience.css';
import { v4 as uuidv4 } from 'uuid';

export default function Experience() {
    const [experience, setExperience] = useState([]);

    const [newExperience, setNewExperience] = useState({
        company: '',
        position: '',
        from: '',
        to: '',
        location: '',
    });

    function handleInputChange(field, value) {
        setNewExperience((prev) => ({
            ...prev,
            [field]: value,
        }));
    }

    function addExperience() {
        setExperience((prevExperience) => [...prevExperience, { ...newExperience, id: uuidv4() }]);
        setNewExperience({ company: '', position: '', from: '', to: '', location: '' });
        document.getElementById('company').value = '';
        document.getElementById('position').value = '';
        document.getElementById('from').value = '';
        document.getElementById('to').value = '';
        document.getElementById('location').value = '';
    }

    function delExperience(id) {
        setExperience((prevExperience) => prevExperience.filter((edu) => edu.id !== id));
    }

    return (
        <div className="experience-wrapper">
            <h2 className="form-heading">Experience</h2>
            {experience.map((exp, index) => (
                <div className="experience-entry" key={exp.id}>
                    <div className="company-name">{exp.company}</div>
                    <button
                        className="delete-btn"
                        onClick={(event) => {
                            event.preventDefault();
                            delExperience(exp.id);
                        }}>
                        Delete
                    </button>
                </div>
            ))}
            <form className="experience-form" action="">
                <div className="input-group">
                    <label htmlFor="company">Company</label>
                    <input
                        type="text"
                        id="company"
                        onChange={(event) => handleInputChange('company', event.target.value)}
                    />
                </div>
                <div className="input-group">
                    <label htmlFor="position">Position</label>
                    <input
                        type="text"
                        id="position"
                        onChange={(event) => handleInputChange('position', event.target.value)}
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
                <div className="input-group">
                    <label htmlFor="location">Location</label>
                    <input
                        type="text"
                        id="location"
                        onChange={(event) => handleInputChange('location', event.target.value)}
                    />
                </div>
                <button
                    type="button"
                    onClick={(event) => {
                        event.preventDefault();
                        addExperience();
                    }}>
                    Add experience
                </button>
            </form>

            <div>
                {newExperience.company} {newExperience.position} {newExperience.from} {newExperience.to}{' '}
                {newExperience.location}
            </div>
        </div>
    );
}
