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
                <h1 className="edu-prev-header">Education</h1>
                {educationInfo.map((edu, index) => (
                    <div key={index}>
                        <div className="edu-prev-content">
                            <p>
                                {edu.from} - {edu.to}
                            </p>
                            <p className="school-name">{edu.school}</p>
                            <p>{edu.degree}</p>
                        </div>
                    </div>
                ))}
            </div>
            <div className="experience-prev">
                <h1 className="exp-prev-header">Experience</h1>
                {experienceInfo.map((exp, index) => (
                    <div key={index}>
                        <div className="exp-prev-content">
                            <p>
                                {exp.from} - {exp.to}
                            </p>
                            <p className="company-name">{exp.company}</p>
                            <p>{exp.location}</p>
                            <p>{exp.position}</p>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
}
