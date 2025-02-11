import { useContext } from 'react';
import { CSSTransition, SwitchTransition } from 'react-transition-group'
import { LanguajeContext } from '../providers/LanguajeProvider';
import { BsTranslate } from 'react-icons/bs';
import { EnglishLanguage, SpanishLanguage } from '../data/data';
import { Link } from 'react-router-dom';

export const MenuDesktop = () => {
    const { languaje, setLanguaje } = useContext(LanguajeContext);

    const changeLanguaje = () => {
        if (languaje.lang === "en") {
            setLanguaje(SpanishLanguage);
        } else {
            setLanguaje(EnglishLanguage);
        }
    }

    return (
        <ul className="nav-desktop" >
            {languaje.menu.map((men, i) => (
                <li className={`menu-li`} key={i}>
                    <SwitchTransition>
                        <CSSTransition
                            key={languaje.title}
                            classNames={`fade-top-${i + 1}`}
                            addEndListener={(node, done) =>
                                node.addEventListener("transitionend", done, false)
                            }
                        >

                            <Link className="menu-a" to={`/${men.link}`}>
                                <p className='color-p'>{`0${i + 1}.`}</p>
                                <p className="menu-title">{men.title}</p>
                            </Link>

                        </CSSTransition>
                    </SwitchTransition>
                </li>

            ))}
            <SwitchTransition>
                <CSSTransition
                    key={languaje.title}
                    classNames="fade-top-6"
                    addEndListener={(node, done) =>
                        node.addEventListener("transitionend", done, false)
                    }
                >
                    <li className="icon-li" onClick={changeLanguaje}>
                        <BsTranslate className="icon-language" />.
                        <p className="text-language">{languaje.title}</p>
                    </li>
                </CSSTransition></SwitchTransition>
        </ul>
    )
}
