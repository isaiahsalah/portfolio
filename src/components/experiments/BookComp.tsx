import { useEffect, useState } from 'react'
import { RecuerdoData } from '../../data/BookData';
import useSound from 'use-sound';
import paper1 from '../../assets/sounds/paper1.mp3';
import paper2 from "../../assets/sounds/paper2.mp3";
import paper3 from "../../assets/sounds/paper3.mp3";
import { BookStyle } from '../../styles/Experiment/Book.styles';


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
            const back = document.querySelector('.background-container') as HTMLElement;

            const containerBook = document.querySelector('.container-book') as HTMLElement;
            const paper = document.querySelectorAll('.paper')[index] as HTMLElement;

            book.classList.add('open');
            back.classList.add('open');
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
                    const back = document.querySelector('.background-container') as HTMLElement;

                    const containerBook = document.querySelector('.container-book') as HTMLElement;

                    containerBook.classList.remove('open');
                    book.classList.remove('open');
                    back.classList.remove('open');

                }

                paper.classList.remove('open');
            });
        });
    }, []);

    return (
        <BookStyle>

            <div className="container-book">


                <div className="book">
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
                                <h3 className='title-book'> Librito</h3>
                                <h4 className='subtitle-book'>Bla bla bla bla blaaa</h4>
                            </div>
                        </div>
                        <div className="page back"
                            style={{
                                transform: `translateZ(0px)`
                            }}
                        >
                            <div className='back-text'>
                                <p className="p1">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque a hendrerit magna. Integer sed tempor ante. Etiam diam sem, varius eu aliquam at, condimentum at lectus. Morbi nisl velit, semper a maximus at, auctor vel massa. Curabitur convallis suscipit neque, vitae eleifend enim viverra non. Donec et massa non ligula ultrices luctus sed at ligula. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Ut elementum eros vitae tellus dignissim, quis viverra ante tincidunt. Aenean lacinia libero lectus, et efficitur dolor malesuada sed. Fusce consequat quam sed rutrum maximus. Etiam aliquam interdum mauris, nec mattis justo egestas lacinia. Quisque at odio convallis, gravida justo sit amet, faucibus felis.                                </p>
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
                                        Array.from("Lorem Ipsum").map((char, i) => {
                                            return <div className="title" key={i}>
                                                {char === ' ' ? '\u00A0' : char}
                                            </div>
                                        })
                                    }

                                </h3>
                                <div className="flex">
                                    <div className="divider" />
                                    <p className="satisfy p2" style={{ paddingBlock: 0 }}>
                                        {"Hi"}
                                    </p>
                                    <div className="divider" />

                                </div>
                                <p className="subtitle-poema text-center p1">
                                    <em>
                                        «Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...»
                                    </em>
                                    —Alexander Pope, Eloisa to Abelard.
                                </p>
                                <div className="divider" />
                                <div >
                                    <p className="p1" style={{ paddingBottom: 0 }}>
                                        ¿Lorem Ipsum?


                                    </p>
                                    <p className="p1" style={{ paddingBottom: 0 }}>
                                        Nam vulputate sollicitudin erat, ac blandit ex. Nullam dapibus lectus ut sapien scelerisque, a imperdiet quam lobortis. Integer vehicula sapien vitae est mattis, congue pellentesque eros mattis. Sed auctor sapien non dui hendrerit lobortis. Mauris ac feugiat dolor. Proin quis erat elementum, tristique justo vel, fringilla eros. Morbi turpis purus, volutpat non lobortis nec, viverra eu velit. Fusce pellentesque molestie ante vitae aliquam. Nulla ultrices nisi quis urna porttitor, vitae porta turpis malesuada.
                                    </p>
                                    <p className="p1">
                                        Sed efficitur dui eros, ut mollis dui vestibulum at. Nulla quis sodales nulla. Mauris imperdiet pretium quam et aliquet. Sed felis lectus, hendrerit vel nisl et, iaculis viverra velit.
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
                    <div className="final-paper paper" style={{
                        zIndex: 3
                    }}>
                        <div className="page last front contents">
                            <div className='vara-container'>

                                <p className="p1">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque a hendrerit magna. Integer sed tempor ante. Etiam diam sem, varius eu aliquam at, condimentum at lectus. Morbi nisl velit, semper a maximus at, auctor vel massa. Curabitur convallis suscipit neque, vitae eleifend enim viverra non. Donec et massa non ligula ultrices luctus sed at ligula. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Ut elementum eros vitae tellus dignissim, quis viverra ante tincidunt. Aenean lacinia libero lectus, et efficitur dolor malesuada sed. Fusce consequat quam sed rutrum maximus. Etiam aliquam interdum mauris, nec mattis justo egestas lacinia. Quisque at odio convallis, gravida justo sit amet, faucibus felis.                                </p>
                                <p className="p1">
                                    Desarrolado por:
                                </p>
                                <p className="p2">
                                    Isaiah Salah
                                </p>

                            </div>
                        </div>
                        <div className="page back">


                        </div>
                    </div>
                    <div className="side"></div>
                    <div className="bottom"></div>

                </div>
                <div className='background-container'>
                    <div className="shadow"></div>
                    <div className="shadow-paper"></div>
                    <div className='background-book' />
                </div>
            </div>

        </BookStyle>
    );
}
export default BookComp