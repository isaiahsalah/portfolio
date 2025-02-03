import { useEffect, useRef, useState } from 'react'
import { PaintBox } from '../../styles/Experiment/Paint.styles';

const PaintComp = () => {

    const [color, setColor] = useState("#d34778")
    const [grosor, setGrosor] = useState(5)
    const [isDrawing, setIsDrawing] = useState(false)
    const [lastX, setLastX] = useState(0)
    const [lastY, setLastY] = useState(0)
    const [opacity, setOpacity] = useState(1); // Estado para la opacidad

    // Ref para el canvas
    const canvasRef = useRef<HTMLCanvasElement | null>(null);
    const contextRef = useRef<CanvasRenderingContext2D | null>(null);



    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const context = canvas.getContext("2d");
        if (!context) return;

        const resizeCanvas = () => {
            const parent = canvas.parentElement;
            if (!parent) return;

            const width = parent.clientWidth;
            const height = parent.clientHeight;

            // Ajustar el tamaño del canvas al tamaño del contenedor
            canvas.width = width * window.devicePixelRatio;
            canvas.height = height * window.devicePixelRatio;

            /* const parentWidth = canvas.parentElement?.clientWidth ?? 0;
             const parentHeight = canvas.parentElement?.clientHeight ?? 0;
 
             // Ajusta el tamaño del canvas
             canvas.width = parentWidth * window.devicePixelRatio;
             canvas.height = parentHeight * window.devicePixelRatio;
 
 */
            // Escalar el contexto para pantallas de alta densidad
            context.scale(window.devicePixelRatio, window.devicePixelRatio);

            // Actualizar el contexto de referencia
            contextRef.current = context;
        };

        resizeCanvas();
        window.addEventListener("resize", resizeCanvas);

        return () => {
            window.removeEventListener("resize", resizeCanvas);
        };
    }, []);


    const onChangeGrosor = (event: React.ChangeEvent<HTMLInputElement>) => {
        setGrosor(Number(event.target.value))
    }

    const onChangeColor = (event: React.ChangeEvent<HTMLInputElement>) => {
        setColor(event.target.value);
    }

    const onChangeOpacity = (event: React.ChangeEvent<HTMLInputElement>) => {
        setOpacity(Number(event.target.value) / 100); // Convertir el rango de 0-100 a 0-1
    };

    const eventInit = (e: React.MouseEvent<HTMLCanvasElement> | React.TouchEvent<HTMLCanvasElement>) => {
        const { x, y } = getRelativeCoordinates(e.nativeEvent);

        // Establece las coordenadas iniciales del trazo
        setLastX(x);
        setLastY(y);

        // Activa el estado de dibujo
        setIsDrawing(true);
    };

    const eventDraw = (e: React.MouseEvent<HTMLCanvasElement> | React.TouchEvent<HTMLCanvasElement>) => {
        if (!isDrawing) return;

        const context = contextRef.current;
        if (!context) return;

        const { x, y } = getRelativeCoordinates(e.nativeEvent);

        console.log(lastX, lastY, x, y);
        draw(lastX, lastY, x, y);
        setLastX(x);
        setLastY(y);
    };
    const getRelativeCoordinates = (e: MouseEvent | TouchEvent) => {
        const canvas = canvasRef.current;
        if (!canvas) return { x: 0, y: 0 };

        const rect = canvas.getBoundingClientRect();
        let x = 0;
        let y = 0;

        if (e instanceof MouseEvent) {
            x = e.clientX - rect.left;
            y = e.clientY - rect.top;
        } else if (e instanceof TouchEvent && e.touches.length > 0) {
            x = e.touches[0].clientX - rect.left;
            y = e.touches[0].clientY - rect.top;
        }


        return { x, y };
    };

    const eventEnd = () => {

        setIsDrawing(false);
    };

    const draw = (x1: number, y1: number, x2: number, y2: number) => {

        const context = contextRef.current;
        if (!context) return;

        context.beginPath();
        context.lineJoin = "round";
        context.lineCap = "round";
        context.strokeStyle = color;
        context.lineWidth = grosor;
        context.globalAlpha = opacity; // Usar la opacidad seleccionada
        context.filter = "blur(0.5px)";
        context.moveTo(x1, y1);
        context.lineTo(x2, y2);
        context.stroke();
        context.closePath();

    };


    return (
        <PaintBox>
            <div className="lienzo-container">
                <canvas id="lienzo" ref={canvasRef}
                    onMouseDown={(e) => eventInit(e)}
                    onMouseMove={(e) => eventDraw(e)}
                    onMouseUp={eventEnd}
                    onMouseLeave={eventEnd}
                    onTouchStart={(e) => eventInit(e)}
                    onTouchMove={(e) => eventDraw(e)}
                    onTouchEnd={eventEnd}
                ></canvas>
            </div>

            <div className="inputs">
                <input id="color" type="color" value={color} onChange={onChangeColor} />
                <div className='range-cont'>

                    <input id="grosor" className='range-paint' type="range" min="1" max="100" value={grosor} onChange={onChangeGrosor} />
                    <p>grosor</p>
                </div>
                <div className='range-cont'>

                    <input
                        id="opacity"
                        className='range-paint'
                        type="range"
                        min="0"
                        max="100"
                        value={opacity * 100}
                        onChange={onChangeOpacity} />
                    <p>opacidad</p>
                </div>

            </div>
        </PaintBox>
    );
};

export default PaintComp