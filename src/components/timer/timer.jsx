
import React from "react";
import "./timer.css";

const CountDown = (props) => {
    const {
        minutes = 20,
        seconds = 0,
        getTimerInfo,
        isOver,
        resultInfo
    } = props

    const [over, setOver] = React.useState(isOver);
    const [[m, s], setTime] = React.useState([minutes, seconds]);

    const tick = () => {

        if ((m === 0 && s === 0) || isOver) {
            setOver(true);
        } else if (m === 0 && s === 0) {
            setTime([59, 59]);
        } else if (s === 0) {
            setTime([m - 1, 59]);
        } else {
            setTime([m, s - 1]);
        }
    };

    const getFinishTime = () => {
        const min = minutes === 0 ? 0 : (minutes - 1) - m
        const sec = (seconds !== 0 ? seconds : 60) - s
        return (
            `${min}:${sec}`
        )
    };

    React.useEffect(() => {
        const timerID = setInterval(() => tick(), 1000);
        if (over) {
            getTimerInfo({
                isOver: over,
                finishTime: getFinishTime()
            })
            return clearInterval(timerID)
        }

        return () => {
            return clearInterval(timerID)
        };
    }, [m, s, over, isOver]);

    return (
        <div className="timer-block">
            {/* <div className="container"> */}
            <div className="timer-block-wrap">
                {/* <span><a className="link-to-home-page" href="/">На главную</a></span> */}
                <div className="time-error-block">
                    {/* <span className='error-list'>Ошибки: {resultInfo.errors}/2</span> */}
                    <p className="timer-block-time">Время:
                        {`
                             ${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}
                        `}
                    </p>
                </div>
            </div>
            {/* </div> */}
        </div>
    );
};

export default CountDown;
