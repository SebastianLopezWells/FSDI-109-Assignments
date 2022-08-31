import './shoppingList.css'
import {useState} from 'react';

const ShoppingList = () => {
    const [text, setText] = useState('');

    const [items, setItem] = useState([]);

    const Save = () => {
        console.log(text);
        //items.push(text);

        let clone = {...items};
        clone.push(text);
        setItem(clone);
    };

    const textChange = (e) => {
        let value = e.target.value;
        setText(value);
    
    };

    return (
        <div className="shopListContainer">
            <label>Add to the List</label>
            <input  onChange={textChange} type='text' className='shopListInput' placeholder='Add to the List'></input>
            <button type='submit' className='btn btn-primary' onClick={Save}>Add to the List</button>
        
            <ul className='orderedList'>
                  {items.map((item) =>  <li>{item}</li>
                )}
            </ul>   
        </div>
    );
}

export default ShoppingList;