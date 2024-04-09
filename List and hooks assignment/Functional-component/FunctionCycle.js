import { useState, useEffect } from 'react';

export default function FunctionCycle({ name }) 
{ // Phase 1: Initialization
  const [age, setAge] = useState(0);
  const [city, setCity] = useState('');

  // Phase 2: Mounting
  useEffect(() => {
    console.log("Component mounted");
    return () => {
      console.log("Component unmounted");
    };
  }, []); // Empty dependency array means this effect runs only once, similar to componentDidMount and componentWillUnmount

  // Phase 3: Updating
  useEffect(() => {
    console.log("Component updated");
  }, [name, age, city]); // Effect runs when any of these dependencies change, similar to componentDidUpdate

  // Phase 4: Unmounting
  useEffect(() => {
    return () => {
      console.log("Clean-up on unmount");
    };
  }, []);

  console.log("Rendering called");

    return (

        <div>
        <h1>My full name is {name}</h1>
        <p>Age: {age}</p>
        <p>City: {city}</p>
        <button onClick={() => setAge(30)}>Set Age</button>
        <button onClick={() => setCity('Ahmedabad')}>Set City</button>
      </div>
    );
    
}