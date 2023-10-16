import React, { useContext, useEffect, useState } from "react";
import { ExperienceBox } from "../../utils/exportStyles";
import { RiArrowRightSFill } from "react-icons/ri";
import { LanguajeContext } from "../../providers/LanguajeProvider";
import { CSSTransition, SwitchTransition } from "react-transition-group";

export const Experience = () => {
    const { languaje } = useContext(LanguajeContext);
    const [job, setJob] = useState(languaje.experience.jobs[0]);
    useEffect(() => {
        setJob(languaje.experience.jobs[0])
    }, [languaje.experience.jobs])

    return (
        <ExperienceBox className="flex experience" id="experience">
            <div className="flex-area">
                <SwitchTransition>
                    <CSSTransition
                        key={languaje.banner.title}
                        classNames="fade-left-to-right-1"
                        addEndListener={(node, done) =>
                            node.addEventListener("transitionend", done, false)
                        }
                    >
                        <fieldset>
                            <legend>
                                <span className="color-p">02.</span> {languaje.experience.title}
                            </legend>
                        </fieldset>
                    </CSSTransition>
                </SwitchTransition>

                <div className="job-nav">
                    <SwitchTransition>
                        <CSSTransition
                            key={languaje.experience.title}
                            classNames="fade-left-1"
                            addEndListener={(node, done) =>
                                node.addEventListener("transitionend", done, false)
                            }
                        >
                            <ul className="job-ul">
                                {languaje.experience.jobs.map((jo, i) => (
                                    <li className="job-li" key={i}>
                                        <button onClick={() => setJob(jo)}>{jo.title}</button>
                                    </li>
                                ))}
                            </ul>
                        </CSSTransition>
                    </SwitchTransition>

                    {job ? (

                        <SwitchTransition>
                            <CSSTransition
                                key={languaje.experience.title}
                                classNames="fade-right-1"
                                addEndListener={(node, done) =>
                                    node.addEventListener("transitionend", done, false)
                                }
                            >
                                <div className="job">
                                    <div className="title">
                                        <h4 className="position-job">{job.position}</h4>
                                        <h4 className="color-p "> {`@${job.company}`}</h4>
                                    </div>
                                    <p className="range">{job.range}</p>
                                    <ul>
                                        {job.description.map((task, i) => (
                                            <li key={i} >
                                                <RiArrowRightSFill className="icon" />
                                                <p>{task}</p>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </CSSTransition>
                        </SwitchTransition>
                    ) : null}
                </div>
            </div>
        </ExperienceBox>
    );
};
