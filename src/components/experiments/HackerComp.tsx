import React, { useRef, useState } from "react";
import { HackerBox } from "../../styles/Experiment/texts/Hacker.styles";

const Abc = "abcdefghijklmnñopkrstuvwxyzABCDEFGHIJKLMNÑOPKRSTUVWXYZ0123456789";

const HackerComp = () => {
    const [effectEnabled, setEffectEnabled] = useState(true);
    const originalTextRef = useRef<string>("Hoy es ???");

    // Obtener la fecha actual
    const fechaActual = new Date();
    const dia = fechaActual.getDate();
    const mes = fechaActual.getMonth();
    const anio = fechaActual.getFullYear();
    const fecha = new Date(anio, mes, dia);

    const fechaFormateada = fecha.toLocaleDateString("es-ES", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
    });

    const effect = (
        element: HTMLElement,
        newText: string,
        intervalMs: number,
        interactionAdd: number,
        endCallback: () => void
    ) => {
        let interactions = 0;
        const interval = setInterval(() => {
            const currentText = element.innerText.split("").map((_char, i) => {
                if (i < Math.floor(interactions)) {
                    return newText[i];
                }
                return Abc[Math.floor(Math.random() * Abc.length)];
            });
            element.innerText = currentText.join("");

            if (interactions >= newText.length) {
                clearInterval(interval);
                endCallback();
            }
            interactions += 1 / interactionAdd;
        }, intervalMs);
    };

    const handleMouseOver = (event: React.MouseEvent<HTMLHeadingElement>) => {
        if (effectEnabled) {
            setEffectEnabled(false);
            const target = event.currentTarget;

            effect(target, fechaFormateada, 10, 20, () => {
                setTimeout(() => {
                    effect(target, originalTextRef.current, 10, 5, () => {
                        setEffectEnabled(true);
                    });
                }, 500);
            });
        }
    };
    return (
        <HackerBox>
            <h6 id="letrita" onMouseOver={handleMouseOver} >
                Hoy es ???
            </h6>
        </HackerBox>
    )
}

export default HackerComp