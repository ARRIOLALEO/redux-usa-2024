import {useSelector,useDispatch} from 'react-redux';
import {increment,reset,callApi} from '../slices/counterSlice'
import { useEffect } from 'react';
const Counter = () =>{
    
    const counter = useSelector((state)=> state.counter.value)
    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(callApi())
    },[dispatch])
    
    return (<div>
        <h1>counter {counter}</h1>
        <button onClick={()=>dispatch((increment()))}>counter + 1</button>
        <button onClick={()=>dispatch((reset()))}>reset</button>
    </div>)
}

export default Counter;