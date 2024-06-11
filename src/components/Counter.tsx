import {useState,useEffect} from 'react';


type CounterProps =  {
    initialValue?: number
}

//function Counter(props: CounterProps) {
const Counter = (props: CounterProps) => {

    //let counter = props.initialValue;
    const [counter,setCounter] = useState(props.initialValue);  //Using destructuring usestate return array of 2 elements, and we are assigning to counter and setCounter const.
    useEffect(() => {
        console.log("counter updated", counter);
    },[counter])
    function inc() {
        console.log("Inc Invoked");
        //props is read-only
        //if(props.initialValue) {
            //props.initialValue++;
        //}
        if(counter != undefined) {
            setCounter(counter+1);
            console.log("counter",counter); // Before set counter prints console log will be executed and its asynch call.

        }
            

    }

    function des() {
        if(counter != undefined) {
            setCounter(counter-1);
            //console.log("counter",counter);

        }
    }
return (
    <div><h4>Count : {counter}</h4>
    <div>
        <button onClick={inc}>Increment</button>&nbsp;
        <button onClick={des}>Decrement</button>
    </div>
    </div>
)
}

export default Counter;