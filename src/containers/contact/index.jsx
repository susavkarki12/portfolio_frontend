import React, { useState } from 'react'
import { BsInfoCircleFill } from "react-icons/bs"
import PageHeaderContent from '../../components/pageHeaderContent'
import { Animate } from 'react-simple-animate'
import './styles.scss'
import { enquireDetails } from '../../services/UserService'

const Contact = () => {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [description, setDescription] = useState('')

    const [errors, setErrors] = useState({
        title: '',
        content: '',
        description: ''
    })

    const savePost = (events) => {
        events.preventDefault();

        const post = { name, email, description }
        console.log(post)

        enquireDetails(post).then((response) => {
            console.log(response.data);

        })
    }

    return (
        <section id='contact' className='contact'>
            <PageHeaderContent
                headerText="My Contact"
                icon={<BsInfoCircleFill size={40} />}
            />
            <div className="contact__content">
                <Animate
                    play
                    duration={1}
                    delay={0}
                    start={{
                        transform: "translateX(-200px)"
                    }}
                    end={{
                        transform: "translateX(0px) "
                    }}>
                    <h3 className="contact__content__header-text">Let's Talk</h3>

                </Animate>
                <Animate
                    play
                    duration={1}
                    delay={0}
                    start={{
                        transform: "translateX(200px)"
                    }}
                    end={{
                        transform: "translateX(0px) "
                    }}>
                    <div className="contact__content__form">
                        <div className="contact__content__form__controlswrapper">
                            <div>
                                <input
                                    required
                                    name="name"
                                    className="inputName"
                                    type={'text'}
                                    value={name}
                                    onChange={(event) => setName(event.target.value)} />
                                {errors.name && <div className='invalid-feedback'>{errors.name}</div>}
                                <label htmlFor="name" className="nameLabel">Name</label>
                            </div>
                            <div >
                                <input
                                    required
                                    name="email"
                                    className="inputEmail"
                                    type={'text'}
                                    value={email}
                                    onChange={(event) => setEmail(event.target.value)} />
                                {errors.email && <div className='invalid-feedback'>{errors.email}</div>}
                                <label htmlFor="email" className="emailLabel">Email</label>
                            </div>
                            <div >
                                <textarea
                                    required
                                    name="desctiption"
                                    className="inputDescription"
                                    type={'text'} rows="5"
                                    value={description}
                                    
                                    onChange={(event) => setDescription(event.target.value)} />
                                {errors.description && <div className='invalid-feedback'>{errors.description}</div>}
                                <label htmlFor="description" className="descriptionLabel">Description</label>
                            </div>

                        </div>
                        <button className='btn btn-success' onClick={savePost}>Submit</button>
                    </div>

                </Animate>
            </div>
        </section>
    )
}

export default Contact