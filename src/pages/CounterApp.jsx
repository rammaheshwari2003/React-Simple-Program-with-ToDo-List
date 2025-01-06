import { useSelector, useDispatch } from "react-redux";
import { Increment, Decrement, reset } from "../components/counterSlice";


const CounterApp=()=>{
    const cnt = useSelector((state)=>state.counter.count);
    const dispatch=useDispatch();
    return(
        <>
        <center>
            <h1>Counter Program</h1>
            <hr />
            <h1>{cnt}</h1>
            <button onClick={()=>{dispatch(Increment())}}>Increment</button>
            <button onClick={()=>{dispatch(Decrement())}}>Decrement</button>
            <button onClick={()=>{dispatch(reset())}}>Reset</button>
        </center>
        
        </>
    )
}
export default CounterApp;

