import { useContext } from 'react'
import { SocialMedia } from '../../components/SocialMedia'
import { Logo } from '../../components/Logo';
import { LanguajeContext } from '../../providers/LanguajeProvider';
import { CSSTransition, SwitchTransition } from 'react-transition-group';
import { ContactBox } from '../../styles/Contact.styles';

export const Contact = () => {
    const { languaje } = useContext(LanguajeContext)

    const goContact = () => {

        // Cambia la URL de la red social a la que deseas dirigir
        const urlRedSocial = 'https://web.whatsapp.com/send/?phone=59170881108';

        // Abre la URL en una nueva ventana o pestaña
        const nuevaVentana = window.open(urlRedSocial, '_blank');
        if (!nuevaVentana) return
        nuevaVentana.focus();

    };

    return (
        <ContactBox className="flex contact" id="contact">
            <SwitchTransition>
                <CSSTransition
                    key={languaje.banner.title}
                    classNames="fade-1"
                    addEndListener={(node, done) =>
                        node.addEventListener("transitionend", done, false)
                    }
                >
                    <div className="flex-area">
                        <div className='view-area contact-contend'>

                            <fieldset>
                                <legend>
                                    <span className="color-p">05.</span> {languaje.contact.title}
                                </legend>
                            </fieldset>
                            <h2 className='title'>
                                {languaje.contact.subtitle}
                            </h2>
                            <p className='color-l'>
                                {languaje.contact.description}
                            </p>
                            <div>
                                <button onClick={goContact}> {languaje.contact.button}</button>
                            </div>


                        </div>
                    </div>
                </CSSTransition>
            </SwitchTransition>
            <Logo />

            <SocialMedia />


        </ContactBox>
    )
}
