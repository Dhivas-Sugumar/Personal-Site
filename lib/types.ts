import { ReactElement } from "react"
import { IconProps } from "react-feather"

export type ContactMeLinkProps = {
    brand: string
    link: string
    icon: IconProps
}

export type EducationItemProps = {
    school: string
    location: string
    level: string
    dates: string
    degrees: string
    acheivements: string
    activities?: string
}

export type ExperienceItemProps = {
    company: string
    location: string
    title: string
    dates: string
    description: Array<String>
}

export type SkillsItemProps = {
    type: string 
    skills: Array<String>
}

export type ProjectItemProps = {
    title: string 
    image: ReactElement
    date: string
    description: string
    technologies: Array<ReactElement>
}