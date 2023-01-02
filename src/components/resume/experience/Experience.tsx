import React from "react";
import { H2 } from "../../../styles/styles";
import ExperienceItem from "./ExperienceItem";

const Experience : React.FC = () => {
    return(
        <>
        <H2>Work Experience</H2>
        <ExperienceItem
            company={"Clora"}
            location={"Boston, MA"}
            title={"Full Stack Web-Developer Co-op"}
            startDate={"July 2022"}
            endDate={"present"}
            description={[
                "Participate in bi-weekly sprints which address improvements and bugs for Clora's external and internalwebsite.",
                "Spearhead implementation of new features such as consultant suggestions, search result paginations,assign an internal rep to project.",
            ]} 
        />
        <ExperienceItem
            company={"Khoury College of Computer Science"}
            location={"Boston, MA"}
            title={"Fundamentals of Computer Science 2 Teaching Assistant"}
            startDate={"Jan 2022"}
            endDate={"July 2022"}
            description={[
                "Lead TA during labs for 40+ students which involved teaching concepts, administering quizzes.",
                "Held 6+ hours of weekly office hours to teach fundamental programming concepts to students.",
                "Attended weekly staff meeting with 70 other TAs and instructorsto discuss rubrics, and grading.",
            ]} 
        />
        <ExperienceItem
            company={"Northeastern University MHealth Research Lab"}
            location={"Boston, MA"}
            title={"Undergraduate Researcher"}
            startDate={"March 2021"}
            endDate={"Sept 2022"}
            description={[
                "Develop script to visualize year of health data gathered from smartwatches, and smartphonesfrom 250 participants .",
                "Create custom script using python, and libraries such as pandas, and pillow to read and visualize2000+ raw .csv files.",
                "Conceptualize visually suitable graphs to represent data ranging from accelerometer data to sleepdata.",
            ]} 
        />
        <ExperienceItem
            company={"Nations Trust Bank"}
            location={"Colombo, Sri Lanka"}
            title={"Developer Intern"}
            startDate={"Sept 2019"}
            endDate={"Oct 2019"}
            description={[
                "Collaborated with a team of engineers to redesign the user sign in and sign up page.",
                "Assisted in improving the chatbot on the customer end of the website.",
            ]} 
        />
        </>
    )
}

export default Experience