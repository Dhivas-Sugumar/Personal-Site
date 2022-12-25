import { ReactElement } from "react"

export type ContactMeLinkProps = {
    brand: string
    link: string
    icon: ReactElement
}

export type EducationItemProps = {
    school: string
    location: string
    level: string
    startDate: string
    endDate: string
    degrees: string
    acheivements: string
    activities?: string
}

export type ExperienceItemProps = {
    company: string
    location: string
    title: string
    startDate: string
    endDate: string
    description: Array<String>
}

export type ResumeItemDateProps = {
    start: string
    end: string
}

export type SkillsItemProps = {
    name: string 
    logo: ReactElement
    proficiency: number
}

export type ProjectItemProps = {
    title: string 
    image: ReactElement
    date: string
    description: string
    technologies: Array<ReactElement>
}

export type TextLoopProps = {
    texts: Array<String>
}