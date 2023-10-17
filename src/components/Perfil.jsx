import React, { useContext } from 'react'
import { CSSTransition, SwitchTransition } from 'react-transition-group'
import { LanguajeContext } from '../providers/LanguajeProvider';

export const Perfil = () => {
    const { languaje } = useContext(LanguajeContext);

    return (
        <>
            <SwitchTransition>
                <CSSTransition
                    key={languaje.about.title}
                    classNames="fade-left-1"
                    addEndListener={(node, done) =>
                        node.addEventListener("transitionend", done, false)
                    }
                >
                    <div className="description">
                        <p>{languaje.about.description1}</p>
                        <p>{languaje.about.description2}</p>
                        <p>{languaje.about.description3}</p>

                    </div>
                </CSSTransition>
            </SwitchTransition>
            <SwitchTransition>
                <CSSTransition
                    key={languaje.about.title}
                    classNames="fade-right-3"
                    addEndListener={(node, done) =>
                        node.addEventListener("transitionend", done, false)
                    }
                >
                    <div className="back-image">
                        <img
                            className='image'
                            src="./assets/images/perfil.jpeg"
                            alt="ola"
                        ></img>
                    </div>
                </CSSTransition>
            </SwitchTransition>
        </>

    )
}
