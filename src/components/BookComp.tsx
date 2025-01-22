import { useEffect, useState } from 'react'
import { RecuerdoData } from '../data/BookData';
import useSound from 'use-sound';
import paper1 from '../assets/sounds/paper1.mp3';
import paper2 from "../assets/sounds/paper2.mp3";
import paper3 from "../assets/sounds/paper3.mp3";
import { BookStyle } from '../styles/BookStyles';


const audiosPaper = [paper1, paper2, paper3];

const BookComp = () => {
    const [audio, setAudio] = useState(
        audiosPaper[Math.floor(Math.random() * audiosPaper.length)]
    );

    const [play] = useSound(audio, { volume: 0.7 });
    const onPaperClick = () => {
        setAudio(audiosPaper[Math.floor(Math.random() * audiosPaper.length)]);
        play();
    }

    useEffect(() => {

        const handleClick = (index: number) => {

            const book = document.querySelector('.book') as HTMLElement;
            const containerBook = document.querySelector('.container-book') as HTMLElement;
            const paper = document.querySelectorAll('.paper')[index] as HTMLElement;

            book.classList.add('open');
            containerBook.classList.add('open');
            paper.classList.add('open');

        };

        document.querySelectorAll('.front:not(.last)').forEach((element, index) => {
            element.addEventListener('click', () => handleClick(index));
        });

        document.querySelectorAll('.back').forEach((element) => {

            element.addEventListener('click', () => {
                const paper = element.parentElement as HTMLElement;

                // Verificar si el papel es el primero
                if (Array.from(paper.parentElement?.children || []).indexOf(paper) === 0) {
                    const book = document.querySelector('.book') as HTMLElement;
                    const containerBook = document.querySelector('.container-book') as HTMLElement;

                    containerBook.classList.remove('open');
                    book.classList.remove('open');
                }

                paper.classList.remove('open');
            });
        });
    }, []);

    return (
        <BookStyle>


            <div className="container-book">
                <div className="book">
                    {/*
                    <div className="first paper">
                        <div className="page front contents">
                            <div className="intro">
                                <h3>Sketch BOOK</h3>
                                <p className='p2'>If at first you don't succeed, try, try again</p>
                            </div>
                        </div>
                        <div className="page back"></div>
                    </div>
                    <div className="second paper">
                        <div className="page front contents">
                            <div id="vara-container"></div>
                        </div>
                        <div className="page back"></div>
                    </div>
                    */}
                    <div className="front-paper paper"
                        style={{
                            zIndex: (RecuerdoData.length + 5)
                        }}
                    >
                        <div className="page front contents"
                            style={{
                                transform: `translateZ(0.${(RecuerdoData.length + 5).toString().padStart(3, '0')}px)`
                            }}
                        >
                            <div className="intro">
                                <h3>Sketch BOOK</h3>
                                <p className='p2'>If at first you don't succeed, try, try again</p>
                            </div>
                        </div>
                        <div className="page back"
                            style={{
                                transform: `translateZ(0px)`
                            }}
                        >
                            <div className='back-text'>
                                <p className="p1">
                                    “Para Natalia,
                                    Con cariño en tu cumpleaños.
                                    Que cada página te brinde una sonrisa y un recuerdo especial.”
                                </p>
                            </div>

                        </div>
                    </div>

                    <div className="presentation-paper paper"
                        style={{
                            zIndex: (RecuerdoData.length + 4)
                        }}
                        onClick={onPaperClick}
                    >
                        <div className="page front contents"
                            style={{
                                transform: `translateZ(0.${(RecuerdoData.length + 4).toString().padStart(3, '0')}px)`
                            }}
                        >
                            <div id="presentation-container " className='vara-container'>
                                <div className="divider" />
                                <h3 className="title-container ">
                                    {
                                        Array.from("RECUERDO").map((char, i) => {
                                            return <div className="title" key={i}>
                                                {char === ' ' ? '\u00A0' : char}
                                            </div>
                                        })
                                    }

                                </h3>
                                <div className="flex">
                                    <div className="divider" />
                                    <p className="satisfy p2" style={{ paddingBlock: 0 }}>
                                        {"olissss"}
                                    </p>
                                    <div className="divider" />

                                </div>
                                <p className="subtitle-poema text-center p1">
                                    <em>
                                        «¡Que dichosa es la suerte de la vestal inocente!
                                        Al mundo olvida, por el mundo es olvidada
                                        ¡Eterno resplandor de una mente sin recuerdos!
                                        Cada plegaria aceptada, y cada deseo abandonado»
                                    </em>
                                    —Alexander Pope, Eloisa to Abelard.
                                </p>
                                <div className="divider" />
                                <div >
                                    <p className="p1" style={{ paddingBottom: 0 }}>
                                        Querida Natalia,

                                    </p>
                                    <p className="p1" style={{ paddingBottom: 0 }}>
                                        En tu cumpleaños, te entrego este librito hecho con mucho cariño, lleno de pensamientos y recuerdos, con la esperanza de que te brinde compañía y algo de consuelo en tus días. Cada página está hecha para celebrar lo especial que eres y para ofrecerte un respiro de luz y optimismo.
                                        Tu presencia y los momentos compartidos han dejado una huella significativa, y este libro es un pequeño reflejo de ese impacto.


                                    </p>
                                    <p className="p1">
                                        Feliz cumpleaños Nat. Que este regalo te recuerde lo valiosa que eres y te ofrezca un toque de cariño en cada página.
                                    </p>
                                </div>

                            </div>

                        </div>
                        <div className="page back"
                            style={{
                                transform: `translateZ(-0.1px)`
                            }}
                        >
                            <div className='vara-img-back-cont'
                                style={{
                                    zIndex: 1,
                                    transform: `scaleX(-1) rotate(${-10}deg)`,
                                    top: 0,
                                    right: 0,
                                    width: "40%",
                                }}
                            >
                                <img className='vara-img-back'
                                    src={RecuerdoData[0].image[0]} />
                            </div>
                            <div className='vara-img-back-cont'
                                style={{
                                    zIndex: 3,
                                    transform: `scaleX(-1) rotate(${-8}deg)`,
                                    left: 0,
                                    width: "35%"
                                }} >
                                <img className='vara-img-back'
                                    src={RecuerdoData[0].image[1]}
                                />
                            </div>

                            <div className='vara-img-back-cont'
                                style={{
                                    zIndex: 2,
                                    transform: `scaleX(-1) rotate(${15}deg)`,
                                    width: "40%",
                                    bottom: 0,
                                    right: 0,
                                }} >
                                <img className='vara-img-back'
                                    src={RecuerdoData[0].image[2]} />
                            </div>


                        </div>
                    </div>
                    {RecuerdoData.map((memory, i) => {
                        return (
                            <div key={i} className="paper" style={{
                                zIndex: (RecuerdoData.length + 3) - i
                            }} onClick={onPaperClick}>

                                <div className="page front contents">
                                    <div id={`vara-text-${i}`} className="vara-container">

                                        <p className='p3' style={{ fontWeight: 'bold' }}>
                                            {memory.title}
                                        </p>
                                        <div className='vara-top' >
                                            <p className='p1'
                                                style={{
                                                    order: 2,
                                                    fontWeight: 'bold',

                                                    paddingBottom: 0
                                                }}>

                                                <em >
                                                    "{memory.poema}"
                                                </em>
                                                -{memory.autor}

                                            </p>
                                            {
                                                /**
                                                  <img className='vara-img'
                                                                                                src={memory.image[0]}
                                                                                                style={{
                                                                                                    opacity: 0.8,
                                                                                                    order: (i % 2 === 0) ? 1 : 2,
                                                                                                    transform: `rotate(${(i % 3 === 0) ? 4 : (i % 2 === 0 ? 8 : -8)}deg)`
                                                                                                }} />
                                                 */
                                            }


                                        </div>

                                        <p className='p1' style={{ paddingBottom: 0 }}>
                                            {memory.oneDescription}
                                        </p>
                                        <p className='p1'>
                                            {memory.secondDescription}
                                        </p>

                                    </div>
                                </div>
                                <div className="page back"
                                    style={{
                                        transform: `translateZ(-${(0.1 * (i + 2))}px)`,
                                        display: 'flex',
                                        flexDirection: 'column',
                                        justifyContent: 'center',
                                        alignItems: 'center'
                                    }}
                                >
                                    {
                                        (i + 1) < RecuerdoData.length ? <>
                                            <div className='vara-img-back-cont'
                                                style={{
                                                    zIndex: 1,
                                                    transform: `scaleX(-1) rotate(${(i % 3 === 0) ? 6 : (i % 2 === 0 ? 10 : -10)}deg)`,
                                                    top: 0,
                                                    right: 0,
                                                    width: "40%",
                                                }}
                                            >
                                                <img className='vara-img-back'
                                                    src={RecuerdoData[i + 1].image[0]} />
                                            </div>
                                            <div className='vara-img-back-cont'
                                                style={{
                                                    zIndex: 3,
                                                    transform: `scaleX(-1) rotate(${(i % 3 === 0) ? -4 : (i % 2 === 0 ? 8 : -8)}deg)`,
                                                    left: 0,
                                                    width: "35%"
                                                }} >
                                                <img className='vara-img-back'
                                                    src={RecuerdoData[i + 1].image[1]}
                                                />
                                            </div>

                                            <div className='vara-img-back-cont'
                                                style={{
                                                    zIndex: 2,
                                                    transform: `scaleX(-1) rotate(${(i % 3 === 0) ? -8 : (i % 2 === 0 ? -15 : 15)}deg)`,
                                                    width: "40%",
                                                    bottom: 0,
                                                    right: 0,
                                                }} >
                                                <img className='vara-img-back'
                                                    src={RecuerdoData[i + 1].image[2]} />
                                            </div>
                                        </> : null
                                    }



                                </div>
                            </div>)
                    })}
                    {
                        /*
                        <div className="third paper">
                        <div className="page front contents">
                            <div id="vara-container2"></div>
                        </div>
                        <div className="page back"></div>
                    </div>
                    <div className="fourth paper">
                        <div className="page last front contents">
                            <div id="vara-container3"></div>
                        </div>
                        <div className="page back"></div>
                    </div>
                         */
                    }
                    <div className="final-paper paper" style={{
                        zIndex: 3
                    }}>
                        <div className="page last front contents">
                            <div className='vara-container'>

                                <p className="p1">
                                    Bueno, me hubiera gustado poner más cosas en el libro, tengo muchas paginas pendientes de hecho.
                                    Pero ya se me acabó el tiempo, como siempre. De igual manera, aunque pocos, todos los recuerdo aquí
                                    son un testimonio de la alegría que trajiste a mi vida.
                                    Espero que estas páginas te acompañen, con el mismo cariño que me ofreciste.

                                </p>
                                <p className="p1">
                                    Con gratitud,
                                </p>
                                <p className="p2">
                                    Isaias
                                </p>

                            </div>
                        </div>
                        <div className="page back">


                        </div>
                    </div>
                    <div className="side"></div>
                    <div className="bottom"></div>
                    <div className="shadow"></div>
                </div>
            </div>

        </BookStyle>
    );
}
export default BookComp