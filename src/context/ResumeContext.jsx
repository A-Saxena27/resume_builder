import React, { createContext, useContext, useState } from "react";

const ResumeContext = createContext();

const initialResumeData = {
  personalInfo: {
    fullName: "John Doe",
    email: "john.doe@example.com",
    phone: "+1 (555) 123-4567",
    location: "New York, USA",
    linkedin: "linkedin.com/in/johndoe",
    portfolio: "johndoe.dev",
  },
  objective:
    "Passionate and results-driven professional with experience in building dynamic web applications. Looking to leverage my skills in a challenging role to contribute to innovative projects.",
  education: [
    {
      id: "1",
      institution: "University of Technology",
      degree: "Bachelor of Science in Computer Science",
      startDate: "2018",
      endDate: "2022",
      description: "Graduated with Honors. Relevant coursework: Data Structures, Algorithms, Web Development.",
    },
  ],
  experience: [
    {
      id: "1",
      company: "Tech Solutions Inc.",
      position: "Frontend Developer",
      startDate: "Jan 2023",
      endDate: "Present",
      description: "Developed and maintained responsive web applications using React and Tailwind CSS. Improved page load times by 20%.",
    },
  ],
  skills: ["React", "JavaScript", "Tailwind CSS", "Node.js", "Git"],
  projects: [
    {
      id: "1",
      title: "E-commerce Platform",
      link: "github.com/johndoe/ecommerce",
      description: "A full-stack e-commerce solution with Stripe integration and user authentication.",
    },
  ],
  achievements: [
    "1st Place at Global Hackathon 2023",
    "AWS Certified Developer - Associate",
  ],
};

export const ResumeProvider = ({ children }) => {
  const [resumeData, setResumeData] = useState(initialResumeData);
  const [selectedTemplate, setSelectedTemplate] = useState("classic");

  const updatePersonalInfo = (field, value) => {
    setResumeData((prev) => ({
      ...prev,
      personalInfo: { ...prev.personalInfo, [field]: value },
    }));
  };

  const updateObjective = (value) => {
    setResumeData((prev) => ({ ...prev, objective: value }));
  };

  const updateArrayItem = (arrayName, index, field, value) => {
    setResumeData((prev) => {
      const newArray = [...prev[arrayName]];
      newArray[index] = { ...newArray[index], [field]: value };
      return { ...prev, [arrayName]: newArray };
    });
  };

  const addArrayItem = (arrayName, emptyItem) => {
    setResumeData((prev) => ({
      ...prev,
      [arrayName]: [...prev[arrayName], emptyItem],
    }));
  };

  const removeArrayItem = (arrayName, index) => {
    setResumeData((prev) => {
      const newArray = [...prev[arrayName]];
      newArray.splice(index, 1);
      return { ...prev, [arrayName]: newArray };
    });
  };

  const updateSkills = (newSkills) => {
    setResumeData((prev) => ({ ...prev, skills: newSkills }));
  };
  
  const updateAchievements = (newAchievements) => {
    setResumeData((prev) => ({ ...prev, achievements: newAchievements }));
  };

  return (
    <ResumeContext.Provider
      value={{
        resumeData,
        setResumeData,
        selectedTemplate,
        setSelectedTemplate,
        updatePersonalInfo,
        updateObjective,
        updateArrayItem,
        addArrayItem,
        removeArrayItem,
        updateSkills,
        updateAchievements,
      }}
    >
      {children}
    </ResumeContext.Provider>
  );
};

export const useResume = () => useContext(ResumeContext);
