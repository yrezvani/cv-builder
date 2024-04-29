import React, { useState } from 'react';
import './Education.css';
import { v4 as uuidv4 } from 'uuid';

export default function Education({ educationInfo, addEducationEntry, updateEducationEntry, deleteEducationEntry }) {
    return (
        <div className="education-wrapper">
            <h2 className="form-heading">Education</h2>
            {educationInfo.map((edu) => (
                <form className="education-entry" key={edu.id}>
                    <div className="input-group">
                        <label htmlFor={`school-${edu.id}`}>School</label>
                        <input
                            type="text"
                            id={`school-${edu.id}`}
                            value={edu.school}
                            onChange={(event) => updateEducationEntry(edu.id, 'school', event.target.value)}
                        />
                    </div>
                    <div className="input-group">
                        <label htmlFor={`degree-${edu.id}`}>Degree</label>
                        <input
                            type="text"
                            id={`degree-${edu.id}`}
                            value={edu.degree}
                            onChange={(event) => updateEducationEntry(edu.id, 'degree', event.target.value)}
                        />
                    </div>
                    <div className="input-group">
                        <label htmlFor={`from-${edu.id}`}>From</label>
                        <input
                            type="date"
                            id={`from-${edu.id}`}
                            value={edu.from}
                            onChange={(event) => updateEducationEntry(edu.id, 'from', event.target.value)}
                        />
                    </div>
                    <div className="input-group">
                        <label htmlFor={`to-${edu.id}`}>To</label>
                        <input
                            type="date"
                            id={`to-${edu.id}`}
                            value={edu.to}
                            onChange={(event) => updateEducationEntry(edu.id, 'to', event.target.value)}
                        />
                    </div>
                    <button type="button" onClick={() => deleteEducationEntry(edu.id)} className="delete-btn">
                        Delete
                    </button>
                </form>
            ))}
            <button type="button" onClick={addEducationEntry}>
                Add New Education
            </button>
        </div>
    );
}
