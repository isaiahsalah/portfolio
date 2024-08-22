import { useContext } from "react";
import { AboutBox } from "../../styles/About.styles";
import { LanguajeContext } from "../../providers/LanguajeProvider";
import { CSSTransition, SwitchTransition } from "react-transition-group";
import { Skills } from "../../components/Skills";
import { Perfil } from "../../components/Perfil";

export const About = () => {
    const { languaje } = useContext(LanguajeContext);

    return (
        <AboutBox className="flex about" id="about">
            <div className="flex-area">
                <SwitchTransition>
                    <CSSTransition
                        key={languaje.about.title}
                        classNames="fade-top-1"
                        addEndListener={(node, done) =>
                            node.addEventListener("transitionend", done, false)
                        }
                    >
                        <fieldset>
                            <legend>
                                <span className="color-p">01.</span> {languaje.about.title}
                            </legend>
                        </fieldset>
                    </CSSTransition>
                </SwitchTransition>
                <Perfil className='perfil' />

                <Skills />
            </div>
        </AboutBox>
    );
};
