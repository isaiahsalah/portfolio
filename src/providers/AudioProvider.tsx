import { createContext, Dispatch, SetStateAction, useCallback, useEffect, useState } from 'react';
import { Howl } from 'howler';



type AudioContextProps = {
    playAudio: () => void;
    pauseAudio: () => void;
    stopAudio: () => void;
    isAudioPlaying: boolean;
    setAudioFile: Dispatch<SetStateAction<string>>;
    audioFile: string;
    setVolume: Dispatch<SetStateAction<number>>;
    volume: number;
}


export const AudioContext = createContext<AudioContextProps>(
    {
        playAudio: () => { },
        pauseAudio: () => { },
        stopAudio: () => { },
        isAudioPlaying: false,
        setAudioFile: () => { },
        audioFile: "",
        setVolume: () => { },
        volume: 0,

    } as AudioContextProps);

interface AudioProviderProps {
    children: JSX.Element | JSX.Element[];
}

export const AudioProvider = ({ children }: AudioProviderProps) => {
    const [audioFile, setAudioFile] = useState<string>('');
    const [volume, setVolume] = useState<number>(0.5);
    const [isAudioPlaying, setIsAudioPlaying] = useState(false);
    const [howl, setHowl] = useState<Howl | null>(null);

    useEffect(() => {
        if (audioFile) {
            // Si ya hay un sonido cargado, detenerlo y destruirlo
            if (howl) {
                howl.stop();
                howl.unload();
            }

            // Crear una nueva instancia de Howl con el nuevo archivo de audio
            const newHowl = new Howl({
                src: [audioFile],
                volume: volume,
                //onload: () => console.log('Audio loaded:', audioFile),
                onend: () => {
                    setIsAudioPlaying(false);
                }
            });
            setHowl(newHowl);
        }
    }, [audioFile]);

    useEffect(() => {
        playAudio()
    }, [howl]);

    // Actualizar el volumen cuando el estado `volume` cambie
    useEffect(() => {
        if (howl) {
            howl.volume(volume);
        }
    }, [volume, howl]);

    const playAudio = useCallback(() => {
        if (howl && audioFile) {
            howl.play();
            //console.log('Playing:', audioFile);
            setIsAudioPlaying(true);
        } else {
            //console.log('No cargo nada');
        }
    }, [howl, isAudioPlaying, audioFile]);

    const pauseAudio = useCallback(() => {
        if (howl && isAudioPlaying) {
            howl.pause();
            setIsAudioPlaying(false);
        }
    }, [howl, isAudioPlaying]);

    const stopAudio = useCallback(() => {
        if (howl && isAudioPlaying) {
            howl.stop();
            setIsAudioPlaying(false);
        }
    }, [howl, isAudioPlaying]);

    return (
        <AudioContext.Provider value={{ playAudio, pauseAudio, stopAudio, isAudioPlaying, setAudioFile, audioFile, setVolume, volume, }}>
            {children}
        </AudioContext.Provider>
    );
};