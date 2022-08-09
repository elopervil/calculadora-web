import React, {useState} from "react";
import ResultScreen from "./ResultScreen";
import Keyboard from "./keyboard";

const Calc = (props) => {
    const INPUT_FIRST_NUMBER = 0;
    const OPERATION = 1;
    const INPUT_SECOND_NUMBER = 2;
    const RESULT = 3;
    const DECIMAL = 4;

    const [value, setValue] = useState(0);
    const [firstOperator, setFirstOperator] = useState (0);
    const [operation, setOperation] = useState('');
    const [status, setStatus] = useState (INPUT_FIRST_NUMBER);
    const [saveOperator, setSaveOperator] = useState(0);

    const onInput = (val) => {
        
        if (typeof val === 'number'){
            
            if (status === INPUT_FIRST_NUMBER || status === INPUT_SECOND_NUMBER) {
                setValue((value * 10) + val);
                setSaveOperator(val);
            } else if (status === OPERATION) {
                setValue(val);
                setStatus(INPUT_SECOND_NUMBER);
            } else if (status === DECIMAL){
                if (value.toString().indexOf('.') !== -1){
                    let num = `${value}${val}`;
                    setValue(num);
                } else {
                    if (val !== 0){
                        setValue(value + (val/10));  
                    } else {
                        let num = `${value}.${val}`;
                        setValue(num);
                    }
                }

            }
        } else if (val === 'DEL') {
            setValue(0);
            setSaveOperator(0);
            setStatus(INPUT_FIRST_NUMBER);
        } else if (val === '.') {
            setStatus(DECIMAL);

        } else if (val === '=') {
            if (status === INPUT_SECOND_NUMBER || status === DECIMAL) {
                switch (operation) {
                    case '+' :
                        setValue(firstOperator + value);
                        break;
                    case '-' :
                        setValue(firstOperator - value);
                        break;
                    case '/' :
                        setValue(firstOperator / value);
                        break;
                    case 'x' :
                        setValue(firstOperator * value);
                        break;
                    default:
                        break;
                }
                setStatus(RESULT);
        
            } else if (status === OPERATION) {
                switch (operation) {
                    case '+' :
                        setValue(value + saveOperator);
                        break;
                    case '-' :
                        setValue(value - saveOperator);
                        break;
                    case '/' :
                        setValue(value / saveOperator);
                        break;
                    case 'x' :
                        setValue(value * saveOperator);
                        break;
                    default:
                        break;
                }
                
            } 
        } else {
            setFirstOperator(value);
            setOperation (val);
            setStatus(OPERATION);
        }
    }


    return (
        <div>
            <ResultScreen value={value} />
            <Keyboard onInput={onInput}/>
        </div>
    );
}

export default Calc