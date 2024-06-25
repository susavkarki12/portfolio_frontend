import React from 'react'
import './styles.scss'
import { BsInfoCircleFill } from "react-icons/bs"
import PageHeaderContent from '../../components/pageHeaderContent'
import { Animate } from 'react-simple-animate'
import { DiApple, DiAndroid } from 'react-icons/di'
import { FaDev, FaDatabase } from 'react-icons/fa'


const personalDetails = [
    {
        label: "Name",
        value: "Susav Karki",
    },
    {
        label: "Age",
        value: "21",
    },
    {
        label: "Address",
        value: "Biratnagar",
    },
    {
        label: "Email",
        value: "susav.karki@gmail.com"
    },
    {
        label: "Contact No.",
        value: "+977-9810536251"
    }
]

const jobSummary = "Seasoned full stack developer with 1 years of experience"

const About = () => {
    return (
        <section id='about' className='about'>
            <PageHeaderContent
                headerText="About Me"
                icon={<BsInfoCircleFill size={40} />}
            />
            <div className="about__content">
                <div className="about__content__personalWrapper">
                    <Animate
                        play
                        duration={1.5}
                        delay={1}
                        start={{
                            transform: "translatex(-900px)"
                        }}
                        end={{
                            transform: "translatex(0px)"
                        }}
                    >
                        <h3 className="personalInformationHeaderText">Full Stack Developer</h3>
                        <p>{jobSummary}</p>
                    </Animate>

                    <Animate
                        play
                        duration={1.5}
                        delay={1}
                        start={{
                            transform: "translatey(500px)"
                        }}
                        end={{
                            transform: "translatex(0px)"
                        }}
                    >
                        <h3> Personal Information</h3>
                        <ul>
                            {
                                personalDetails.map((item, i) => (
                                    <li key={i}>
                                        <span className="title">{item.label}</span>
                                        <span className="value">{item.value}</span>
                                    </li>
                                ))
                            }
                        </ul>
                    </Animate>
                </div>
                <div className="about__content__servicesWrapper">
                <Animate
                        play
                        duration={1.5}
                        delay={1}
                        start={{
                            transform: "translatex(600px)"
                        }}
                        end={{
                            transform: "translatex(0px)"
                        }}
                    >
                    <div className="about__content__servicesWrapper__innerContent">
                        <div>
                            <FaDev size={60} color="var(--yellow-theme-main-color)"/>
                        </div>
                        <div>
                            <FaDatabase size={60} color="var(--yellow-theme-main-color)"/>

                        </div>
                        <div>
                            <DiAndroid size={60} color="var(--yellow-theme-main-color)"/>

                        </div>
                        <div>
                            <DiApple size={60} color="var(--yellow-theme-main-color)"/>

                        </div>
                    </div>
                    </Animate>
                </div>


            </div>
        </section>
    )
}

export default About;