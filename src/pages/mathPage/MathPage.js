import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {types} from "../../redux/types";

function MathPage () {
    const dispatch = useDispatch()
    const result = useSelector(state => state.result)

    const numberOneInput = (event) => {
        dispatch({
            type: types.NEW_NUMBER,
            payload: Number(event.target.value)
        })
    }
    const numberTwoInput = (event) => {
        dispatch({
            type: types.NEW_NUMBER2,
            payload: Number(event.target.value)
        })
    }

    const addNumber = () => {
        dispatch ({
            type: types.ADD_NUMBER,
        })
    }
    const subtractNumber = () => {
        dispatch ({
            type: types.SUBTRACT_NUMBER,
        })
    }
    const multiplyNumber = () => {
        dispatch ({
            type: types.MULTIPLY_NUMBER,
        })
    }
    const divideNumber = () => {
        dispatch ({
            type: types.DIVIDE_NUMBER,
        })
    }

    return (
        <>
            <input type="number" onChange={numberOneInput}/>
            <input type="number" onChange={numberTwoInput}/>
            <button onClick={addNumber}>+</button>
            <button onClick={subtractNumber}>-</button>
            <button onClick={multiplyNumber}>*</button>
            <button onClick={divideNumber}>/</button>
            <div>{result}</div>
        </>
    )
}
export default MathPage;