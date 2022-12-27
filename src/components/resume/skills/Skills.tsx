import React from "react"
import { Grid, Tooltip } from "@mui/material"
import { H2, H4 } from "../../../styles/styles"
import SkillsItem from "./SkillsItem"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Image from "next/image";
import adobe from '../../../assets/SkillLogos/adobe.svg'
import autocad from '../../../assets/SkillLogos/autocad.svg'
import c from '../../../assets/SkillLogos/c++.svg'
import eclipse from '../../../assets/SkillLogos/eclipse.svg'
import heroku from '../../../assets/SkillLogos/heroku.svg'
import intellij from '../../../assets/SkillLogos/intellij.svg'
import jupyter from '../../../assets/SkillLogos/jupyter.svg'
import materialUi from '../../../assets/SkillLogos/material-ui.svg'
import microsoftOffice from '../../../assets/SkillLogos/microsoft-office.svg'
import nest from '../../../assets/SkillLogos/nestjs.svg'
import next from '../../../assets/SkillLogos/nextjs.svg'
import pandas from '../../../assets/SkillLogos/pandas.svg'
import pycharm from '../../../assets/SkillLogos/pycharm.svg'
import r from '../../../assets/SkillLogos/r.svg'
import rubyRails from '../../../assets/SkillLogos/ruby-on-rails.svg'
import ruby from '../../../assets/SkillLogos/ruby.svg'
import rubymine from '../../../assets/SkillLogos/rubymine.svg'
import typescript from '../../../assets/SkillLogos/typescript.svg'
import code from '../../../assets/SkillLogos/visual-studio.svg'
import scikit from '../../../assets/SkillLogos/scikit-learn.svg'
import vercel from '../../../assets/SkillLogos/vercel.svg'

const IMAGE_WIDTH = 46
const IMAGE_HEIGHT = 48

