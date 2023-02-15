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
                "Engineer an email sender to improve efficiency for outreach when sending personalized emails to multiple recipients by 85%.", 
                "Push 50+ code commits across the internal tools, application portal, main site, and event-day based on Typescript, React.js, Material-UI, and Next.js",
                "Participate in weekly meetings to make decisions on the technological stack, discuss features, and improve code quality.", 
                "Lead workshops team to develop informative workshops for the hackathon on a wide range of engineering and career topics."
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
                `Spearheaded initiatives such as consultant suggestions, search results pagination, and Clora rep for projects to
                improve consultant search by 70% using ElasticSearch.`,
                `Proposed and authored documentation for consultant profile tagging machine learning scripts built using python,
                scikit-learn, xgboost, and SQL.`,
                `Utilized SQL, Coresignal, AWS, and Rails to implement a REST API to create and/or update consultants in the
                PostgreSQL database with newly mined consultant profiles.`,
                `Authored 100+ commits to implement new features and maintain Clora's marketplace and internal web applications
                based on React, Ruby on Rails, and Bootstrap.`,
                `Contributed to 20+ code reviews, architecture decisions, and team processes in Agile scrum sprints.`
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
            endDate={"Nov 2022"}
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