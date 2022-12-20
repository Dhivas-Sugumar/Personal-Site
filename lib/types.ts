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
