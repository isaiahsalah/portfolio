
import { useContext, useEffect, useState } from "react";
import { CassetteData } from "../data/CassetteData"
import useSound from "use-sound";
import { AudioContext } from "../providers/AudioProvider";
import { CassetteBox } from "../styles/CassetteStyles";

import cassettekey1 from "../assets/sounds/paper2.mp3";
import cassettekey2 from "../assets/sounds/paper2.mp3";
import cassettekey3 from "../assets/sounds/paper2.mp3";

const audiosCassetteTecla = [cassettekey1, cassettekey2, cassettekey3];

const CassetteComp = () => {

    const { setAudioFile, playAudio, stopAudio, isAudioPlaying } = useContext(AudioContext);

    const [when, setWhen] = useState(CassetteData[0]);
    const [transitionState, setTransitionState] = useState<string>("visible");

    const [audio, setAudio] = useState(
        audiosCassetteTecla[Math.floor(Math.random() * audiosCassetteTecla.length)]
    );

    const [play] = useSound(audio);

    const PlayCassette = (audio: string) => {
        if (!isAudioPlaying) {
            setAudioFile(audio);
            playAudio();
        } else {
            stopAudio();
            setAudioFile(audio);
            playAudio();


        }
    }

    const onAudioClick = (audio: string) => {
        setAudio(audiosCassetteTecla[Math.floor(Math.random() * audiosCassetteTecla.length)]);

        play();
        PlayCassette(audio)
    }

    useEffect(() => {
        if (transitionState === "transitioning") {
            const timer = requestAnimationFrame(() => {
                setTransitionState("visible");
            });
            return () => cancelAnimationFrame(timer);
        }
    }, [transitionState]);

    const handleKeyClick = (whenDatito: { title: string; description: string; audio: string; angulo: number; }) => {
        onAudioClick(whenDatito.audio)
        setTransitionState("transitioning-out");
        setTimeout(() => {
            setWhen(whenDatito);
            setTransitionState("transitioning");
        }, 200);
    };

    const getTransitionStyle = (): React.CSSProperties => {
        switch (transitionState) {
            case "visible":
                return {
                    opacity: 1,
                    filter: "blur(0)",
                    transition: "opacity 0.2s ease-in-out,,filter 0.2s ease-in-out",
                };
            case "transitioning":
            case "transitioning-out":
                return {
                    opacity: 0,
                    filter: "blur(5px)",
                    transition: "opacity 0.2s ease-in-out,filter 0.2s ease-in-out",
                };
            default:
                return {
                    opacity: 0,
                    filter: "blur(5px)",
                };
        }
    };



    /*
        const handleKeyClick = (whenDatito: WhenInterfaces) => {
    
            setWhen(whenDatito);
        };*/


    const handleClickMax = () => {

        const carta = document.querySelector('.cassette-container') as HTMLElement;

        //const perspectiva = carta.querySelector('#perspectiva') as HTMLElement;

        if (carta.classList.contains('open')) {
            carta.classList.remove('open');
        }
        else {
            carta.classList.add('open');
        }
    };

    useEffect(() => {

        const handleClickKey = () => {

            const carta = document.querySelector('.cassette') as HTMLElement;
            //const perspectiva = carta.querySelector('#perspectiva') as HTMLElement;

            if (!carta.classList.contains('animated')) {
                carta.classList.add('animated');
            }
        };

        const handleClickPlayer = () => {

            const carta = document.querySelector('.cassette') as HTMLElement;
            //const perspectiva = carta.querySelector('#perspectiva') as HTMLElement;

            if (carta.classList.contains('animated')) {
                carta.classList.remove('animated');
            }
        };



        const handleClick = () => {

            const carta = document.querySelector('.cassette-container') as HTMLElement;

            //const perspectiva = carta.querySelector('#perspectiva') as HTMLElement;

            if (!carta.classList.contains('open')) {
                carta.classList.add('open');
            }
        };




        document.querySelectorAll('.button-key').forEach((element) => {
            element.addEventListener('click', () => handleClick());
        });
        document.querySelectorAll('.button-key').forEach((element) => {
            element.addEventListener('click', () => handleClickKey());
        });

        document.querySelectorAll('.player-button').forEach((element) => {
            element.addEventListener('click', () => handleClickPlayer());
        });




    }, []);


    return (
        <CassetteBox >


            <div className="cassette-container ">
                <div className="cassette">
                    <div className="screw tr"></div>
                    <div className="screw tl"></div>
                    <div className="screw br"></div>
                    <div className="screw bl"></div>

                    <div className="top">

                    </div>


                    <div className="tape-cassette">
                        <div className="label">

                            <div className="text-container">
                                <p className="text-cassette p1" style={getTransitionStyle()}>{when.title}</p>
                                <div className="text-line"></div>
                            </div>

                            <div className="central">
                                <div className="tape left">
                                    <div className="arc">
                                        <div className="axis"></div>
                                    </div>
                                </div>
                                <div className="tape right">
                                    <div className="arc">
                                        <div className="axis"></div>
                                    </div>
                                </div>
                            </div>

                            <div className="text-marca-container">
                                <div className="text-marca-cassette" >
                                    <p className="text-marca p1">CA 2</p>
                                    <p className="text-marca p1">AM 3</p>

                                </div>

                                <div className="text-marca-line"></div>
                            </div>

                        </div>
                        <div className="bottom">
                            <div className="screw-dark"></div>
                            <div className="inner">
                                <div className="screw-dark"></div>

                                <div className="screw-dark"></div>
                            </div>
                            <div className="screw-dark"></div>
                        </div>

                    </div>
                    <div className="controls">
                        <div className="controls-button play"></div>
                        <div className="controls-button exit" onClick={handleClickMax}>

                        </div>

                    </div>


                    <div className="key-container">
                        <div className="key-footer">
                            <div className="key-line" />
                            <div className="key-text">
                                <p className="p3">DTX</p>
                                <p className="p1">Presiona una tecla</p>
                                <p className="p3">DTX</p>

                            </div>

                            <div className="key-line" />
                        </div>
                        <div className="keys">
                            {CassetteData.map((data, index) => (
                                <button key={index} className={`button-key `} onClick={() => handleKeyClick(data)}>
                                    <p style={{
                                        transform: `rotate(-${data.angulo}deg)`
                                    }} className="note-key p1">

                                        {data.description}

                                    </p>
                                </button>

                            ))}


                        </div>

                    </div>

                </div>

                <div className="bottom-cassette">

                </div>
                <div className="left-cassette">

                </div>
            </div>



        </CassetteBox>
    )
}

export default CassetteComp


