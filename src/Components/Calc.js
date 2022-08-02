import React, {useState} from "react";
import ResultScreen from "./ResultScreen";
import Keyboard from "./keyboard";

const Calc = (props) => {
    const INPUT_FIRST_NUMBER = 0;
    const OPERATION = 1;
    const INPUT_SECOND_NUMBER = 2;
    const RESULT = 3;

    const [value, setValue] = useState(0);
    const [firstOperator, setFirstOperator] = useState (0);
    const [operation, setOperation] = useState('');
    const [status, setStatus] = useState (INPUT_FIRST_NUMBER)

    const onInput = (val) => {
        
        if (typeof val === 'number'){
            if (status === INPUT_FIRST_NUMBER || status === INPUT_SECOND_NUMBER) {
                setValue((value * 10) + val)
            } else if (status === OPERATION) {
                setValue(val);
                setStatus(INPUT_SECOND_NUMBER);
            }
        } else if (val === 'DEL') {
            setValue(0);
            setStatus(INPUT_FIRST_NUMBER);
        } else if (val === '.') {

        } else if (val === '=') {
            if (status === INPUT_SECOND_NUMBER) {
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
                        setValue(firstOperator + firstOperator);
                        break;
                    case '-' :
                        setValue(firstOperator - firstOperator);
                        break;
                    case '/' :
                        setValue(firstOperator / firstOperator);
                        break;
                    case 'x' :
                        setValue(firstOperator * firstOperator);
                        break;
                    default:
                        break;
                }
                setFirstOperator(value);
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