import './Main.scss';
import {useEffect, useState} from 'react';

interface mainProps {
    count: number
}

const Main = (props: mainProps) => {

    const [count, setIncrement] = useState (0);

    useEffect(() => {
        console.info('called everytime');
    }, [])
    

    return (
        <div className='main'>
            <h2 className='count'>{count}</h2>
            <button onClick={ ()=> setIncrement(count+1)}>Increment</button>
            <button onClick={() => setIncrement(props.count)}>Reset</button>
        </div>
    )
}

Main.defaultProps = {
    count: 0
}

export default Main;