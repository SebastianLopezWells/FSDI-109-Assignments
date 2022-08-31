import './about.css';
import {useState} from 'react';

const AboutMe = () => {
 const [name, setName] = useState('');
        console.log(name);
    const showName = () =>{
        setName('Sebastian Wells');
    }

    return (
    <div className="abouMe">
        <h2> Hey my name is: </h2> 
        <h3>{name}</h3>

        <button onClick={showName}>Show Name</button>
    </div>
    );
};

export default AboutMe;