import React, { useState } from "react";
import { v4 as uuidv4 } from 'uuid';

export default function WorkoutForm( {records, setRecords} ) {

    const [name, setName] = useState('');
    const [course, setCourse] = useState('Web developer');
    const [batch, setBatch] = useState('');


    const handleSubmit = (event) => {
        event.preventDefault();
        
        const data = { id: uuidv4(), name, course, batch }
        
        setRecords([...records, data])

        setName('')
        setCourse('Web developer')
        setBatch('')
    };

  return (
    <div>
        <form className="create" onSubmit={handleSubmit}> 
            <h3>Add a New Record</h3>

            <label>Name:</label>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} />

            <label>Course:</label>
            <select onChange={(e) => setCourse(e.target.value)} value={course}>
              <option value="Web developer">Web developer</option>
              <option value="Web designer">Web designer</option>
              <option value="Graphic designer">Graphic designer</option>
            </select>

            <label>Batch:</label>
            <input type="text" value={batch} onChange={(e) => setBatch(e.target.value)} />

            <button>Add Record</button>
        </form>
    </div>
  )
}
