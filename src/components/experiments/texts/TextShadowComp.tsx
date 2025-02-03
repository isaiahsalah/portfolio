import { useEffect, useRef } from 'react'
import { TextShadowBox } from '../../../styles/Experiment/texts/TextShadow.styles';

const TextShadowComp = () => {
    const shadowRef = useRef<HTMLDivElement>(null);
    const textRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const shadow = shadowRef.current;
        const text = textRef.current;

        if (shadow && text) {
            shadow.textContent = text.textContent || '';
            shadow.setAttribute('title', text.textContent || '');
        }

        const range = 18;

        const onPointerMove = (event: MouseEvent) => {
            const { clientX, clientY } = event;
            const x = Math.round(clientX * range / window.innerWidth) - range / 2;
            const y = Math.round(clientY * range / window.innerHeight) - range / 2;

            if (shadow) {
                shadow.style.setProperty('--x', `${x}px`);
                shadow.style.setProperty('--y', `${y}px`);
            }
        };

        window.addEventListener('pointermove', onPointerMove);

        return () => {
            window.removeEventListener('pointermove', onPointerMove);
        };
    }, []);

    return (


        <TextShadowBox>
            <h6 id="text" ref={textRef}>
                Sombrita Difuminada 🗿
            </h6>
            <h6 id="shadow" ref={shadowRef}></h6>


        </TextShadowBox>


    );
};

export default TextShadowComp