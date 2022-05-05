import { React } from 'react';
import { Stage, Layer, Line } from 'react-konva';
import { useEffect, useState, useRef } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import AppRoutes from '../types/Routes';

const DrawArea = ({onClearLines, clearLines}) => {


    // recieve the data from the previous component
    const { state } = useLocation();
    const { word, sessionId } = state;

    
    const [lines, setLines] = useState([]);
    // usage in handleMouseUp and handleMouthDown - 
    const isDrawing = useRef(false);
    const stageRef = useRef(null)
    
    // create a navigation option 
    const navigate = useNavigate()

    // create an effect to start drawing 
    useEffect(() => {
        //loadImage();
    }, [clearLines])
    
    // function that declares the mouse has been lifted
    const handleMouseDown = (e) => {
        isDrawing.current = true;
        const pos = e.target.getStage().getPointerPosition();
        setLines([...lines, { points: [pos.x, pos.y] }]);
    };
    
    // function that declates the mouse is moving while being down
    const handleMouseMove = (e) => {
        // no drawing - skipping
        if (!isDrawing.current) {
          return;
        }
        const stage = e.target.getStage();
        const point = stage.getPointerPosition();
    
        // To draw line
        let lastLine = lines[lines.length - 1];
        
        if(lastLine) {
            // add point
            lastLine.points = lastLine.points.concat([point.x, point.y]);
                
            // replace last
            lines.splice(lines.length - 1, 1, lastLine);
            setLines(lines.concat());
        }

    };
    // function that declares the mouse has been lifted and it is not drawing anymore
    const handleMouseUp = () => {
        isDrawing.current = false;
    };

    // function to navigate to the next component while passing the data
    const onClickSend =async  () =>{
        const uri = stageRef.current.toDataURL();
        console.log(uri)
        navigate(AppRoutes.Wating, {state: {uri:uri, word:word}})


        const result = await fetch('http://localhost:8080/finish', { method: 'POST', body: JSON.stringify({ userName, type, sessionId }) })
        const data = await result.json();
        const { shouldWait } = data ?? {}
        
    }

    return (
        <div className=" text-center text-dark">
            {/* stage defines the drawing area */}
            <h1>Draw {word}:</h1>
            <Stage
                width={500}
                height={500}
                onMouseDown={handleMouseDown}
                onMousemove={handleMouseMove}
                onMouseup={handleMouseUp}
                className="canvas-stage"
                ref={stageRef}
            >
                {/* Layer  */}
                <Layer>
                    {lines.map((line, i) => (
                        <Line
                        key={i}
                        points={line.points}
                        stroke="#ae26df"
                        strokeWidth={2}
                        tension={0.5}
                        lineCap="round"
                        globalCompositeOperation={
                            line.tool === 'eraser' ? 'destination-out' : 'source-over'
                        }
                        />
                    ))}
                </Layer>
            </Stage>
            <button className='btn btn-danger' onClick={onClickSend}>SEND</button>
        </div>
    )
}

export default DrawArea
