import React, { useState } from 'react';
import './CVPreview.css';

export default function CVPreview({ personalInfo, educationInfo, experienceInfo }) {
    return (
        <>
            <div className="personal-prev">
                <h1>
                    {personalInfo.firstName} {personalInfo.lastName}
                </h1>
                <p>{personalInfo.position}</p>
                <p>{personalInfo.emailAddress}</p>
                <p>{personalInfo.phoneNumber}</p>
            </div>
            <div className="education-prev">
                <h1>Education</h1>
                {educationInfo.map((edu, index) => (
                    <div key={index}>
                        <h3>{edu.school}</h3>
                        <p>{edu.degree}</p>
                        <p>
                            {edu.from} - {edu.to}
                        </p>
                    </div>
                ))}
            </div>
            <div className="experience-prev">
                <h1>Experience</h1>
                {experienceInfo.map((exp, index) => (
                    <div key={index}>
                        <h3>{exp.company}</h3>
                        <p>{exp.position}</p>
                        <p>{exp.location}</p>
                        <p>
                            {exp.from} - {exp.to}
                        </p>
                    </div>
                ))}
            </div>
        </>
    );
}
