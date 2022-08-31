import './quantityPicker.css';
import{useState} from 'react';

const QuantityPicker = (props) =>{
    const [quantity, setQuantity] = useState(1);

    const increase = () =>{
            console.log('Click increase');
                let number = quantity+1;
                setQuantity(number);
                props.onChange(number);
        
      }
    const decrease = () =>{
        if(quantity >>0){
                   console.log('Click decrease');
            let number = quantity-1;
            setQuantity(number);
            props.onChange(number);
        }
    }
    return (
        <div className="qt-Picker">
            
            <button onClick={increase}>+</button>
            <label >{quantity}</label>
            <button onClick={decrease}>-</button>
        </div>
    );
}

export default  QuantityPicker;