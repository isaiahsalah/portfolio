import { HTMLAttributes, useContext } from 'react'
import { CSSTransition, SwitchTransition } from 'react-transition-group'
import { LanguajeContext } from '../providers/LanguajeProvider';
import Profile from '/images/perfil.jpg';

interface PerfilProps extends HTMLAttributes<HTMLDivElement> { }


export const Perfil: React.FC<PerfilProps> = () => {
    const { languaje } = useContext(LanguajeContext);

    return (
        < >
            <SwitchTransition>
                <CSSTransition
                    key={languaje.about.title}
                    classNames="fade-left-1"
                    addEndListener={(node, done) =>
                        node.addEventListener("transitionend", done, false)
                    }
                >
                    <div className="description">
                        <p>{languaje.about.paragraph1}</p>
                        <p>{languaje.about.paragraph2}</p>
                        <p>{languaje.about.paragraph3}</p>

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
                            src={Profile}
                            alt="profile"
                        ></img>
                    </div>
                </CSSTransition>
            </SwitchTransition>
        </>

    )
}
