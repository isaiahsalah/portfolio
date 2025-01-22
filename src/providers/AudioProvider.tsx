import { createContext, Dispatch, SetStateAction, useCallback, useEffect, useState } from 'react';
import { Howl } from 'howler';



type AudioContextProps = {
    playAudio: () => void;
    stopAudio: () => void;
    isAudioPlaying: boolean;
    setAudioFile: Dispatch<SetStateAction<string>>;
    audioFile: string;

}


export const AudioContext = createContext<AudioContextProps>(
    {
        playAudio: () => { },
        stopAudio: () => { },
        isAudioPlaying: false,
        setAudioFile: () => { },
        audioFile: ""
    } as AudioContextProps);

interface AudioProviderProps {
    children: JSX.Element | JSX.Element[];
}

export const AudioProvider = ({ children }: AudioProviderProps) => {
    const [audioFile, setAudioFile] = useState<string>('');
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
                volume: 0.9,
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

    const playAudio = useCallback(() => {
        if (howl && audioFile) {
            howl.play();
            //console.log('Playing:', audioFile);
            setIsAudioPlaying(true);
        } else {
            //console.log('No cargo nada');

        }
    }, [howl, isAudioPlaying, audioFile]);

    const stopAudio = useCallback(() => {
        if (howl && isAudioPlaying) {
            howl.stop();
            setIsAudioPlaying(false);
        }
    }, [howl, isAudioPlaying]);

    return (
        <AudioContext.Provider value={{ playAudio, stopAudio, isAudioPlaying, setAudioFile, audioFile }}>
            {children}
        </AudioContext.Provider>
    );
};