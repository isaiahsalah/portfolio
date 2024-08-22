import { useContext } from "react";
import { BannerBox } from "../../styles/Banner.styles";
import { LanguajeContext } from "../../providers/LanguajeProvider";
import { CSSTransition, SwitchTransition } from "react-transition-group";


export const Banner = () => {
    const { languaje } = useContext(LanguajeContext);


    const downloadCV = () => {
        const enlaceDescarga = document.createElement('a');
        enlaceDescarga.href = "./assets/documents/CV.pdf";
        enlaceDescarga.target = '_blank';
        enlaceDescarga.download = 'Isaias Salas Montesinos.pdf';

        document.body.appendChild(enlaceDescarga);
        enlaceDescarga.click();
        document.body.removeChild(enlaceDescarga);
    };

    return (
        <BannerBox className="flex banner" id="banner">
            <div className="banner-div"  >
                <SwitchTransition>
                    <CSSTransition
                        key={languaje.banner.title}
                        classNames="fade-left-to-right-5"
                        addEndListener={(node, done) =>
                            node.addEventListener("transitionend", done, false)
                        }
                    >
                        <div className="banner-line"></div>
                    </CSSTransition>
                </SwitchTransition>
                <div>
                    <SwitchTransition>
                        <CSSTransition
                            key={languaje.banner.title}
                            classNames="fade-left-to-right-1"
                            addEndListener={(node, done) =>
                                node.addEventListener("transitionend", done, false)
                            }
                        >
                            <h6 className="color-p">{languaje.banner.title}</h6>
                        </CSSTransition>
                    </SwitchTransition>

                    <SwitchTransition>
                        <CSSTransition
                            key={languaje.banner.title}
                            classNames="fade-left-to-right-2"
                            addEndListener={(node, done) =>
                                node.addEventListener("transitionend", done, false)
                            }
                        >
                            <h1>Isaias Salas</h1>
                        </CSSTransition>
                    </SwitchTransition>

                    <SwitchTransition>
                        <CSSTransition
                            key={languaje.banner.title}
                            classNames="fade-left-to-right-3"
                            addEndListener={(node, done) =>
                                node.addEventListener("transitionend", done, false)
                            }
                        >
                            <h3 className="color-l">{languaje.banner.subtitle}</h3>
                        </CSSTransition>
                    </SwitchTransition>

                    <SwitchTransition>
                        <CSSTransition
                            key={languaje.banner.title}
                            classNames="fade-left-to-right-4"
                            addEndListener={(node, done) =>
                                node.addEventListener("transitionend", done, false)
                            }
                        >
                            <p>{languaje.banner.description}</p>
                        </CSSTransition>
                    </SwitchTransition>
                    <SwitchTransition>
                        <CSSTransition
                            key={languaje.banner.title}
                            classNames="fade-left-to-right-5"
                            addEndListener={(node, done) =>
                                node.addEventListener("transitionend", done, false)
                            }
                        >
                            <button onClick={downloadCV}>
                                <div className="text-button">{languaje.banner.button}</div>
                            </button>
                        </CSSTransition>
                    </SwitchTransition>
                </div>
            </div>
        </BannerBox>
    );
};
