import { useContext } from 'react'
import { FooterBox } from '../../styles/Footer.styles'
import { LanguajeContext } from '../../providers/LanguajeProvider'
import { CSSTransition, SwitchTransition } from 'react-transition-group'

export const Footer = () => {
    const { languaje } = useContext(LanguajeContext)

    return (
        <FooterBox className='flex'>
            <SwitchTransition>
                <CSSTransition
                    key={languaje.banner.title}
                    classNames="fade-bottom-1"
                    addEndListener={(node, done) =>
                        node.addEventListener("transitionend", done, false)
                    }
                >
                    <div className='flex-area'>
                        <p className='by'>{languaje.footer} - 2024</p>

                    </div>
                </CSSTransition>
            </SwitchTransition>

        </FooterBox>
    )
}
