import React from "react";
import { H2 } from "../../../styles/styles";
import ExperienceItem from "./ExperienceItem";

const Experience : React.FC = () => {
    return(
        <>
        <H2>Work Experience</H2>
        <ExperienceItem
            company={"HackBeanpot Inc"}
            location={"Boston, MA"}
            title={"Core Tech Team "}
            startDate={"April 2022"}
            endDate={"present"}
            description={[
                "Contributed to developing an email sender project to reduce friction for the social outreach team when sending personalized emails to multiple recipients. ",
                "Participated in weekly meetings to make decisions on the technological stack, discuss solutions for problems, and improve code readability. ",
                "Lead workshops team to develop informative workshops for the hackathon on a wide range of engineering and career topics.",
            ]} 
        />
        <ExperienceItem
            company={"Khoury College of Computer Science"}
            location={"Boston, MA"}
            title={"Computer Science Professional Development for Co-op Teaching Assistant"}
            startDate={"Jan 2023"}
            endDate={"present"}
            description={[
            ]} 
        />
        <ExperienceItem
            company={"Clora"}
            location={"Boston, MA"}
            title={"Full Stack Web-Developer Co-op"}
            startDate={"July 2022"}
            endDate={"Dec 2022"}
            description={[
                "Proposed and spearheaded a project to document the consultant profile taggings AI scripts built using python, sklearn, and xgboost.",
                "Spearheaded initiatives such as consultant suggestions, search results pagination, and assigning a Clora rep for projects.",
                "Worked on tickets to improve and bug-fix Clora's marketplace website and the internal facing site.",
                "Shadowed product development processes to develop 2022 roadmap.",
                "Contributed to code reviews, architecture decisions, and team processes in Agile scrum sprints.",
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