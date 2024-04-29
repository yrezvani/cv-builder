import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid'; // Import UUID
import Header from './components/Header';
import PersonalInfo from './components/PersonalInfo';
import Education from './components/Education';
import Experience from './components/Experience';
import './App.css';
import CVPreview from './components/CVPreview';

function App() {
    const [personalInfo, setPersonalInfo] = useState({
        firstName: 'John',
        lastName: 'Doe',
        position: 'Frontend Developer',
        emailAddress: 'jdoe@gmail.com',
        phoneNumber: '0765463726',
    });

    const [educationInfo, setEducationInfo] = useState([
        {
            id: uuidv4(),
            school: 'Harvard',
            degree: 'Computer Science',
            from: 'September 2014',
            to: 'Now',
        },
    ]);

    const addEducationEntry = () => {
        const newEntry = {
            id: uuidv4(),
            school: '',
            degree: '',
            from: '',
            to: '',
        };
        setEducationInfo((prev) => [...prev, newEntry]);
    };

    const updateEducationEntry = (id, field, value) => {
        const updatedInfo = educationInfo.map((edu) => {
            if (edu.id === id) {
                return { ...edu, [field]: value };
            }
            return edu;
        });
        setEducationInfo(updatedInfo);
    };

    const deleteEducationEntry = (id) => {
        setEducationInfo((prev) => prev.filter((edu) => edu.id !== id));
    };

    const [experienceInfo, setExperienceInfo] = useState([
        {
            id: uuidv4(),
            company: 'Tiktok',
            position: 'Frontend Developer',
            from: 'September 2018',
            to: 'Now',
            location: 'San Francisco',
        },
    ]);

    const addExperienceEntry = () => {
        const newEntry = {
            id: uuidv4(),
            company: '',
            position: '',
            from: '',
            to: '',
            location: '',
        };
        setExperienceInfo((prev) => [...prev, newEntry]);
    };

    const updateExperienceEntry = (id, field, value) => {
        const updatedInfo = experienceInfo.map((edu) => {
            if (exp.id === id) {
                return { ...exp, [field]: value };
            }
            return exp;
        });
        setExperienceInfo(updatedInfo);
    };

    const deleteExperienceEntry = (id) => {
        setExperienceInfo((prev) => prev.filter((exp) => exp.id !== id));
    };

    const handlePersonalInfoChange = (newInfo) => {
        setPersonalInfo(newInfo);
    };

    return (
        <>
            <div className="wrapper">
                <div className="left-pane">
                    <Header />
                    <PersonalInfo personalInfo={personalInfo} onPersonalInfoChange={handlePersonalInfoChange} />
                    <Education
                        educationInfo={educationInfo}
                        addEducationEntry={addEducationEntry}
                        updateEducationEntry={updateEducationEntry}
                        deleteEducationEntry={deleteEducationEntry}
                    />
                    <Experience
                        experienceInfo={experienceInfo}
                        addExperienceEntry={addExperienceEntry}
                        updateExperienceEntry={updateExperienceEntry}
                        deleteExperienceEntry={deleteExperienceEntry}
                    />
                </div>
                <div className="preview-pane">
                    <CVPreview
                        personalInfo={personalInfo}
                        educationInfo={educationInfo}
                        experienceInfo={experienceInfo}
                    />
                </div>
            </div>
        </>
    );
}

export default App;
