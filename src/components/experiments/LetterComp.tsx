import { useEffect } from 'react'
import { audiosCarta, LetterData } from '../../data/LetterData';
import { LettersBox } from '../../styles/Experiment/LetterStyles';



const ColorsApp = {
    green: "#24310E",
    yellow: "#E9E1D1",
    brown: "#AF8654",
    red: "#E0A289",
    gray: "#41392E",
    blue: "#042B27",
    black: "#1A1A1A",
    white: "#F5F5F5",
};


const LetterComp = () => {
    const playSound = () => {
        const randomIndex = Math.floor(Math.random() * audiosCarta.length);
        const sound = new Howl({
            src: [audiosCarta[randomIndex]],
            volume: 0.75,
            /*onload: () => {
                console.log('Sound loaded:', audiosCarta[randomIndex]);
            },
            onplayerror: (id, error) => {
                console.error('Play error:', error, id);
            }*/
        });
        sound.play();
    };



    useEffect(() => {



        const handleClick = (index: number) => {
            const carta = document.querySelectorAll('.sobre')[index] as HTMLElement;

            //const perspectiva = carta.querySelector('#perspectiva') as HTMLElement;

            if (carta.classList.contains('hover') && carta.classList.contains('open')) {
                carta.classList.remove('open');
                carta.classList.remove('hover');
                playSound()
            }
            else {

                if (carta.classList.contains('hover')) {
                    carta.classList.add('open');
                    playSound()
                } else {
                    carta.classList.add('hover');

                }

            }
        };
        const handleClickRigth = (index: number) => {

            const carta = document.querySelectorAll('.sobre')[index] as HTMLElement;
            //const perspectiva = carta.querySelector('#perspectiva') as HTMLElement;

            if (carta.classList.contains('hover') && !carta.classList.contains('open')) {
                carta.classList.remove('hover');
            }
        };

        document.querySelectorAll('.sobre').forEach((element, index) => {
            element.addEventListener('click', () => handleClick(index));
            element.addEventListener('contextmenu', () => {
                /* @ts-expect-error ola */
                event.preventDefault();
                handleClickRigth(index)
            });
        });
    }, []);


    //onClick={handleClick}

    return (
        <LettersBox >
            <div className='letters-container'>


                <div className='box-letters '>
                    <div className="bottom-box">
                        <h6 className="title-letters ">
                            Pensamiento
                        </h6>
                    </div>
                    <div className="left-box">
                    </div>
                    {LetterData.map((note, i) => (
                        <div className="sobre" key={i}
                            style={{
                                transform: ` translateZ(${(i + .1) * 8}px)`,
                            }}
                        >
                            <div className="perspectiva-sobre" >
                                <div className="contenedor-sobre" style={{ boxShadow: i === 0 ? "none" : ` -5px 0px 5px 0px ${ColorsApp.gray}` }}>
                                    <div className="cara frontal">
                                        <img
                                            style={{
                                                transform: `rotate(${(i % 3 === 0) ? 4 : (i % 2 === 0 ? 8 : -8)}deg)`,
                                            }}
                                            src={note.image} />
                                        <p className='p3'>{note.title}</p>
                                        <p className='p1'>{note.Date.toLocaleDateString('es-ES', {
                                            weekday: 'long',
                                            year: 'numeric',
                                            month: 'long',
                                            day: 'numeric',
                                        })}</p>
                                    </div>
                                    <div className="cara trasera">
                                        <div id="abrir"></div>
                                        <div id="partes"></div>
                                        <div className="carta">
                                            <hgroup>
                                                <p className='p2'>{note.title}</p>
                                                <p className='p carta-date ' >{note.Date.toLocaleDateString('es-ES')}</p>
                                            </hgroup>
                                            <p className='p '>{note.oneDescription}</p>
                                            <p className='p '>{note.secondDescription}</p>

                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    ))}

                    <div className="top-box"></div>

                    <div className="right-box"></div>
                    <div className="floor-box"></div>

                    <div className="shadow-box"></div>

                </div>



            </div>


        </LettersBox>
    );
}

export default LetterComp