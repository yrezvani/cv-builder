import React from 'react';
import './Experience.css';

export default function Experience({
    experienceInfo,
    addExperienceEntry,
    updateExperienceEntry,
    deleteExperienceEntry,
}) {
    function handleInputChange(id, field, value) {
        updateExperienceEntry(id, field, value);
    }

    return (
        <div className="experience-wrapper">
            <h2 className="form-heading">Experience</h2>
            {experienceInfo.map((exp, index) => (
                <form className="experience-entry" key={exp.id}>
                    <div className="input-group">
                        <label htmlFor={`company-${exp.id}`}>Company</label>
                        <input
                            type="text"
                            id={`company-${exp.id}`}
                            value={exp.company}
                            onChange={(event) => handleInputChange(exp.id, 'company', event.target.value)}
                        />
                    </div>
                    <div className="input-group">
                        <label htmlFor={`position-${exp.id}`}>Position</label>
                        <input
                            type="text"
                            id={`position-${exp.id}`}
                            value={exp.position}
                            onChange={(event) => handleInputChange(exp.id, 'position', event.target.value)}
                        />
                    </div>
                    <div className="input-group">
                        <label htmlFor={`from-${exp.id}`}>From</label>
                        <input
                            type="date"
                            id={`from-${exp.id}`}
                            value={exp.from}
                            onChange={(event) => handleInputChange(exp.id, 'from', event.target.value)}
                        />
                    </div>
                    <div className="input-group">
                        <label htmlFor={`to-${exp.id}`}>To</label>
                        <input
                            type="date"
                            id={`to-${exp.id}`}
                            value={exp.to}
                            onChange={(event) => handleInputChange(exp.id, 'to', event.target.value)}
                        />
                    </div>
                    <div className="input-group">
                        <label htmlFor={`location-${exp.id}`}>Location</label>
                        <input
                            type="text"
                            id={`location-${exp.id}`}
                            value={exp.location}
                            onChange={(event) => handleInputChange(exp.id, 'location', event.target.value)}
                        />
                    </div>
                    <button type="button" className="delete-btn" onClick={() => deleteExperienceEntry(exp.id)}>
                        Delete
                    </button>
                </form>
            ))}
            <button type="button" onClick={addExperienceEntry}>
                Add New Experience
            </button>
        </div>
    );
}
