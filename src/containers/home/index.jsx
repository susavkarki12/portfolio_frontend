import React from 'react'
import './styles.scss'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ReactTyped } from "react-typed"



const Home = () => {



    const navigate = useNavigate()

    const handelNavigateToContactPage = () => {
        navigate("/contact")
    }
    const containerVariants = {
        hidden: {
            opacity: 0,
            y: 15
          },
          visible: {
            opacity: 1,
            y: 0,
            transition: {
              duration: 0.3,
              ease: "easeOut"
            }
          }
    };

    return (
        <section className="home" >
            <div className="content">

                {
                    <h1>
                        <ReactTyped strings={["Hi I'm Susav <br> Full Stack Developer"]} typeSpeed={100} loop />
                    </h1>
                }
            </div>


            <div className="home__contact-me">
                <motion.button onClick={handelNavigateToContactPage}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}

                >
                    Hire Me
                </motion.button>
            </div>


        </section>


    )
}

export default Home