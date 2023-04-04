import { useSelector, useDispatch } from 'react-redux';
import { increase, decrease } from './CounterSlice';
function Counter() {

    var count = useSelector((appState) => appState.counter.value);

    const dispatch = useDispatch();

    const increaseFn = () => {
        dispatch(increase());
    }
    const decreaseFn = () => {
        dispatch(decrease());
    }
    return (
        <div>

            <button onClick={increaseFn}>Increase</button> <br></br><br></br>
            <button onClick={decreaseFn}>Decrease</button><br></br><br></br>
            {count}

        </div>
    )

}
export default Counter;



