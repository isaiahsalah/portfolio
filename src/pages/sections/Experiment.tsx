import { useContext } from "react";
import { LanguajeContext } from "../../providers/LanguajeProvider";
import { CSSTransition, SwitchTransition } from "react-transition-group";
import { ExperimentBox } from "../../styles/Experiment.styles";


export const Experiment = () => {
    const { languaje } = useContext(LanguajeContext);

    return (
        <ExperimentBox className="flex experiments" id="experiments">
            <div className="flex-area">
                <SwitchTransition>
                    <CSSTransition
                        key={languaje.banner.title}
                        classNames="fade-top-1"
                        addEndListener={(node, done) =>
                            node.addEventListener("transitionend", done, false)
                        }
                    >
                        <fieldset>
                            <legend>
                                <span className="color-p">03.</span> {languaje.experiments.title}
                            </legend>
                        </fieldset>
                    </CSSTransition>
                </SwitchTransition>

                <div className="list">
                    {languaje.experiments.experiment.map((experiment, i) =>
                        <SwitchTransition key={i}>
                            <CSSTransition
                                key={languaje.banner.title}
                                classNames={i % 2 === 0 ? "fade-left-to-right-1" : "fade-right-to-left-1"}
                                addEndListener={(node, done) =>
                                    node.addEventListener("transitionend", done, false)
                                }
                            >

                                <div className="item" key={i}>
                                    <div className={`item-experiment ${i % 2 == 0 ? "first-experiment" : "last-experiment"}`}  >
                                        <div className="experiment">
                                            <experiment.comp />
                                        </div>
                                    </div>

                                    <div className="item-description" style={{ order: 2 }}>
                                        <h6>{experiment.title}</h6>
                                        <p >
                                            {experiment.description}                                            </p>
                                    </div>
                                </div>
                            </CSSTransition>
                        </SwitchTransition>
                    )}

                </div>

            </div>
        </ExperimentBox>
    );
};
