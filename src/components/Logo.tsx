import { useContext } from 'react'
import { LanguajeContext } from '../providers/LanguajeProvider'
import { CSSTransition, SwitchTransition } from 'react-transition-group'
export const Logo = () => {
    const { languaje } = useContext(LanguajeContext)

    return (

        <div className='logo-email'>
            <SwitchTransition>
                <CSSTransition
                    key={languaje.banner.title}
                    classNames="fade-top-1"
                    addEndListener={(node, done) =>
                        node.addEventListener("transitionend", done, false)
                    }
                >
                    <div className='logo-box'>
                        <div className='line-logo-top'></div>
                        {/*<img className='logo' src={logo} alt='a' />*/}
                        <div className='logo'>
                            <div>{"{"}</div>
                            <div className='logo-i'>{"i"}</div>
                            <div>{"}"}</div>
                        </div>
                        <div className='line-logo-bottom'></div>
                        <div className='email'> <a href='mailto:isasalas145@gmail.com' className='text-span'>Isasalas145@gmail.com</a></div>
                    </div>
                </CSSTransition>
            </SwitchTransition></div>
    )
}
