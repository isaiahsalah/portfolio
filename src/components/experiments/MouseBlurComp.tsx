import { useEffect } from 'react'
import { MouseBlurBox } from '../../styles/Experiment/MouseBlur.styles';

const MouseBlurComp = () => {



    useEffect(() => {
        const blob = document.getElementById("blob");
        const container = document.getElementById("blob-container");

        if (!blob || !container) return;

        const handlePointerMove = (event: PointerEvent) => {
            const rect = container.getBoundingClientRect();
            const x = Math.min(Math.max(event.clientX - rect.left, 0), rect.width);
            const y = Math.min(Math.max(event.clientY - rect.top, 0), rect.height);

            blob.style.left = `${x}px`;
            blob.style.top = `${y}px`;
        };

        container.addEventListener("pointermove", handlePointerMove);

        return () => {
            container.removeEventListener("pointermove", handlePointerMove);
        };
    }, []);


    return (
        <MouseBlurBox>
            <div id="blob-container">
                <div id="blob"></div>
                <div id="blur"></div>
                <div className="text">
                    <h1>Hello</h1>
                    <p>by Isaiah</p>
                </div>
            </div>

        </MouseBlurBox>
    );
};

export default MouseBlurComp