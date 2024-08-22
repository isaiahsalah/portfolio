import { useContext } from 'react'
import { CSSTransition, SwitchTransition } from 'react-transition-group'
import { LanguajeContext } from '../providers/LanguajeProvider'
import { MySocialMedia } from '../utils/config'

export const SocialMedia = () => {
    const { languaje } = useContext(LanguajeContext)

    return (
        <div className='social-media'>
            <SwitchTransition>
                <CSSTransition
                    key={languaje.banner.title}
                    classNames="fade-bottom-1"
                    addEndListener={(node, done) =>
                        node.addEventListener("transitionend", done, false)
                    }
                >
                    <div className='social-media-box'>

                        <ul>
                            {MySocialMedia.map((social, i) =>
                                <li key={i} title={social.title}>
                                    <a href={social.link} target='_blanck'>
                                        <social.icon className='icon' />
                                    </a>
                                </li>)}
                        </ul>
                        <div className='line'></div>
                    </div>
                </CSSTransition>
            </SwitchTransition>
        </div>

    )
}