const Skills: React.FC = () => {

    return (
        <><H2>Skills</H2><H4>Programming Languages</H4><Grid container spacing={2}>
            <Grid item xs={12}>
                <SkillsItem name={"Java"} logo={<FontAwesomeIcon icon={["fab", "java"]} size="3x" />} proficiency={8}/>
                <SkillsItem name={"Python"} logo={<FontAwesomeIcon icon={["fab", "python"]} size="3x" />} proficiency={9} />
                <SkillsItem name={"Ruby"} logo={<Image src={ruby} alt="ruby logo" width={IMAGE_WIDTH} height={IMAGE_HEIGHT}/>} proficiency={9} />
                <SkillsItem name={"HTML"} logo={<FontAwesomeIcon icon={["fab", "html5"]} size="3x" />} proficiency={10} />
                <SkillsItem name={"CSS"} logo={<FontAwesomeIcon icon={["fab", "css3"]} size="3x" />} proficiency={6} />
                <SkillsItem name={"JavaScript"} logo={<FontAwesomeIcon icon={["fab", "js-square"]} size="3x" />} proficiency={8} />
                <SkillsItem name={"Typescript"} logo={<Image src={typescript} alt="typescript"  width={IMAGE_WIDTH} height={IMAGE_HEIGHT}/>} proficiency={8} />
                <SkillsItem name={"SQL"} logo={<Image src={undefined} alt="SQL"  width={IMAGE_WIDTH} height={IMAGE_HEIGHT}/>} proficiency={5} />
                <SkillsItem name={"R"} logo={<Image src={r} alt="R" width={IMAGE_WIDTH} height={IMAGE_HEIGHT}/>} proficiency={3} />
                <SkillsItem name={"C++"} logo={<Image src={c} alt="c++" width={IMAGE_WIDTH} height={IMAGE_HEIGHT} />} proficiency={4} />
            </Grid>

        </Grid><H4>Software Tools</H4><Grid container spacing={2}>
                <Grid item xs={12}>
                    <SkillsItem name={"Ruby Mine"} logo={<Image src={rubymine} alt="ruby logo" width={IMAGE_WIDTH} height={IMAGE_HEIGHT}/>} proficiency={8} />
                    <SkillsItem name={"Visual Studio Code"} logo={<Image src={code} alt="visual studio code" width={IMAGE_WIDTH} height={IMAGE_HEIGHT}/>} proficiency={8} />
                    <SkillsItem name={"Eclipse"} logo={<Image src={eclipse} alt="eclipse" width={IMAGE_WIDTH} height={IMAGE_HEIGHT} />} proficiency={8} />
                    <SkillsItem name={"PyCharm"} logo={<Image src={pycharm} alt="pycharm" width={IMAGE_WIDTH} height={IMAGE_HEIGHT} />} proficiency={8} />
                    <SkillsItem name={"IntelliJ"} logo={<Image src={intellij} alt="intellij" width={IMAGE_WIDTH} height={IMAGE_HEIGHT} />} proficiency={8} />
                    <SkillsItem name={"AutoCAD"} logo={<Image src={autocad} alt="autocad" width={IMAGE_WIDTH} height={IMAGE_HEIGHT} />} proficiency={8} />
                    <SkillsItem name={"Microsoft Suite"} logo={<Image src={microsoftOffice} alt="microsoft office"  width={IMAGE_WIDTH} height={IMAGE_HEIGHT}/>} proficiency={8} />
                    <SkillsItem name={"Adobe Suite"} logo={<Image src={adobe} alt="adobe suite" width={IMAGE_WIDTH} height={IMAGE_HEIGHT} />} proficiency={8} />
                    <SkillsItem name={"Jupyter Notebook"} logo={<Image src={jupyter} alt="jupyter" width={IMAGE_WIDTH} height={IMAGE_HEIGHT} />} proficiency={8} />
                    <SkillsItem name={"Heroku"} logo={<Image src={heroku} alt="heroku" width={IMAGE_WIDTH} height={IMAGE_HEIGHT} />} proficiency={8} />
                    <SkillsItem name={"Vercel"} logo={<Image src={vercel} alt="vercel" width={IMAGE_WIDTH} height={IMAGE_HEIGHT} />} proficiency={8} />
                    <SkillsItem name={"Google Cloud"} logo={<FontAwesomeIcon icon={["fab", "google"]} size="3x" />} proficiency={8} />

                </Grid>

            </Grid><H4>Frameworks & Libraries</H4><Grid container spacing={2}>
                <Grid item xs={12}>
                    <SkillsItem name={"React"} logo={<FontAwesomeIcon icon={["fab", "react"]} size="3x" />} proficiency={8} />
                    <SkillsItem name={"NextJS"} logo={<Image src={next} alt="nextJS" width={IMAGE_WIDTH} height={IMAGE_HEIGHT} />} proficiency={8} />
                    <SkillsItem name={"NestJS"} logo={<Image src={nest} alt="nestJS" width={IMAGE_WIDTH} height={IMAGE_HEIGHT} />} proficiency={8} />
                    <SkillsItem name={"Bootstrap"} logo={<FontAwesomeIcon icon={["fab", "bootstrap"]} size="3x" />} proficiency={8} />
                    <SkillsItem name={"Material UI"} logo={<Image src={materialUi} alt="material ui"  width={IMAGE_WIDTH} height={IMAGE_HEIGHT}/>} proficiency={8} />
                    <SkillsItem name={"Framer Motion"} logo={<Image src={undefined} alt="framer motion" width={IMAGE_WIDTH} height={IMAGE_HEIGHT} />} proficiency={8} />
                    <SkillsItem name={"Ruby on Rails"} logo={<Image src={rubyRails} alt="ruby on rails"  width={IMAGE_WIDTH} height={IMAGE_HEIGHT}/>} proficiency={8} />
                    <SkillsItem name={"pandas"} logo={<Image src={pandas} alt="pandas" width={IMAGE_WIDTH} height={IMAGE_HEIGHT} />} proficiency={8} />
                    <SkillsItem name={"pillow"} logo={<FontAwesomeIcon icon={["fab", "python"]} size="3x" />} proficiency={8} />
                    <SkillsItem name={"scikit learn"} logo={<Image src={scikit} alt="scikit-learn" width={IMAGE_WIDTH} height={IMAGE_HEIGHT} />} proficiency={8} />

                </Grid>

            </Grid></>
        
    )
}

export default Skills