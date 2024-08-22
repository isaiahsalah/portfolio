import { useContext, useEffect, useState } from "react";
import { RiArrowRightSFill } from "react-icons/ri";
import { LanguajeContext } from "../../providers/LanguajeProvider";
import { CSSTransition, SwitchTransition } from "react-transition-group";
import { ExperienceBox } from "../../styles/Experience.styles";

export const Experience = () => {
  const { languaje } = useContext(LanguajeContext);
  const [job, setJob] = useState(languaje.experiences.experience[0]);
  useEffect(() => {
    setJob(languaje.experiences.experience[0]);
  }, [languaje.experiences.experience]);

  return (
    <ExperienceBox className="flex experience" id="experience">
      <div className="flex-area">
        <SwitchTransition>
          <CSSTransition
            key={languaje.banner.title}
            classNames="fade-left-to-right-1"
            addEndListener={(node, done) =>
              node.addEventListener("transitionend", done, false)
            }
          >
            <fieldset>
              <legend>
                <span className="color-p">02.</span> {languaje.experiences.title}
              </legend>
            </fieldset>
          </CSSTransition>
        </SwitchTransition>

        <div className="job-nav">
          <SwitchTransition>
            <CSSTransition
              key={languaje.experiences.title}
              classNames="fade-left-1"
              addEndListener={(node, done) =>
                node.addEventListener("transitionend", done, false)
              }
            >
              <ul className="job-ul">
                {languaje.experiences.experience.map((jo, i) => (
                  <li className="job-li" key={i}>
                    <button onClick={() => setJob(jo)}>{jo.title}</button>
                  </li>
                ))}
              </ul>
            </CSSTransition>
          </SwitchTransition>

          {job ? (
            <SwitchTransition>
              <CSSTransition
                key={languaje.experiences.title}
                classNames="fade-right-1"
                addEndListener={(node, done) =>
                  node.addEventListener("transitionend", done, false)
                }
              >
                <div className="job">
                  <div className="title">
                    <h4 className="position-job">{job.position}</h4>
                  </div>
                  <p className="range">{job.range}</p>
                  <ul>
                    {job.description.map((task, i) => (
                      <li key={i}>
                        <RiArrowRightSFill className="icon" />
                        <p>{task}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              </CSSTransition>
            </SwitchTransition>
          ) : null}
        </div>
      </div>
    </ExperienceBox>
  );
};
