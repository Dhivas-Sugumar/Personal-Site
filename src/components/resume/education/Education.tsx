import React from "react";
import { H2 } from "../../../styles/styles";
import EducationItem from "./EducationItem";

const Education : React.FC = () => {
    return (
        <>
        <H2>Education</H2>
        <EducationItem
            school={"Northeastern University"}
            location={"Boston,MA"}
            level={"Undergraduate Degree"}
            startDate={"SEPT 2020"}
            endDate={"PRESENT"}
            degrees={"Bachelor of Science in Computer Science, Minor in Philosophy"}
            acheivements={"Honors College, Honors Scholarship, Deans List"}
            activities={"Hackbeanpot, Code for Community, NU Toastmasters, NU Circle K"} 
        />
        <EducationItem
                school={"Asian International School"}
                location={"Colombo,Sri Lanka"}
                level={"High School Diploma"}
                startDate={"SEPT 2003"}
                endDate={"JUNE 2020"}
                degrees={"Edexcel International Advanced Levels"}
                acheivements={"Valedictorian 2020, Student Government, ALevel - 3A*s, 1A"}
        />
        </>
    )
}

export default Education