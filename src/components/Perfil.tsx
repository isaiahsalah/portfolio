import { HTMLAttributes, useContext, useEffect, useState } from 'react'
import { CSSTransition, SwitchTransition } from 'react-transition-group'
import { LanguajeContext } from '../providers/LanguajeProvider';
import perfil1 from '../assets/images/perfil1.jpg';
import perfil2 from '../assets/images/perfil2.jpg';
import perfil3 from '../assets/images/perfil3.jpg';

interface PerfilProps extends HTMLAttributes<HTMLDivElement> { }

const images = [
    perfil1,
    perfil2,
    perfil3
];

export const Perfil: React.FC<PerfilProps> = () => {
    const { languaje } = useContext(LanguajeContext);
    const [currentIndex, setCurrentIndex] = useState(0);

    // Cambiar imagen cada 3 segundos (3000 ms)
    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 3000);

        // Limpiar intervalo cuando el componente se desmonte
        return () => clearInterval(intervalId);
    }, []);
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
                    <div className="container-image">

                        <div className='container-image-profile'>
                            {images.map((image, index) => (
                                <img
                                    key={index}
                                    className='image-profile'
                                    src={image}
                                    alt={`carousel image ${index + 1}`}
                                    style={{
                                        position: 'absolute',
                                        top: 0,
                                        left: 0,
                                        width: '100%',
                                        height: '100%',
                                        objectFit: 'cover',
                                        transition: 'opacity 2s ease, filter 2s ease',
                                        opacity: index === currentIndex ? 1 : 0, // Cambia la opacidad
                                        filter: index === currentIndex ? 'blur(0px)' : 'blur(5px)', // Aplica desenfoque
                                    }}
                                />
                            ))}
                        </div>

                    </div>
                </CSSTransition>
            </SwitchTransition>
        </>

    )
}
