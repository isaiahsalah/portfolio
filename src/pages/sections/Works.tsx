import { useContext } from "react";
import { LanguajeContext } from "../../providers/LanguajeProvider";
import { CSSTransition, SwitchTransition } from "react-transition-group";
import { WorksBox } from "../../styles/Works.styles";

export const Works = () => {
    const { languaje } = useContext(LanguajeContext);

    const stateLanguage = (language: string, state: number) => {
        if (language === 'en') {
            switch (state) {
                case 1:
                    return "Planning";
                case 2:
                    return "Analysis";
                case 3:
                    return "Design";
                case 4:
                    return "Implementation";
                case 5:
                    return "Testing";
                case 6:
                    return "Deployment";
                case 7:
                    return "Maintenance";
                default:
                    return "";
            }
        }
        else {
            switch (state) {
                case 1:
                    return "Planificación";
                case 2:
                    return "Análisis";
                case 3:
                    return "Diseño";
                case 4:
                    return "Implementación";
                case 5:
                    return "Pruebas";
                case 6:
                    return "Despliegue";
                case 7:
                    return "Mantenimiento";
                default:
                    return "Planificación";
            }
        }

    }
    return (
        <WorksBox className="flex works" id="works">
            <div className="flex-area">
                <SwitchTransition>
                    <CSSTransition
                        key={languaje.banner.title}
                        classNames="fade-right-to-left-1"
                        addEndListener={(node, done) =>
                            node.addEventListener("transitionend", done, false)
                        }
                    >
                        <fieldset>
                            <legend>
                                <span className="color-p">03.</span> {languaje.works.title}
                            </legend>
                        </fieldset>
                    </CSSTransition>
                </SwitchTransition>
                <div className="works-div">
                    {languaje.works.work.map((work, i) =>
                        <SwitchTransition key={i}>
                            <CSSTransition
                                key={languaje.banner.title}
                                classNames={i % 2 === 0 ? "fade-left-to-right-1" : "fade-right-to-left-1"}
                                addEndListener={(node, done) =>
                                    node.addEventListener("transitionend", done, false)
                                }
                            >
                                <div className="work">
                                    {i % 2 === 0 ? (
                                        <div className="back-image back-image-0">
                                            <img src={work.image} alt="img" className="image" />
                                        </div>
                                    ) : null}
                                    <div className={`text ${i % 2 === 0 ? "text-0" : "text-1"}`}>
                                        <h4 className="title">{work.title}</h4>
                                        <p className="state-project">-{stateLanguage(languaje.lang, work.state)}-</p>
                                        <div>
                                            <p className="description-work">{work.description}</p>
                                        </div>
                                        <ul className={`tecno ${i % 2 === 0 ? "tecno-0" : "tecno-1"}`}>
                                            {work.tecnology.map((tecno, i) => (
                                                <li key={i}><p>{tecno}</p></li>
                                            ))}
                                        </ul>
                                        <ul className={`link ${i % 2 === 0 ? "link-0" : "link-1"}`}>
                                            {work.links.map((link, i) => (
                                                <li key={i}>
                                                    <a
                                                        className="link-button"
                                                        href={link.link}
                                                        target="_blanck"
                                                        title={link.title}
                                                    >
                                                        <link.icon className="icon" />
                                                    </a>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                    {i % 2 !== 0 ? (
                                        <div className={`back-image ${i % 2 === 0 ? "back-image-0" : "back-image-1"}`}>
                                            <img src={work.image} alt="img" className="image" />
                                        </div>
                                    ) : null}
                                </div>
                            </CSSTransition>
                        </SwitchTransition>
                    )}
                </div>
            </div>
        </WorksBox>
    );
};
