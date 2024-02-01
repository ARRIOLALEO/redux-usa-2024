import {useSelector,useDispatch} from 'react-redux';
import {increment} from '../slices/counterSlice'

const Counter = () =>{

    const counter = useSelector((state)=> state.counter.value)
    const dispatch = useDispatch()

    return (<div>
        <h1>counter {counter}</h1>
        <button onClick={()=>dispatch((increment()))}>counter + 1</button>
    </div>)
}

export default Counter;